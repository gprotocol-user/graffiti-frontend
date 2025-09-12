"use client";

import { useSubscription, useApolloClient } from "@apollo/client/react";
import { useState } from "react";
import {
  SUB_POSTS_UPDATES,
  SUB_POSTS_UPDATES_BYUSER,
} from "@/lib/listGraffitiQuery";
import { Walls } from "@/lib/generated/codegen/graphql";

interface SubscriptionChangesProps {
  balanceMin: number;
  balanceMax: number;
  wallIndex?: Walls["wallIndex"];
  address?: string;
}

const useSubscriptionChanges = ({
  balanceMin,
  balanceMax,
  wallIndex,
  address,
}: SubscriptionChangesProps) => {
  const [timeNow] = useState(Math.floor(Date.now() / 1000));
  const client = useApolloClient();

  const computeGt = (balanceMin: number): number => {
    if (balanceMin < 1) {
      return 1;
    } else {
      return balanceMin;
    }
  };

  useSubscription(!address ? SUB_POSTS_UPDATES : SUB_POSTS_UPDATES_BYUSER, {
    variables: {
      _lt: balanceMax + 5000,
      _gt: computeGt(balanceMin),
      updated_timestamp: timeNow,
      ...(!address && { wallIndex: wallIndex }),
      ...(address && { address: address }),
    },

    onData: ({ data }) => {
      console.log("SUBCHANGES: ", data);
      if (data && data.data && data.data.graffiti_stream.length > 0) {
        const updatedPost = data.data.graffiti_stream[0];
        client.cache.modify({
          id: client.cache.identify({
            __typename: "graffiti",
            id: updatedPost.id,
          }),
          fields: {
            locked_funds(existingLocked_funds = "") {
              return updatedPost.locked_funds;
            },
          },
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useSubscriptionChanges;
