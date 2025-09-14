"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsNew";

import PostsList from "./PostsList";
import ChronoPostsList from "./ChronoPostList";

import LockingDialogs from "./LockingDialogs";

import useBoundStore from "@/app/context/GlobalZustand";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GET_SPECIFIC_COMMUNITY } from "@/lib/listGraffitiQuery";
import { useQuery } from "@apollo/client/react";

const SearchForParams = () => {
  const searchParams = useSearchParams();
  const setSelectedCommunity = useBoundStore(
    (state) => state.setSelectedCommunity,
  );
  const setCommunityNotFound = useBoundStore(
    (state) => state.setCommunityNotFound,
  );
  const wallName = searchParams.get("wall");
  const { data, error, loading } = useQuery(GET_SPECIFIC_COMMUNITY, {
    variables: {
      wallName: wallName ? wallName : "Default Wall",
    },
  });

  useEffect(() => {
    if (!loading) {
      if (data?.walls[0]) {
        setCommunityNotFound(false);
        setSelectedCommunity(data.walls[0]);
      } else {
        setCommunityNotFound(true);
      }
    } else {
      setCommunityNotFound(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallName, data]);

  return <></>;
};

const WallFeed = () => {
  const selectedCommunity = useBoundStore((state) => state.selectedCommunity);
  const communityNotFound = useBoundStore((state) => state.communityNotFound);

  if (communityNotFound) {
    return (
      <div>
        <div>Mh, looks like this community doesn't exist</div>
        <Suspense>
          <SearchForParams />
        </Suspense>
      </div>
    );
  }

  return (
    <div>
      <Suspense>
        <SearchForParams />
      </Suspense>
      <Tabs defaultValue="newest">
        <TabsList className="mb-3 flex items-center gap-1 @container/tabs md:mb-6 md:gap-2">
          <TabsTrigger value="newest" className="text-pretty">
            All
          </TabsTrigger>
          <TabsTrigger value="day" className="text-pretty">
            <span className="hidden @[540px]/tabs:inline">Popular Today</span>
            <span className="@[540px]/tabs:hidden">Today</span>
          </TabsTrigger>
          <TabsTrigger value="week" className="text-pretty">
            <span className="hidden @[540px]/tabs:inline">
              Popular Last Week
            </span>
            <span className="@[540px]/tabs:hidden">Weekly</span>
          </TabsTrigger>
          <TabsTrigger value="time" className="text-pretty">
            <span className="hidden @[540px]/tabs:inline">
              Popular All Time
            </span>
            <span className="@[540px]/tabs:hidden">Time</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="newest">
          <ChronoPostsList
            community={selectedCommunity}
            limit={50}
            from={2}
            until={Math.floor(Date.now() / 1000)}
            keyIdentifier="newest"
          />
        </TabsContent>
        <TabsContent value="day">
          <PostsList
            community={selectedCommunity}
            limit={50}
            from={Math.floor(Date.now() / 1000) - 86400}
            until={Math.floor(Date.now() / 1000)}
            keyIdentifier="day"
          />
        </TabsContent>
        <TabsContent value="week">
          <PostsList
            community={selectedCommunity}
            limit={50}
            from={Math.floor(Date.now() / 1000) - 604800}
            until={Math.floor(Date.now() / 1000) - 86400}
            keyIdentifier="week"
          />
        </TabsContent>
        <TabsContent value="time">
          <PostsList
            community={selectedCommunity}
            limit={50}
            from={1}
            until={Math.floor(Date.now() / 1000)}
            keyIdentifier="time"
          />
        </TabsContent>
      </Tabs>

      <LockingDialogs />
    </div>
  );
};

export default WallFeed;
