"use client";

import makeBlockie from "ethereum-blockies-base64";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wallet, ClipboardCheck } from "lucide-react";

import Link from "next/link";

import { useAccount } from "wagmi";
import { useState } from "react";
import useBoundStore from "@/app/context/GlobalZustand";

interface PostProps {
  content: string;
  username: string;
  userAvatar: string;
  userFallback: string;
  userAddress: string;
  likeCount: number;
  community: string;
  date: number;
  postIndex?: number | null;
  shouldRedirect?: boolean;
  shouldRedirectToCommunity?: boolean;
  shouldRedirectToPost?: boolean;
}

function convertTimestamp(unixTimestamp: number) {
  // Create a new JavaScript Date object based on the Unix timestamp
  var date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

  // Extract the desired components
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  var day = ("0" + date.getDate()).slice(-2);
  var year = date.getFullYear();

  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);

  // Format the date and time
  var formattedDate =
    month + "/" + day + "/" + year + " " + hours + ":" + minutes;

  return formattedDate;
}

type FormValues = {
  amount: number;
};

const PostFeed = ({
  content,
  username,
  userAvatar,
  userFallback,
  userAddress,
  likeCount = 0,
  date,
  community,
  postIndex,
  shouldRedirect,
  shouldRedirectToCommunity,
  shouldRedirectToPost,
}: PostProps) => {
  const [open, setOpen] = useState(false);
  const account = useAccount();

  const setLockingPostIndex = useBoundStore(
    (state) => state.setLockingPostIndex,
  );
  const setLockingDialogOpen = useBoundStore(
    (state) => state.setLockingDialogOpen,
  );
  const setUnlockingDialogOpen = useBoundStore(
    (state) => state.setUnlockingDialogOpen,
  );
  const setUnlockingPostIndex = useBoundStore(
    (state) => state.setUnlockingPostIndex,
  );
  const setUnlockingPostMaxLikes = useBoundStore(
    (state) => state.setUnlockingPostMaxLikes,
  );

  // Expresión regular para encontrar hashtags
  const hashtagRegex = /#\w+/g;

  // Función para convertir el texto en JSX con links
  const parseContent = (text: string) => {
    const parts = text.split(hashtagRegex);
    const matches = Array.from(text.matchAll(hashtagRegex));

    // Generar JSX intercalando los textos con los links
    return parts.flatMap((part, index) => {
      const hashtag = matches[index]?.[0]; // El hashtag correspondiente, si existe
      return hashtag
        ? [
            part, // Texto previo al hashtag
            <Link
              key={index}
              href={`/search?q=${encodeURIComponent("#" + hashtag.slice(1))}`}
              className="text-blue-500"
            >
              {hashtag}
            </Link>,
          ]
        : [part]; // Si no hay hashtag, solo texto
    });
  };

  return (
    <div className="post mb-4 rounded-xl bg-white shadow-cardShadow dark:bg-s2 dark:text-slate-200">
      <div className="postHead flex items-center justify-between !rounded-t-xl p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={makeBlockie(userAddress)} alt={username} />
            <AvatarFallback>{userFallback}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2 text-gray-m-900 dark:text-slate-300">
              {shouldRedirect ? (
                <Link href={"/user?add=" + userAddress}>
                  <span className="mb-0 text-sm font-semibold">{username}</span>
                </Link>
              ) : (
                <span className="mb-0 text-sm font-semibold">{username}</span>
              )}

              <span className="block h-1.5 w-1.5 rounded-full bg-quilGrey" />
              {shouldRedirect && !shouldRedirectToCommunity ? (
                <span className="text-sm">/{community}</span>
              ) : (
                <Link href={"/feed?wall=" + encodeURIComponent(community)}>
                  <span className="text-sm">/{community}</span>
                </Link>
              )}
            </div>
            <div className="flex items-center gap-2 text-raven dark:text-slate-400">
              {/* Copy Address To Clipboard */}
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
                    className="text-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(userAddress);
                    }}
                  >
                    {userAddress.slice(0, 13) + "..."}
                  </span>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto items-center gap-2 text-sm">
                  <span>Copied to clipboard!</span> <ClipboardCheck size={18} />
                </PopoverContent>
              </Popover>
              {/* Copy Address To Clipboard End */}

              <span className="block h-1 w-1 rounded-full bg-quilGrey" />
              {shouldRedirectToPost ? (
                <Link href={"/post?id=" + postIndex?.toString()}>
                  <span className="text-sm">{convertTimestamp(date)}</span>
                </Link>
              ) : (
                <span className="text-sm">{convertTimestamp(date)}</span>
              )}
            </div>
          </div>
        </div>
        {/* <div tabIndex={0} className="group relative inline-block">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-m-100">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16Z"
                fill="#737373"
              />
              <path
                d="M18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16Z"
                fill="#737373"
              />
              <path
                d="M25 16C25 17.1046 24.1046 18 23 18C21.8954 18 21 17.1046 21 16C21 14.8954 21.8954 14 23 14C24.1046 14 25 14.8954 25 16Z"
                fill="#737373"
              />
            </svg>
          </button>
          <ul className="animate-slideIn absolute right-0 z-10 hidden w-40 list-none rounded-md bg-gray-50 p-2 shadow-lg group-focus-within:block">
            <li className="cursor-pointer rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-200">
              Join Now
            </li>
            <li className="cursor-pointer rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-200">
              Details
            </li>
          </ul>
        </div> */}
      </div>
      <div className="postBody">
        <div className="px-4">
          <p className="pb-4 text-sm text-gray-m-700 dark:text-slate-300">
            {parseContent(content)}
          </p>
        </div>
      </div>
      <div className="postFooter overflow-hidden rounded-b-xl px-4 py-2">
        <div className="flex flex-row gap-2">
          {/* <button className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 hover:bg-gray-m-100">
            <img src="images/chatIcon.svg" className="h-5 w-5" alt="" />
            <span className="text-gray-m-900">23</span>
          </button> */}
          <button
            className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 text-gray-m-900 hover:bg-gray-m-100 dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
            onClick={() => {
              setLockingDialogOpen(true);
              setLockingPostIndex(postIndex);
            }}
          >
            <img
              src="/images/grafftiIconOutline.svg"
              className="h-5 w-5 dark:invert"
              alt=""
            />

            <span>{likeCount}</span>
          </button>
          {account.address == userAddress && likeCount > 0 && (
            <button
              className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 text-gray-m-900 hover:bg-gray-m-100 dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
              onClick={() => {
                setUnlockingDialogOpen(true);
                setUnlockingPostIndex(postIndex);
                setUnlockingPostMaxLikes(likeCount);
              }}
            >
              {/* <img src="images/forward.svg" className="h-5 w-5" alt="" /> */}
              <Wallet strokeWidth={1} />
              <span>Unlock</span>
            </button>
          )}
          {/* <button className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 hover:bg-gray-m-100">
            <img src="images/forward.svg" className="h-5 w-5" alt="" />
            <span className="text-gray-m-900">1.2K</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md px-4 py-1.5 hover:bg-gray-m-100">
            <img src="images/save.svg" className="h-5 w-5" alt="" />
            <span className="text-gray-m-900">1.7K</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
