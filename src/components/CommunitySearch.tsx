"use client";

import {
  Command,
  CommandEmpty,
  CommandInputCustom,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Command as CommandPrimitive } from "cmdk";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";

import { Input } from "./ui/input";

import { Info, CirclePlus, Loader2 } from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { abbreviateNumber } from "@/lib/utils";

import useBoundStore from "@/app/context/GlobalZustand";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";
import { GET_COMMUNITIES_BY_LOCKED_FUNDS } from "@/lib/listGraffitiQuery";

import makeBlockie from "ethereum-blockies-base64";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { appabi } from "@/lib/appabi";
import {
  // APP_ADDRESS,
  WALL_CREATION_COST_UNITS,
  BURN_AMOUNT,
  TOKEN_DECIMALS,
} from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const communities: any[] = [
  {
    name: "Graffiti Main",
    img: "images/c1.png",
    cost: 1,
    index: 0,
  },
  {
    name: "Let's Connect",
    img: "images/c2.png",
    cost: 1,
    index: 1,
  },
  {
    name: "Graffiti Pros2",
    img: "images/c3.png",
    cost: 1,
    index: 2,
  },
  {
    name: "Coin Posts",
    img: "images/c4.png",
    cost: 1,
    index: 3,
  },
  {
    name: "AV VR Ideas",
    img: "images/c5.png",
    cost: 1,
    index: 4,
  },
  {
    name: "User Protocols",
    img: "images/c6.png",
    cost: 1,
    index: 5,
  },
  {
    name: "Artificial Intelligence",
    img: "images/c7.png",
    cost: 1,
    index: 6,
  },
];

type FormValues = {
  name: string;
  cost: number;
};

const CommunityTutorialDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Info className="h-5 text-slate-500 transition-all hover:text-slate-900" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How do Graffiti communities work?</DialogTitle>
          <DialogDescription>Key concepts to keep in mind</DialogDescription>
        </DialogHeader>
        <div className="text-sm text-slate-800 dark:text-slate-400">
          <hr className="mb-4" />
          <p className="mb-2">
            All communities in Graffiti have a cost in GRAF to post. Each time
            someone posts the tokens are removed from that address and burned.
          </p>
          <p className="mb-2">
            Creating a community allows a given user to choose the name of said
            community and the amount of GRAF required to post, on the other
            hand, it burns that amount times 100.000 from their own account as
            the cost of creating the community.
          </p>

          <p className="text-slate-500">
            For example, creating a community named "Graffiti Pros" in which
            posting cost 2 GRAF would required me to burn 200.000 GRAF of my
            own.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CreateCommunityDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const setLastTransactionReceipt = useBoundStore(
    (state) => state.setLastTransactionReceipt,
  );

  const queryClient = useQueryClient();
  const allowanceQuerykey = useBoundStore((state) => state.allowanceQuerykey);
  const contractHook = useWriteContract();
  const { toast } = useToast();
  const [maxCommunityCost, setMaxCommunityCost] = useState(1);

  useEffect(() => {
    const allowanceValue = queryClient.getQueriesData({
      queryKey: allowanceQuerykey,
    });
    setMaxCommunityCost(
      (10 ** TOKEN_DECIMALS * Number(allowanceValue[0][1] as BigInt)) /
        (10 ** TOKEN_DECIMALS * BURN_AMOUNT * WALL_CREATION_COST_UNITS),
    );
  }, [allowanceQuerykey, queryClient]);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onChange", defaultValues: { cost: 1 } });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      contractHook.writeContract(
        {
          __mode: "prepared",
          abi: appabi,
          address: process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
          functionName: "createWall",
          args: [BigInt(data.cost * 10 ** TOKEN_DECIMALS), data.name],
        },
        {
          onSuccess: (data) => {
            console.log("writecontract: data: ", data);
            toast({ description: "Graffiti transaction signed" });
            reset();
            setDialogOpen(false);
          },
          onError: (error) => {
            toast({
              description: `${error.name} (See console for more information)`,
              variant: "destructive",
            });
            console.log("writecontract error: ", error);
            setDialogOpen(false);
          },
        },
      );
    } catch (error) {
      console.log("writecontract error: ", error);
      toast({
        description: `${error} (See console for more information)`,
        variant: "destructive",
      });
      setError("root", {
        message: "There was an error",
      });
      reset();
      setDialogOpen(false);
    }
  };

  //Transaction Receipts

  const contractTransactionReceipt = useWaitForTransactionReceipt({
    hash: contractHook.data,
  });

  useEffect(() => {
    setLastTransactionReceipt(contractTransactionReceipt.data);
    if (contractHook.data) {
      toast({ description: "Graffiti community created!" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractTransactionReceipt.data]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full bg-gray-m-800 px-4 py-1 text-sm font-medium text-white">
          Create new community
          <CirclePlus className="w-4" />
        </button>
      </DialogTrigger>
      <DialogContent aria-description="Creating a community">
        <DialogHeader>
          <DialogTitle>Create new community</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", {
              required: true,
              minLength: 1,
              maxLength: 50,
            })}
            className="mb-4 w-full text-sm font-light outline-none placeholder:text-gray-m-700 dark:text-slate-300 dark:placeholder:text-slate-500"
            placeholder="Community name"
          />

          <div className="mb-4 inline-flex w-full items-center justify-between gap-3">
            <Input
              {...register("cost", {
                required: true,
                min: {
                  value: 10 ** -TOKEN_DECIMALS,
                  message: "Too small",
                },
                max: {
                  value: maxCommunityCost,
                  message:
                    "You don't have enough GRAF allowed for this operation.",
                },
              })}
              type="number"
              step={10 ** -TOKEN_DECIMALS}
              className={cn(
                "w-full overflow-y-scroll text-sm font-light outline-none placeholder:text-gray-m-700 dark:text-slate-300 dark:placeholder:text-slate-500",
                errors.cost?.message == "Too small" &&
                  "outline-none ring-2 ring-red-500 ring-offset-2 focus-visible:ring-red-500",
              )}
              placeholder="Community posting cost"
            />
            <span>GRAF</span>
          </div>

          {errors.cost?.message == "Too small" ? (
            <p className="text-sm text-red-500">
              The minimum cost per post is 0.01 GRAF
            </p>
          ) : (
            <p className="text-sm text-slate-800 dark:text-slate-400">
              This action will burn{" "}
              {abbreviateNumber(Math.floor(watch("cost") * 100))} GRAF from your
              address
            </p>
          )}

          {errors.cost?.message ==
            "You don't have enough GRAF allowed for this operation." && (
            <p className="text-sm text-red-500">
              You don't have enough GRAF allowed for this operation.
            </p>
          )}

          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-m-800 px-4 py-1 text-sm font-medium text-white"
          >
            Create new community
            <CirclePlus className="w-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const CommunitySearch = () => {
  const { data, error, loading, subscribeToMore } = useQuery(
    GET_COMMUNITIES_BY_LOCKED_FUNDS,
    { pollInterval: 1000 * 60 * 5 },
  );
  const account = useAccount();

  return (
    <div className="mb-4">
      <div className="mb-4 inline-flex w-full justify-between align-middle">
        <h2 className="text-lg font-semibold text-gray-m-900 dark:text-slate-300">
          Communities
        </h2>

        <CommunityTutorialDialog />
      </div>

      <Command className="mb-4 rounded-xl bg-white p-3 shadow-cardShadow dark:bg-s2">
        <CommandInputCustom
          className="text-gray-90 block w-full rounded-lg bg-gray-50 px-4 py-2 ps-10 text-sm text-slate-800 outline-none focus:ring-0"
          placeholder="Search community"
        />
        <CommandList className="nobar mt-4">
          {loading && (
            <CommandPrimitive.Loading>
              <div className="mb-4 flex justify-center rounded-xl bg-white py-10 shadow-cardShadow">
                <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
              </div>
            </CommandPrimitive.Loading>
          )}
          {!loading && <CommandEmpty>No results found.</CommandEmpty>}
          {data?.wallsByFunds.map((community, index) => {
            return (
              <CommandItem
                key={community.wallIndex}
                className="group mb-3 flex cursor-pointer rounded-lg"
              >
                <Link
                  className="w-full"
                  href={
                    "/feed?wall=" +
                    encodeURIComponent(
                      community.wallName ? community.wallName : "",
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={makeBlockie(
                          community.wallName ? community.wallName : " ",
                        )}
                        className="h-10 w-10 rounded-full border-2 border-slate-600 dark:border-s6"
                        alt=""
                      />
                      <h2 className="underline-offset-3 text-sm font-medium text-gray-m-900 group-hover:underline dark:text-slate-300">
                        {community.wallName}
                      </h2>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-slate-300 p-1 text-xs">
                      <img
                        src="images/grafftiIcon.svg"
                        className="h-3.5 w-3.5"
                        alt=""
                      />
                      {abbreviateNumber(
                        Math.floor(community.sum_locked_funds / 100),
                      )}
                    </div>
                  </div>
                </Link>
              </CommandItem>
            );
          })}

          {/* <div className="mb-4 flex justify-center rounded-xl bg-white py-10 shadow-cardShadow">
            <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
          </div> */}
        </CommandList>
      </Command>

      {account.address && <CreateCommunityDialog />}
    </div>
  );
};

export default CommunitySearch;
