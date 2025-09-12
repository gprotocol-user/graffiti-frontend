import { Skeleton } from "./ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="post mb-4 rounded-xl bg-white shadow-cardShadow @container/skeleton dark:bg-s2">
      <div className="postHead flex items-center justify-between !rounded-t-xl p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-11 w-11 rounded-full" />
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Skeleton className="h-4 w-12 @[350px]/skeleton:w-24" />
              <span className="block h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-s3" />
              <div className="flex items-center gap-1">
                <span className="text-sm text-slate-200 dark:text-s3">/</span>
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24 @[400px]/skeleton:w-32" />
              <span className="block h-1 w-1 rounded-full bg-slate-200 dark:bg-s3" />
              <Skeleton className="h-4 w-24 @[400px]/skeleton:w-36" />
            </div>
          </div>
        </div>
      </div>
      <div className="postBody">
        <div className="px-4">
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
      <div className="postFooter overflow-hidden rounded-b-xl px-4 py-2">
        <div className="flex flex-row gap-2">
          <button className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 hover:bg-gray-m-100">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
