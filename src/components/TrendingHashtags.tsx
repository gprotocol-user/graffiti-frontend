"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_FEATURED_HASHTAGS } from "@/lib/listGraffitiQuery";
import { Loader2 } from "lucide-react";
import { abbreviateNumber } from "@/lib/utils";

const mockLeader: { name: string; sum_locked_funds: number }[] = [
  {
    name: "#graff",
    sum_locked_funds: 900,
  },
  {
    name: "#tokenholder",
    sum_locked_funds: 900,
  },
  {
    name: "#labuenavida",
    sum_locked_funds: 900,
  },
  {
    name: "#quelocura",
    sum_locked_funds: 900,
  },
];

const HashtagItem = ({
  position = 1,
  graff = "0",
  name = " ",
}: {
  position?: number;
  graff?: string;
  name?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r p-3 @container/item hover:bg-gradient-to-l",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={"/search?q=" + encodeURIComponent(name)}
            className="bg-white"
          >
            <h2 className="w-16 truncate text-sm font-medium text-blue-500 @[16rem]/item:w-28 @xs/item:w-40 @sm/item:w-56">
              {name}
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-slate-300 p-1 text-xs">
            <img src="images/grafftiIcon.svg" className="h-3.5 w-3.5" alt="" />

            <span className="text-xs">{abbreviateNumber(Number(graff))}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingHashtags = () => {
  const { data, loading } = useQuery(GET_FEATURED_HASHTAGS, {
    pollInterval: 1000 * 60,
  });

  // const data = { trending_hashtags: mockLeader };
  // const loading = false;

  if (loading || !data) {
    return (
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-m-900">
          Leaderboard
        </h2>
        <div className="mb-4 flex justify-center rounded-xl bg-white py-10 shadow-cardShadow">
          <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
        </div>
      </div>
    );
  }

  if (data && !loading) {
    return (
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-m-900 dark:text-slate-300">
          Trending Hashtags
        </h2>
        <div className="mb-4 rounded-xl bg-white p-2 shadow-cardShadow">
          <div className="overflow-hidden rounded-lg">
            {data.hashtag_trends.map((hashtag, index) => (
              <HashtagItem
                key={index}
                position={index + 1}
                graff={Math.floor(
                  hashtag.hashtag_locked_funds / 100,
                ).toString()}
                name={hashtag.hashtag ? hashtag.hashtag : ""}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TrendingHashtags;
