"use client";

import { useQuery } from "@apollo/client/react";
import PostFeed from "./PostFeed";

import { useState } from "react";
import { Button } from "./ui/buttonNew";
import PostSkeleton from "./PostSkeleton";
import useSubscriptionChanges from "@/hooks/useSubscriptionChanges";
import { useEffect } from "react";

import { GET_POSTS_TIMESTAMP_AGGREGATE_HELPER } from "@/lib/listGraffitiQuery";
import { Walls } from "@/lib/generated/codegen/graphql";

interface PostsListProps {
  community: Walls;
  from: number;
  until: number;
  limit: number;
  keyIdentifier: string;
}

const PostsList = ({
  community,
  from,
  until,
  limit,
  keyIdentifier,
}: PostsListProps) => {
  const { data, error, loading, fetchMore, refetch } = useQuery(
    GET_POSTS_TIMESTAMP_AGGREGATE_HELPER,
    {
      variables: {
        offset: null,
        from,
        until,
        limit,
        basura: keyIdentifier,
        wallIndex: community.wallIndex,
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
    wallIndex: community.wallIndex,
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
    <div>
      {data?.graffiti_aggregate.nodes.map((x, i) => (
        <PostFeed
          content={x.message}
          username="User"
          userAvatar="https://github.com/shadcn.png"
          community={community.wallName ? community.wallName : "Default Wall"}
          userFallback="CN"
          userAddress={x.address}
          likeCount={x.locked_funds / 100}
          date={x.timestamp}
          key={i}
          postIndex={x.postIndex}
          shouldRedirect
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

export default PostsList;
