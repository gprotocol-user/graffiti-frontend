"use client";

import { useQuery } from "@apollo/client/react";
import PostFeed from "./PostFeed";

import { useState } from "react";
import { Button } from "./ui/buttonNew";

import PostSkeleton from "./PostSkeleton";

import {
  GET_POSTS_USER_BYTIME,
  GET_POSTS_USER_LOCKEDFUNDS,
  GET_POSTS_BYUSER_TIMESTAMP_AGGREGATE,
  GET_POSTS_BUYSER_FUNDS_AGGREGATE,
} from "@/lib/listGraffitiQuery";

import useSubscriptionChanges from "@/hooks/useSubscriptionChanges";

interface UserPostsListProps {
  address: string;
  chrono?: boolean;
}

const UserPostsList = ({ address, chrono }: UserPostsListProps) => {
  const { data, error, loading, fetchMore, refetch } = useQuery(
    chrono
      ? GET_POSTS_BYUSER_TIMESTAMP_AGGREGATE
      : GET_POSTS_BUYSER_FUNDS_AGGREGATE,
    {
      variables: {
        from: 1,
        until: Math.floor(Date.now() / 1000),
        offset: null,
        address,
        basura: chrono ? "newest" : "time",
      },
    },
  );

  //Pagination Function
  const [fetchingMore, setFetching] = useState(false);
  const loadMoreGraffiti = async () => {
    setFetching(true);
    await fetchMore({
      variables: {
        offset: data?.graffiti_aggregate.nodes.length,
      },
    });
    setFetching(false);
  };

  const reFetchGraffiti = async () => {
    setFetching(true);
    await refetch();
    setFetching(false);
  };

  useSubscriptionChanges({
    balanceMin: data?.graffiti_aggregate?.aggregate?.min?.locked_funds ?? 0,
    balanceMax: data?.graffiti_aggregate?.aggregate?.max?.locked_funds ?? 0,
    address: address,
  });

  if (loading)
    return (
      <div className="relative">
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  if (error) return <p className="text-slate-700">Error: {error.message}</p>;

  if (data?.graffiti_aggregate.nodes.length == 0)
    return (
      <div>
        {fetchingMore ? (
          <>
            <PostSkeleton />
            <PostSkeleton />
          </>
        ) : (
          <>
            <p className="mb-4 text-center text-slate-700">
              Looks like there's nothing here!
            </p>
            <div className="flex justify-center">
              <Button className="mb-4" onClick={reFetchGraffiti}>
                Refresh
              </Button>
            </div>
          </>
        )}
      </div>
    );

  return (
    <div className="relative">
      {data?.graffiti_aggregate.nodes.map((x, i) => (
        <PostFeed
          content={x.message}
          username="User"
          community={
            x.graffitiToWalls?.wallName ? x.graffitiToWalls?.wallName : ""
          }
          userAvatar="https://github.com/shadcn.png"
          userFallback="CN"
          userAddress={x.address}
          likeCount={x.locked_funds / 100}
          date={x.timestamp}
          postIndex={x.postIndex}
          key={i}
        />
      ))}
      {fetchingMore ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : (
        <div className="flex justify-center">
          <Button className="mb-4" onClick={loadMoreGraffiti}>
            More Posts
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserPostsList;
