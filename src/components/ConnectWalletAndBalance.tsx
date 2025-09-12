"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useQueryClient } from "@tanstack/react-query";
import { abi } from "@/lib/abi";
// import { TOKEN_ADDRESS, APP_ADDRESS } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";

import { useEffect } from "react";

import { Loader2 } from "lucide-react";
import useBoundStore from "@/app/context/GlobalZustand";

const ConnectWalletAndBalance = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const lastTransactionReceipt = useBoundStore(
    (state) => state.lastTransactionReceipt,
  );

  const setAllowanceQuerykey = useBoundStore(
    (state) => state.setAllowanceQuerykey,
  );

  const account = useAccount();
  const graffitiToken = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`,
    functionName: "balanceOf",
    args: [account.address ? account.address : "0x0"],
  });

  const allowanceReader = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`,
    functionName: "allowance",
    args: [
      account.address ? account.address : "0x0",
      process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
    ],
  });

  useEffect(() => {
    setAllowanceQuerykey(allowanceReader.queryKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowanceReader.queryKey]);

  let allowedAmount;
  if (allowanceReader.data) {
    allowedAmount = Number(allowanceReader.data) / 10 ** 2;
  }

  let graffitiTokenBalance: number;
  if (graffitiToken.data) {
    graffitiTokenBalance = Number(graffitiToken.data) / 10 ** 2;
  }

  const allowHook = useWriteContract();
  const clickCallback = () => {
    allowHook.writeContract(
      {
        abi: abi,
        address: process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`,
        functionName: "approve",
        args: [
          process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
          BigInt(2500),
        ],
      },
      {
        onSuccess: (data) => {
          toast({
            description: `New amount allowed!`,
          });
          console.log("writecontract: data: ", data);
        },
        onError: (error) => {
          toast({
            description: `${error.name} (See console for more information)`,
            variant: "destructive",
          });
          console.log("writecontract error: ", error);
        },
      },
    );
  };

  //Más facil que todo esto es hacer un watch de los balances, pero puede que no convenga hacer tantos llamados al RPC

  const allowanceTransactionReceipt = useWaitForTransactionReceipt({
    hash: allowHook.data,
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: allowanceReader.queryKey });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowanceTransactionReceipt]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: allowanceReader.queryKey });
    queryClient.invalidateQueries({ queryKey: graffitiToken.queryKey });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastTransactionReceipt]);

  return (
    <div className="flex gap-2">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      className="flex items-center gap-4 rounded-md border border-gray-m-100 p-1.5 hover:bg-gray-50 md:p-2 dark:border-none dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button
                      className="flex items-center gap-4 rounded-md border border-gray-m-100 p-1.5 hover:bg-gray-50 md:p-2 dark:border-none dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
                      onClick={openChainModal}
                    >
                      Wrong network
                    </button>
                  );
                }
                return (
                  <>
                    <button
                      onClick={openAccountModal}
                      className="flex items-center gap-4 rounded-md border border-gray-m-100 p-1.5 text-gray-m-900 hover:bg-gray-50 md:p-2 dark:border-none dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
                    >
                      <div className="hidden items-center gap-2 p-[1px] md:flex">
                        <img
                          src="images/wallet.svg"
                          className="md:h-5 md:w-5"
                          alt=""
                        />{" "}
                        <span className="text-sm font-medium">
                          {account.displayName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="images/grafftiIcon.svg"
                          className="h-4 w-4 md:h-4 md:w-4"
                          alt=""
                        />
                        <span className="text-sm font-medium">
                          {graffitiTokenBalance
                            ? `${graffitiTokenBalance}`
                            : "0"}
                        </span>
                      </div>
                    </button>
                  </>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>

      {account.address && (
        <button
          onClick={clickCallback}
          disabled={allowHook.isPending}
          className="flex items-center gap-4 rounded-md border border-gray-m-100 p-1.5 text-gray-m-900 hover:bg-gray-50 md:p-2 dark:border-none dark:bg-s3 dark:text-slate-300 dark:hover:bg-s4"
        >
          <div className="flex items-center gap-2">
            {allowHook.isPending ? (
              <Loader2 className="h-4 w-24 animate-spin" />
            ) : (
              <span className="text-sm font-medium">
                {`${allowedAmount ? allowedAmount : "0"}`}

                <span> approved </span>
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default ConnectWalletAndBalance;
