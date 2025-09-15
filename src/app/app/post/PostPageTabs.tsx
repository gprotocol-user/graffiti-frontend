"use client";

import { Suspense, useEffect, useRef } from "react";
import CommunitySearch from "@/components/CommunitySearch";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";
import PopularPosts from "@/components/PopularPosts";
import Telegram from "@/components/Telegram";
import useBoundStore, {
  SelectedMobileTabSlice,
} from "../../context/GlobalZustand";
import { cn } from "@/lib/utils";
import PostFeed from "@/components/PostFeed";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_SPECIFIC_POST } from "@/lib/listGraffitiQuery";
import { useState } from "react";
import { Graffiti } from "@/lib/generated/codegen/graphql";
import PostSkeleton from "@/components/PostSkeleton";
import LockingDialogs from "@/components/LockingDialogs";
import TrendingHashtags from "@/components/TrendingHashtags";

const SearchForParams = ({ setPost }: { setPost: Function }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data, error, loading } = useQuery(GET_SPECIFIC_POST, {
    variables: {
      id: Number(id),
    },
  });

  useEffect(() => {
    if (!loading) {
      if (data?.graffiti[0]) {
        setPost(data.graffiti[0]);
      } else {
        setPost(undefined);
      }
    }
  }, [data, loading, setPost]);

  return <></>;
};

const PostPageTabs = () => {
  const [post, setPost] = useState<Graffiti | "loading">("loading");

  // Refs for each tab
  const communityRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const leaderboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Hide all tabs
    communityRef.current?.classList.add("hidden");
    homeRef.current?.classList.add("hidden");
    leaderboardRef.current?.classList.add("hidden");

    const cb = ({ selectedMobileTab }: SelectedMobileTabSlice) => {
      // Show the selected tab only
      if (selectedMobileTab === "community") {
        communityRef.current?.classList.remove("hidden");
        homeRef.current?.classList.add("hidden");
        leaderboardRef.current?.classList.add("hidden");
      } else if (selectedMobileTab === "feed") {
        homeRef.current?.classList.remove("hidden");
        communityRef.current?.classList.add("hidden");
        leaderboardRef.current?.classList.add("hidden");
      } else if (selectedMobileTab === "leaderboard") {
        leaderboardRef.current?.classList.remove("hidden");
        communityRef.current?.classList.add("hidden");
        homeRef.current?.classList.add("hidden");
      }
    };

    // Run once on mount
    const initialTab = useBoundStore.getState();
    cb(initialTab);

    const unsubscribe = useBoundStore.subscribe(cb);

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        ref={communityRef}
        className={cn(
          "nobar sticky top-0 col-span-12 overflow-x-hidden overflow-y-scroll py-16 md:col-span-3 md:block md:h-dvh md:pt-24",
        )}
      >
        <CommunitySearch />
        <hr className="mb-2" />
        <Telegram />
        <PopularPosts />
      </div>
      <div
        ref={homeRef}
        className={cn(
          "col-span-12 mt-12 pt-16 md:col-span-6 md:block md:pt-24",
        )}
      >
        <Suspense>
          <SearchForParams setPost={setPost} />
          {post == "loading" ? (
            <PostSkeleton />
          ) : (
            <>
              {post ? (
                <>
                  <PostFeed
                    community={
                      post.graffitiToWalls?.wallName
                        ? post.graffitiToWalls.wallName
                        : "null"
                    }
                    content={post.message}
                    date={post.timestamp}
                    likeCount={post.locked_funds / 100}
                    userAddress={post.address}
                    userAvatar="https://github.com/shadcn.png"
                    userFallback="CN"
                    username="User"
                    shouldRedirect
                    shouldRedirectToCommunity
                  />
                  <LockingDialogs />
                </>
              ) : (
                <div className="font-semibold">Post not found!</div>
              )}
            </>
          )}
        </Suspense>
      </div>
      <div
        ref={leaderboardRef}
        className={cn(
          "nobar order-2 col-span-12 -mb-16 overflow-x-hidden overflow-y-scroll py-16 md:sticky md:top-0 md:order-3 md:col-span-3 md:block md:h-dvh md:pt-24",
        )}
      >
        <Leaderboard />
        <TrendingHashtags />
        <Footer />
      </div>
    </>
  );
};

export default PostPageTabs;
