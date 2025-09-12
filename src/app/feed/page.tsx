import type { NextPage } from "next";
import FeedHeader from "@/components/FeedHeader";
import MobileNavigation from "@/components/MobileNavigation";
import FeedPageTabs from "./FeedPageTabs";

const Feed: NextPage = () => {
  return (
    <div className="nobar relative h-screen overflow-x-hidden overflow-y-scroll bg-zarcon dark:bg-s1">
      <FeedHeader />
      <main className="pb-16 md:pb-0">
        <section className="container mx-auto sm:px-4 2xl:px-0">
          <div className="grid grid-cols-12 px-2 md:gap-8 md:px-0">
            <FeedPageTabs />
          </div>
        </section>
        <MobileNavigation />
      </main>
    </div>
  );
};

export default Feed;
