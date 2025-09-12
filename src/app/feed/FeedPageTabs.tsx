"use client";

import { useEffect, useRef } from "react";
import CommunitySearch from "@/components/CommunitySearch";
import CreatePostFeed from "@/components/CreatePostFeed";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";
import PopularPosts from "@/components/PopularPosts";
import Telegram from "@/components/Telegram";
import WallFeed from "@/components/WallFeed";
import useBoundStore, {
  SelectedMobileTabSlice,
} from "../context/GlobalZustand";
import { cn } from "@/lib/utils";
import TrendingHashtags from "@/components/TrendingHashtags";

const CommunityTitle = () => {
  const selectedCommunity = useBoundStore((state) => state.selectedCommunity);
  const communityNotFound = useBoundStore((state) => state.communityNotFound);
  return (
    <h2 className="mb-4 text-lg font-semibold text-gray-m-900 dark:text-slate-300">
      {communityNotFound ? "There was a problem" : selectedCommunity.wallName}
    </h2>
  );
};

const FeedPageTabs = () => {
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
        className={cn("col-span-12 pt-16 md:col-span-6 md:block md:pt-24")}
      >
        <CommunityTitle />
        <CreatePostFeed />
        <WallFeed />
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

export default FeedPageTabs;
