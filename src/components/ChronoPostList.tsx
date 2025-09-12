"use client";

import { useQuery } from "@apollo/client/react";
import PostFeed from "./PostFeed";

import { useState } from "react";
import { Button } from "./ui/buttonNew";

import PostSkeleton from "./PostSkeleton";
import useSubscriptionChangesAndNew from "@/hooks/useSubscriptionChangesAndNew";

import { GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_TEST } from "@/lib/listGraffitiQuery";
import { Badge } from "./ui/badge";
import { Walls } from "@/lib/generated/codegen/graphql";

interface ChronoPostsListProps {
  community: Walls;
  from: number;
  until: number;
  limit: number;
  keyIdentifier: string;
}

const ChronoPostsList = ({
  community,
  from,
  until,
  limit,
  keyIdentifier,
}: ChronoPostsListProps) => {
  const { data, error, loading, fetchMore, refetch } = useQuery(
    GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_TEST,
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

  const { newPosts, handleViewNewPosts } = useSubscriptionChangesAndNew({
    keyIdentifier,
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
    <div className="relative">
      {newPosts.length > 0 && (
        <div className="sticky top-24 mb-4 flex justify-center">
          <Badge className="cursor-pointer" onClick={handleViewNewPosts}>
            New Graffitis Available
          </Badge>
        </div>
      )}

      {data?.graffiti_aggregate.nodes.map((x, i) => (
        <PostFeed
          content={x.message}
          username="User"
          community={community.wallName ? community.wallName : "Default Wall"}
          userAvatar="https://github.com/shadcn.png"
          userFallback="CN"
          userAddress={x.address}
          likeCount={x.locked_funds / 100}
          date={x.timestamp}
          postIndex={x.postIndex}
          key={i}
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

export default ChronoPostsList;
