"use client";

import {
  FieldMergeFunction,
  HttpLink,
  ApolloLink,
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ErrorLink } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { SetContextLink } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { offsetLimitPagination } from "@apollo/client/utilities";

import { Graffiti } from "@/lib/generated/codegen/graphql";
import Turnstile from "@/components/Captcha";
import { useMemo } from "react";
import useJWT from "@/hooks/useJWT";

const makeClient = (revalidateCallback: Function) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_HTTP_ENDPOINT,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_HASURA_WS_ENDPOINT as string,
      connectionParams: () => {
        const token = localStorage.getItem("jwt");
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    }),
  );

  const authLink = new SetContextLink((prevContext, _) => {
    const { headers } = prevContext;
    const token = localStorage.getItem("jwt");
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const splitLink = ApolloLink.split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      for (const err of error.errors) {
        if (err.extensions?.code === "invalid-jwt") {
          revalidateCallback(); // your callback
        }
      }
    } else if (CombinedProtocolErrors.is(error)) {
      error.errors.forEach(({ message, extensions }) => {
        console.log(
          `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`,
        );
      });
    } else {
      console.error(`[Network error]: ${error}`);
    }
  });

  const client = new ApolloClient({
    devtools: {
      enabled: true,
    },
    link: ApolloLink.from([errorLink, splitLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            search_posts: offsetLimitPagination(["$query"]),
            graffiti: offsetLimitPagination(["order_by", "where"]),
            graffiti_aggregate: {
              keyArgs: ["$basura", "$wallIndex", "$address"],
              merge(
                existing = {
                  nodes: [],
                  aggregate: {
                    min: { locked_funds: null },
                    max: { locked_funds: null, timestamp: null },
                  },
                },
                incoming,
                options,
              ) {
                const { nodes: existingNodes = [] }: { nodes: Graffiti[] } =
                  existing;
                const { nodes: incomingNodes = [] }: { nodes: Graffiti[] } =
                  incoming;

                console.log("estoy dentro del ApolloWrapper merge");

                // Merge the nodes using the offsetLimitPagination helper
                const fieldPolicy = offsetLimitPagination();
                const mergeFunction = fieldPolicy.merge as FieldMergeFunction;
                const mergedNodes: Graffiti[] = mergeFunction(
                  existingNodes,
                  incomingNodes,
                  options,
                );

                // Helper function to filter out null values
                const nonNull = (value: any) => {
                  return value !== null && value !== undefined;
                };

                let minLockedFunds, maxLockedFunds, maxTimestamp;

                if (incoming.aggregate) {
                  // Recalculate the global minimum and maximum locked_funds
                  minLockedFunds = Math.min(
                    ...mergedNodes
                      .map((node) => node.locked_funds)
                      .filter(nonNull),
                    existing.aggregate.min.locked_funds !== null
                      ? existing.aggregate.min.locked_funds
                      : Infinity,
                    incoming.aggregate.min.locked_funds !== null
                      ? incoming.aggregate.min.locked_funds
                      : Infinity,
                  );

                  maxLockedFunds = Math.max(
                    ...mergedNodes
                      .map((node) => node.locked_funds)
                      .filter(nonNull),
                    existing.aggregate.max.locked_funds !== null
                      ? existing.aggregate.max.locked_funds
                      : -Infinity,
                    incoming.aggregate.max.locked_funds !== null
                      ? incoming.aggregate.max.locked_funds
                      : -Infinity,
                  );

                  maxTimestamp = Math.max(
                    ...mergedNodes
                      .map((node) => node.timestamp)
                      .filter(nonNull),
                    existing.aggregate.max.timestamp !== null
                      ? existing.aggregate.max.timestamp
                      : -Infinity,
                    incoming.aggregate.max.timestamp !== null
                      ? incoming.aggregate.max.timestamp
                      : -Infinity,
                  );
                } else {
                  // Recalculate the global minimum and maximum locked_funds
                  minLockedFunds = Math.min(
                    ...mergedNodes
                      .map((node) => node.locked_funds)
                      .filter(nonNull),
                    existing.aggregate.min.locked_funds !== null
                      ? existing.aggregate.min.locked_funds
                      : Infinity,
                  );

                  maxLockedFunds = Math.max(
                    ...mergedNodes
                      .map((node) => node.locked_funds)
                      .filter(nonNull),
                    existing.aggregate.max.locked_funds !== null
                      ? existing.aggregate.max.locked_funds
                      : -Infinity,
                  );

                  maxTimestamp = Math.max(
                    ...mergedNodes
                      .map((node) => node.timestamp)
                      .filter(nonNull),
                    existing.aggregate.max.timestamp !== null
                      ? existing.aggregate.max.timestamp
                      : -Infinity,
                  );
                }

                return {
                  ...incoming,
                  nodes: mergedNodes,
                  aggregate: {
                    min: {
                      locked_funds:
                        minLockedFunds !== Infinity ? minLockedFunds : null,
                    },
                    max: {
                      locked_funds:
                        maxLockedFunds !== -Infinity ? maxLockedFunds : null,
                      timestamp:
                        maxTimestamp !== -Infinity ? maxTimestamp : null,
                    },
                  },
                };
              },

              read(existing) {
                if (existing) {
                  return {
                    ...existing,
                    nodes: existing.nodes.slice(),
                  };
                }
              },
            },
          },
        },
      },
    }),
  });
  return client;
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const { loading, captchaResolved, handleJWTReissue, handleVerify } = useJWT();

  const client = useMemo(
    () => makeClient(handleJWTReissue),
    [handleJWTReissue],
  );

  if (loading) {
    return;
  }

  if (!captchaResolved) {
    return (
      <div className="flex h-screen flex-row items-center justify-center bg-slate-100">
        <Turnstile onVerify={handleVerify} />
      </div>
    );
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
