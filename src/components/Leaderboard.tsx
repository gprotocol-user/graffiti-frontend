"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import makeBlockie from "ethereum-blockies-base64";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_LEADERBOARD } from "@/lib/listGraffitiQuery";
import { Loader2 } from "lucide-react";
import { abbreviateNumber } from "@/lib/utils";

const LeaderboardItem = ({
  position = 1,
  graff = "0",
  name = " ",
}: {
  position?: number;
  graff?: string;
  name?: string;
}) => {
  let numberStyle =
    "flex h-5 w-5 items-center justify-center rounded-full border border-gray-m-200 text-center text-xs font-semibold @[12rem]/item:flex hidden";
  let gradient = "hover:bg-gray-100";
  let src = "/images/star.svg";
  if (position === 1) {
    gradient = "from-[#FEF0C7] to-[#FFFFFF]";
    src = "/images/gold.svg";
  }
  if (position === 2) {
    gradient = "from-[#D1FADF] to-[#FFFFFF]";
    src = "/images/silver.svg";
  }
  if (position === 3) {
    gradient = "from-[#FEE4E2] to-[#FFFFFF]";
    src = "/images/bronze.svg";
  }
  if (position < 4) {
    numberStyle =
      "flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-b from-[#FFE01D] to-[#FFB327] text-center text-xs font-semibold @[12rem]/item:flex hidden";
  }

  return (
    <Link href={"/user?add=" + name} className="bg-white">
      <div
        className={cn(
          "bg-gradient-to-r p-3 @container/item hover:bg-gradient-to-l",
          gradient,
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={numberStyle}>{position}</span>
            <Avatar className="hidden @[10rem]/item:block">
              <AvatarImage src={makeBlockie(name)} alt={name} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <h2 className="w-16 truncate text-sm font-medium text-gray-m-900 @[16rem]/item:w-28 @xs/item:w-40 @sm/item:w-56">
              {/* {name.slice(0, 5) + "..."} */}
              {name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img
                src="/images/grafftiIcon.svg"
                className="h-3.5 w-3.5"
                alt=""
              />
              <span className="text-xs">{abbreviateNumber(Number(graff))}</span>
            </div>
            <img
              src={src}
              className="hidden h-5 w-5 @[12rem]/item:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Leaderboard = () => {
  const { data, loading } = useQuery(GET_LEADERBOARD, {
    pollInterval: 1000 * 30,
  });

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
          Leaderboard
        </h2>
        <div className="mb-4 rounded-xl bg-white p-2 shadow-cardShadow">
          <div className="overflow-hidden rounded-lg">
            {data.graffiti_leaderboard.map((leader, index) => (
              <LeaderboardItem
                key={index}
                position={index + 1}
                graff={Math.floor(leader.sum_locked_funds / 100).toString()}
                name={leader.address ?? " "}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Leaderboard;
