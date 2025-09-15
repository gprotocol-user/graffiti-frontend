import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Wallet, ClipboardCheck, SprayCan } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import makeBlockie from "ethereum-blockies-base64";

import { useQuery } from "@apollo/client/react";
import { GET_USER_INFO } from "@/lib/listGraffitiQuery";

import { convertTimestampNoMinutes } from "@/lib/utils";

interface UserCardProps {
  userAddress: string;
  username: string;
}

const UserCard = ({ userAddress, username }: UserCardProps) => {
  const account = useAccount();
  const [open, setOpen] = useState(false);

  const { data, error, loading, fetchMore } = useQuery(GET_USER_INFO, {
    variables: {
      address: userAddress,
    },
    fetchPolicy: "no-cache",
  });

  const totalLockedfunds =
    data?.graffiti_aggregate.aggregate?.sum?.locked_funds;
  const totalPosts = data?.graffiti_aggregate.aggregate?.count;
  const firstPostTimestamp = data?.graffiti_aggregate.aggregate?.min?.timestamp;

  return (
    <div className="mb-4 overflow-hidden rounded-xl bg-white shadow-cardShadow dark:bg-s2">
      <div>
        <img src="/images/profilebanner.png" className="w-full" alt="" />
      </div>
      <div className="relative z-10 -mt-12 p-3">
        <Avatar className="relative mb-3 h-20 w-20 rounded-full border-4 border-white shadow-lg">
          <AvatarImage src={makeBlockie(userAddress)} alt={username} />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold text-gray-m-900 dark:text-slate-300">
          {username}
        </h2>
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
              className="text-sm text-gray-m-500"
              onClick={() => {
                navigator.clipboard.writeText(userAddress);
              }}
            >
              {userAddress.slice(0, 25) + "..."}
            </span>
          </PopoverTrigger>
          <PopoverContent className="flex w-auto items-center gap-2 text-sm">
            <span>Copied to clipboard!</span> <ClipboardCheck size={18} />
          </PopoverContent>
        </Popover>

        {/* Amounts Info */}
        <div className="mt-3 grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
            <img
              src="/images/grafftiIconOutline.svg"
              className="h-6 w-6 dark:invert"
              alt=""
            />
            <span className="block text-xs">
              {totalLockedfunds ? totalLockedfunds : "0"}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
            <SprayCan strokeWidth={1} className="relative right-1" />
            <span className="block text-xs">
              {totalPosts ? totalPosts : "0"}
            </span>
          </div>
          {totalPosts ? (
            <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 dark:bg-s3 dark:text-slate-300">
              <span className="block text-sm">First Graffiti</span>
              <span className="block text-xs">
                {firstPostTimestamp &&
                  convertTimestampNoMinutes(firstPostTimestamp)}
              </span>
            </div>
          ) : (
            <></>
          )}

          {account.address == userAddress && (
            <button className="col-span-4 flex flex-row items-center justify-center gap-1 rounded-lg bg-gray-m-50 p-3 text-gray-m-900 hover:bg-gray-m-100 dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4">
              <Wallet strokeWidth={1} />
              <span className="block text-xs">Unlock all funds</span>
            </button>
          )}
        </div>

        {account.address == userAddress && (
          <>
            <hr className="my-4 dark:border-slate-900" />
            <div className="flex flex-col gap-2">
              <button className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-3 text-gray-m-900 hover:bg-gray-100 dark:bg-s3 dark:text-slate-300 hover:dark:bg-s4">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/settings.svg"
                    className="h-5 w-5 dark:invert"
                    alt=""
                  />
                  <span className="text-sm font-medium">Setting</span>
                </div>
                <img
                  src="/images/arrowHeadRight.svg"
                  className="h-5 w-5 dark:invert"
                  alt=""
                />
              </button>
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  if (!chain?.unsupported && connected)
                    return (
                      <button
                        onClick={openAccountModal}
                        className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-3 text-gray-m-900 hover:bg-gray-100 dark:bg-s3 dark:text-slate-300 hover:dark:bg-s4"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/logout.svg"
                            className="h-5 w-5 dark:invert"
                            alt=""
                          />
                          <span className="text-sm font-medium">Logout</span>
                        </div>
                      </button>
                    );
                }}
              </ConnectButton.Custom>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;
