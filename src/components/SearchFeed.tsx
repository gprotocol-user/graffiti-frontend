"use client";

import LockingDialogs from "@/components/LockingDialogs";
import { GET_QUERY_SEARCH, GET_USER_INFO } from "@/lib/listGraffitiQuery";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import PostFeed from "@/components/PostFeed";
import PostSkeleton from "@/components/PostSkeleton";
import { Button } from "@/components/ui/buttonNew";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabsNew";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import makeBlockie from "ethereum-blockies-base64";
import { convertTimestampNoMinutes } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { ClipboardCheck, SprayCan, ChevronRight } from "lucide-react";
import Link from "next/link";

interface AddressSearchResultProps {
  address: string;
  totalLockedfunds: number;
  totalPosts: number;
  firstPostTimestamp: number;
}

const AddressSearchResult = ({
  address,
  totalLockedfunds,
  totalPosts,
  firstPostTimestamp,
}: AddressSearchResultProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="post mb-4 rounded-xl bg-white p-4 shadow-cardShadow dark:bg-s2 dark:text-slate-200">
      <div className="flex flex-row gap-4">
        <div>
          <Avatar className="relative mb-3 h-20 w-20 rounded-full">
            <AvatarImage src={makeBlockie(address)} alt={address} />
            <AvatarFallback>{address}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-grow flex-row justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-m-900 dark:text-slate-300">
              User
            </h2>
            <Popover
              onOpenChange={() => {
                setOpen(true);
                setTimeout(() => {
                  setOpen(false);
                }, 1000);
              }}
              open={open}
            >
              <PopoverTrigger>
                <span
                  className="text-sm text-gray-m-500"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                  }}
                >
                  {address.slice(0, 25) + "..."}
                </span>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto items-center gap-2 text-sm">
                <span>Copied to clipboard!</span> <ClipboardCheck size={18} />
              </PopoverContent>
            </Popover>
          </div>
          <Link href={"/user?add=" + address}>
            <div className="pt-2">
              <ChevronRight
                className="text-gray-m-500"
                size={40}
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Amounts Info */}
      <div className="mt-3 grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
          <img
            src="images/grafftiIconOutline.svg"
            className="h-6 w-6 dark:invert"
            alt=""
          />
          <span className="block text-xs">
            {totalLockedfunds ? totalLockedfunds : "0"}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
          <SprayCan strokeWidth={1} className="relative right-1" />
          <span className="block text-xs">{totalPosts ? totalPosts : "0"}</span>
        </div>
        {totalPosts ? (
          <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
            <span className="block text-sm">First Graffiti</span>
            <span className="block text-xs">
              {firstPostTimestamp &&
                convertTimestampNoMinutes(firstPostTimestamp)}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

interface SearchPostsListProps {
  query: string;
}

const SearchPostsList = ({ query }: SearchPostsListProps) => {
  const { data, error, loading, fetchMore, refetch } = useQuery(
    GET_QUERY_SEARCH,
    {
      variables: {
        offset: null,
        query,
      },
    },
  );

  //Pagination Function
  const [fetchingMore, setFetching] = useState(false);
  const loadMoreGraffiti = async () => {
    setFetching(true);
    await fetchMore({
      variables: {
        offset: data?.search_posts.length,
      },
    });
    setFetching(false);
  };

  const reFetchSearch = async () => {
    setFetching(true);
    await refetch();
    setFetching(false);
  };

  if (loading)
    return (
      <div className="relative">
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  if (error) return <p className="text-slate-700">Error: {error.message}</p>;

  if (data?.search_posts.length == 0)
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
              <Button className="mb-4" onClick={reFetchSearch}>
                Refresh
              </Button>
            </div>
          </>
        )}
      </div>
    );

  return (
    <div className="relative">
      {data?.search_posts.map((x, i) => (
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
          shouldRedirectToPost
          shouldRedirectToCommunity
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
            More Results
          </Button>
        </div>
      )}
    </div>
  );
};

const SearchUser = ({ query }: SearchPostsListProps) => {
  const { data, error, loading, fetchMore, refetch } = useQuery(GET_USER_INFO, {
    variables: {
      address: query,
    },
    fetchPolicy: "no-cache",
  });

  //Pagination Function
  const [fetchingMore, setFetching] = useState(false);

  const reFetchSearch = async () => {
    setFetching(true);
    await refetch();
    setFetching(false);
  };

  if (loading)
    return (
      <div className="relative">
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  if (error) return <p className="text-slate-700">Error: {error.message}</p>;

  if (data?.graffiti_aggregate.aggregate?.count == 0)
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
              <Button className="mb-4" onClick={reFetchSearch}>
                Refresh
              </Button>
            </div>
          </>
        )}
      </div>
    );

  return (
    <div className="relative">
      {fetchingMore ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : (
        <>
          <AddressSearchResult
            address={query}
            firstPostTimestamp={
              data?.graffiti_aggregate.aggregate?.min?.timestamp || 0
            }
            totalLockedfunds={
              data?.graffiti_aggregate.aggregate?.sum?.locked_funds || 0
            }
            totalPosts={data?.graffiti_aggregate.aggregate?.count || 0}
          />
          <div className="flex justify-center">
            <Button className="mb-4" onClick={reFetchSearch}>
              Refresh
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

interface UserWallPostsProps {
  query: string;
}

const SearchFeed = ({ query }: UserWallPostsProps) => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-m-900 dark:text-slate-300">
        Search results for: {query}
      </h2>
      <Tabs defaultValue="posts">
        <TabsList className="mb-3 flex flex-wrap items-center gap-1 md:mb-6 md:gap-2">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <SearchPostsList query={query} />
        </TabsContent>
        <TabsContent value="users">
          <SearchUser query={query} />
        </TabsContent>
      </Tabs>

      <LockingDialogs />
    </div>
  );
};

export default SearchFeed;
