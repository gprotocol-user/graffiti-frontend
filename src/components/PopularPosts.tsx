import { GET_FEATURED_POSTS } from "@/lib/listGraffitiQuery";
import { useQuery } from "@apollo/client/react";
import makeBlockie from "ethereum-blockies-base64";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface PopularPostProps {
  postIndex: number;
  img: string;
  lockedFunds: number;
  content: string;
  ago: string;
  address: string;
  wallName: string;
}

function timeAgo(utcTimestamp: number) {
  // Convert the timestamp from seconds to milliseconds
  const timestampMs = utcTimestamp * 1000;
  const now = Date.now();
  const elapsed = now - timestampMs;

  // Define time intervals in milliseconds
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const weeks = days * 7;
  const months = days * 30;
  const years = days * 365;

  if (elapsed < seconds * 10) {
    return "Posted just now";
  } else if (elapsed < minutes) {
    const secs = Math.floor(elapsed / seconds);
    return `${secs}s ago`;
  } else if (elapsed < hours) {
    const mins = Math.floor(elapsed / minutes);
    return `${mins}m ago`;
  } else if (elapsed < days) {
    const hrs = Math.floor(elapsed / hours);
    return `${hrs}h ago`;
  } else if (elapsed < weeks) {
    const dys = Math.floor(elapsed / days);
    return `${dys}d ago`;
  } else if (elapsed < months) {
    const wks = Math.floor(elapsed / weeks);
    return `${wks}w ago`;
  } else if (elapsed < years) {
    const mths = Math.floor(elapsed / months);
    return `${mths}mo ago`;
  } else {
    const yrs = Math.floor(elapsed / years);
    return `${yrs}y ago`;
  }
}

const PopularPost = ({
  postIndex,
  img,
  lockedFunds,
  content,
  ago,
  address,
  wallName,
}: PopularPostProps) => {
  return (
    <Link
      href={"/post?id=" + postIndex.toString()}
      className="mb-3 flex items-start gap-3"
    >
      <img
        src={img}
        className="h-20 w-20 rounded-md border border-gray-100 dark:border-none"
        alt=""
      />
      <div className="flex min-w-0 flex-col">
        <p className="mb-3 line-clamp-2 text-xs dark:text-slate-300">
          {content}
        </p>
        <div className="flex items-center justify-between">
          <span className="block truncate text-xs text-gray-m-900 dark:text-slate-300">
            /{wallName}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="block text-gray-m-900 dark:text-slate-300">
              {lockedFunds} GRAF
            </span>
            {/* <span className="block h-1.5 w-1.5 rounded-full bg-gray-m-900" />
            <span className="block text-gray-900 dark:text-slate-300">
              {comments} comments
            </span> */}
          </div>
          <span className="block text-xs dark:text-slate-300">{ago}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="block truncate text-xs text-gray-m-900 dark:text-slate-300">
            {address}
          </span>
        </div>
      </div>
    </Link>
  );
};

const PopularPosts = () => {
  const { data, error, loading } = useQuery(GET_FEATURED_POSTS, {
    pollInterval: 1000 * 60 * 15,
  });

  if (loading || !data) {
    return (
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-m-900 dark:text-slate-300">
          Popular Posts
        </h2>
        <div className="mb-4 flex justify-center rounded-xl py-10">
          <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-m-900 dark:text-slate-300">
        Popular Posts
      </h2>
      {data?.graffiti_featured_with_walls.map((post, index) => {
        return (
          <PopularPost
            key={post.unindice}
            img={makeBlockie(post.address ? post.address : "empty")}
            content={post.message ? post.message : ""}
            lockedFunds={post.locked_funds ? post.locked_funds / 100 : 0}
            postIndex={post.unindice ? post.unindice : 0}
            address={post.address ? post.address : "0"}
            wallName={post.wallName ? post.wallName : "default"}
            ago={timeAgo(post.timestamp ? post.timestamp : 0)}
          />
        );
      })}
    </div>
  );
};

export default PopularPosts;
