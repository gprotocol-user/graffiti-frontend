"use client";

import { useSubscription, useApolloClient } from "@apollo/client/react";
import { useState } from "react";
import { SUB_POSTS_UPDATES_AND_NEW } from "@/lib/listGraffitiQuery";

import { Graffiti, Scalars, Walls } from "@/lib/generated/codegen/graphql";

interface SubscriptionChangesProps {
  balanceMin?: number;
  balanceMax?: number;
  keyIdentifier: string;
  wallIndex: Walls["wallIndex"];
}

const useSubscriptionChangesAndNew = ({
  keyIdentifier,
  wallIndex,
}: SubscriptionChangesProps) => {
  const client = useApolloClient();

  //New Posts Function
  const [newPosts, setNewPosts] = useState<Graffiti[]>([]);

  const handleViewNewPosts = () => {
    const cacheString = `graffiti_aggregate:{"$basura":"${keyIdentifier}","$wallIndex":${wallIndex}}`;
    newPosts.reverse().forEach((post) => {
      client.cache.modify({
        fields: {
          [cacheString](
            existingGraffitiAggregate: any = {
              nodes: [],
              aggregate: {
                min: { locked_funds: null },
                max: { locked_funds: null, timestamp: null },
              },
            },
          ) {
            const updatedNodes = [
              {
                __ref: client.cache.identify({
                  __typename: "graffiti",
                  id: post.id,
                }),
              },
              ...existingGraffitiAggregate.nodes,
            ];

            // Determine if we need to update the max locked_funds
            const newTimestamp = post.timestamp;
            const currentMaxTimestamp =
              existingGraffitiAggregate?.aggregate?.max?.timestamp;

            const updatedMaxTimestamp =
              currentMaxTimestamp !== null
                ? Math.max(currentMaxTimestamp, newTimestamp)
                : newTimestamp;

            return {
              ...existingGraffitiAggregate,
              nodes: updatedNodes,
              // Keep the existing aggregate values unchanged
              aggregate: {
                ...existingGraffitiAggregate.aggregate,
                max: {
                  ...existingGraffitiAggregate.aggregate.max,
                  timestamp: updatedMaxTimestamp,
                },
              },
            };
          },
        },
      });
    });
    setNewPosts([]);
  };

  const [timeNow, setTimeNow] = useState(Math.floor(Date.now() / 1000));

  const { data: subData, loading } = useSubscription(
    SUB_POSTS_UPDATES_AND_NEW,
    {
      variables: {
        updated_timestamp: timeNow,
      },

      onData: ({ data }) => {
        const cacheString = `graffiti_aggregate:{"$basura":"${keyIdentifier}","$wallIndex":${wallIndex}}`;
        if (data) {
          client.cache.modify({
            fields: {
              [cacheString](
                //[cacheString](
                existingGraffitiAggregate: any = {
                  nodes: [],
                  aggregate: {
                    min: { locked_funds: null },
                    max: { locked_funds: null, timetamp: null },
                  },
                },
                { readField },
              ) {
                if (data && data.data && data.data.graffiti_stream.length > 0) {
                  const updatedPost = data.data.graffiti_stream[0];
                  // Check if the post exists in the cache
                  const postId = client.cache.identify({
                    __typename: "graffiti",
                    id: updatedPost.id,
                  });

                  console.log("postId: ", postId);
                  // Check if the post is already in the nodes array
                  const postExistsInNodes =
                    existingGraffitiAggregate.nodes.some((node: Graffiti) => {
                      return (
                        client.cache.identify({
                          __typename: "graffiti",
                          id: readField("id", node),
                        }) === postId
                      );
                    });
                  console.log("postExistInQuery: ", postExistsInNodes);

                  if (!postExistsInNodes) {
                    // setNewPosts((prevNewPosts) => [updatedPost, ...prevNewPosts]);

                    setNewPosts((prevNewPosts) => {
                      // Find if a post with the same ID already exists in the current state
                      const existingPostIndex = prevNewPosts.findIndex(
                        (post) => post.id === updatedPost.id,
                      );

                      if (existingPostIndex !== -1) {
                        // If found, replace the existing post with the new one
                        return [
                          updatedPost,
                          ...prevNewPosts.slice(0, existingPostIndex),
                          ...prevNewPosts.slice(existingPostIndex + 1),
                        ];
                      }

                      // If not found, add the new post to the beginning of the array
                      return [updatedPost, ...prevNewPosts];
                    });
                  }

                  return {
                    ...existingGraffitiAggregate,
                  };
                }
              },
            },
          });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return {
    newPosts,
    handleViewNewPosts,
  };
};

export default useSubscriptionChangesAndNew;
