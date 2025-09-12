"use client";

import { useEffect, useRef } from "react";
import useBoundStore, {
  SelectedMobileTabSlice,
} from "../context/GlobalZustand";
import SearchFeed from "@/components/SearchFeed";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";
import { cn } from "@/lib/utils";
import CommunitySearch from "@/components/CommunitySearch";
import PopularPosts from "@/components/PopularPosts";
import Telegram from "@/components/Telegram";
import TrendingHashtags from "@/components/TrendingHashtags";

const SearchPageTabs = ({ query }: { query: string }) => {
  // Refs for each tab
  const profileRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const leaderboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Hide all tabs initially
    profileRef.current?.classList.add("hidden");
    homeRef.current?.classList.add("hidden");
    leaderboardRef.current?.classList.add("hidden");

    const cb = ({ selectedMobileTab }: SelectedMobileTabSlice) => {
      // Show the selected tab only
      if (selectedMobileTab === "community") {
        profileRef.current?.classList.remove("hidden");
        homeRef.current?.classList.add("hidden");
        leaderboardRef.current?.classList.add("hidden");
      } else if (selectedMobileTab === "feed") {
        homeRef.current?.classList.remove("hidden");
        profileRef.current?.classList.add("hidden");
        leaderboardRef.current?.classList.add("hidden");
      } else if (selectedMobileTab === "leaderboard") {
        leaderboardRef.current?.classList.remove("hidden");
        profileRef.current?.classList.add("hidden");
        homeRef.current?.classList.add("hidden");
      }
    };

    // Run once on mount to set initial visibility
    const initialTab = useBoundStore.getState();
    cb(initialTab);

    // Subscribe to changes
    const unsubscribe = useBoundStore.subscribe(cb);

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Profile Tab */}
      <div
        ref={profileRef}
        className={cn(
          "nobar order-1 col-span-12 -mb-16 overflow-x-hidden overflow-y-scroll py-16 md:sticky md:top-0 md:order-1 md:col-span-3 md:block md:h-dvh md:pt-24",
        )}
      >
        <CommunitySearch />
        <hr className="mb-2" />
        <Telegram />
        <PopularPosts />
      </div>

      {/* Home Tab */}
      <div
        ref={homeRef}
        className={cn(
          "order-3 col-span-12 pt-16 md:order-2 md:col-span-6 md:block md:pt-24",
        )}
      >
        <div>
          <SearchFeed query={query} />
        </div>
      </div>

      {/* Leaderboard Tab */}
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

export default SearchPageTabs;
