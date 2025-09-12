"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import makeBlockie from "ethereum-blockies-base64";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "./ui/buttonNew";

import { Loader2 } from "lucide-react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { useEffect } from "react";

import { appabi } from "@/lib/appabi";
// import { APP_ADDRESS } from "@/lib/constants";

import useBoundStore from "@/app/context/GlobalZustand";

type FormValues = {
  content: string;
};

const CreatePostFeed = () => {
  const selectedCommunity = useBoundStore((state) => state.selectedCommunity);
  const communityNotFound = useBoundStore((state) => state.communityNotFound);

  const setLastTransactionReceipt = useBoundStore(
    (state) => state.setLastTransactionReceipt,
  );

  const account = useAccount();
  const contractHook = useWriteContract();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onChange" });

  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("data.content: ", data.content);
      contractHook.writeContract(
        {
          abi: appabi,
          address: process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
          functionName: "post",
          args: [selectedCommunity.wallIndex, data.content],
        },
        {
          onSuccess: (data) => {
            console.log("writecontract: data: ", data);
            toast({ description: "Graffiti transaction signed" });
            reset();
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
    } catch (error) {
      setError("root", {
        message: "There was an error",
      });
      reset();
    }
  };

  //Transaction Receipts

  const contractTransactionReceipt = useWaitForTransactionReceipt({
    hash: contractHook.data,
  });

  useEffect(() => {
    setLastTransactionReceipt(contractTransactionReceipt.data);
    if (contractHook.data) {
      toast({ description: "Graffiti on chain!" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractTransactionReceipt.data]);

  if (account.address && !communityNotFound) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 rounded-lg bg-white shadow-cardShadow md:mb-6 dark:bg-s2">
          <div className="flex items-start gap-2 p-4">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={makeBlockie(account.address)}
                alt={account.address}
              />
              <AvatarFallback>{account.address}</AvatarFallback>
            </Avatar>
            <textarea
              {...register("content", {
                required: true,
                maxLength: 250,
              })}
              rows={3}
              className="nobar w-full resize-none overflow-hidden overflow-y-scroll bg-inherit text-sm font-light outline-none placeholder:text-gray-m-700 dark:text-slate-300 dark:placeholder:text-slate-500"
              placeholder="Write your thoughts to be forever immutable..."
            />
          </div>
          <hr className="mt-2 pb-3 dark:border-slate-900" />
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-3">
              <span className="hidden text-gray-m-700 sm:block dark:text-slate-500">
                Cost:
              </span>
              <div className="flex items-center gap-1 text-sm text-gray-m-900 dark:text-slate-300">
                <img
                  src="images/grafftiIcon.svg"
                  className="hidden h-5 w-5 sm:block"
                  alt=""
                />
                <span>
                  {/* {state.selectedCommunityCost} $GRAFF (
                  {state.selectedCommunity}) */}
                  {(selectedCommunity.postCost / 100).toString()} $GRAFF (
                  {selectedCommunity.wallName})
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 dark:text-slate-300">
              <span className={errors.content && "text-red-500"}>
                {watch("content") ? watch("content").length : "0"} / 250
              </span>
              <Button type="submit" disabled={contractHook.isPending}>
                {contractHook.isPending ? (
                  <Loader2 className="w-8 animate-spin" />
                ) : (
                  "Post"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

export default CreatePostFeed;
