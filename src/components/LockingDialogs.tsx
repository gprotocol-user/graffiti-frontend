import { useForm, SubmitHandler } from "react-hook-form";
import {
  useWriteContract,
  useAccount,
  useWaitForTransactionReceipt,
} from "wagmi";
import { Button } from "./ui/buttonNew";
import { useToast } from "@/components/ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";

import { appabi } from "@/lib/appabi";
// import { APP_ADDRESS } from "@/lib/constants";

import useBoundStore from "@/app/context/GlobalZustand";
import { useEffect } from "react";

type FormValues = {
  amount: number;
};

const LockingDialogs = () => {
  const { toast } = useToast();
  const account = useAccount();

  const setLastTransactionReceipt = useBoundStore(
    (state) => state.setLastTransactionReceipt,
  );

  const setLockingDialogOpen = useBoundStore(
    (state) => state.setLockingDialogOpen,
  );
  const setUnlockingDialogOpen = useBoundStore(
    (state) => state.setUnlockingDialogOpen,
  );
  const lockingPostIndex = useBoundStore((state) => state.lockingPostIndex);
  const unlockingPostIndex = useBoundStore((state) => state.unlockingPostIndex);
  const lockingDialogOpen = useBoundStore((state) => state.lockingDialogOpen);

  const unlockingDialogOpen = useBoundStore(
    (state) => state.unlockingDialogOpen,
  );
  const unlockingPostMaxLikes = useBoundStore(
    (state) => state.unlockingPostMaxLikes,
  );

  const contractHook = useWriteContract();
  const {
    register: lockRegister,
    handleSubmit: lockHandleSubmit,
    setError: lockSetError,
    reset: lockReset,
    formState: { errors: lockErrors, isSubmitting: lockIsSubmitting },
  } = useForm<FormValues>({ mode: "onChange" });

  const {
    register: unlockRegister,
    handleSubmit: unlockHandleSubmit,
    setError: unlockSetError,
    reset: unlockReset,
    formState: { errors: unlockErrors, isSubmitting: unlockIsSubmitting },
  } = useForm<FormValues>({ mode: "onChange" });

  const onLockSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(
        "data.content: ",
        data.amount,
        "post index: ",
        lockingPostIndex,
      );
      contractHook.writeContract(
        {
          abi: appabi,
          address: process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
          functionName: "lockFunds",
          args: [
            BigInt(lockingPostIndex ? lockingPostIndex : 0),
            BigInt(data.amount * 100),
          ],
        },
        {
          onSuccess: (data) => {
            console.log("writecontract: data: ", data);
            toast({
              description: `Funds locked!`,
            });
            lockReset();
            //queryClient.clear();
            setLockingDialogOpen(false);
          },
          onError: (error) => {
            toast({
              description: `${error.name} (See console for more information)`,
              variant: "destructive",
            });
            console.log("writecontract error: ", error);
            setLockingDialogOpen(false);
          },
        },
      );
    } catch (error) {
      toast({
        description: `${error} (See console for more information)`,
        variant: "destructive",
      });
      lockSetError("root", {
        message: "There was an error",
      });
      lockReset();
      setLockingDialogOpen(false);
    }
  };

  const onUnlockSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("data.content: ", data.amount);
      contractHook.writeContract(
        {
          abi: appabi,
          address: process.env.NEXT_PUBLIC_APP_ADDRESS as `0x${string}`,
          functionName: "unlockFunds",
          args: [
            BigInt(unlockingPostIndex ? unlockingPostIndex : 0),
            BigInt(data.amount * 100),
          ],
        },
        {
          onSuccess: (data) => {
            toast({
              description: `Funds unlocked!`,
            });
            console.log("writecontract: data: ", data);
            unlockReset();
            setUnlockingDialogOpen(false);
          },
          onError: (error) => {
            toast({
              description: `${error.name} (See console for more information)`,
              variant: "destructive",
            });
            console.log("writecontract error: ", error);
            setUnlockingDialogOpen(false);
          },
        },
      );
    } catch (error) {
      toast({
        description: `${error} (See console for more information)`,
        variant: "destructive",
      });
      lockSetError("root", {
        message: "There was an error",
      });
      unlockReset();
      setUnlockingDialogOpen(false);
    }
  };

  //Transaction Receipts

  const contractTransactionReceipt = useWaitForTransactionReceipt({
    hash: contractHook.data,
  });

  useEffect(() => {
    setLastTransactionReceipt(contractTransactionReceipt.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractTransactionReceipt.data]);

  return (
    <>
      <Dialog
        open={lockingDialogOpen}
        onOpenChange={(newState) => {
          setLockingDialogOpen(newState);
        }}
      >
        <DialogContent className="z-50 w-80">
          {account.address ? (
            <DialogHeader>
              <DialogTitle>Award this post some GRAFF</DialogTitle>
              <DialogDescription></DialogDescription>

              <form onSubmit={lockHandleSubmit(onLockSubmit)}>
                <div className="flex flex-row gap-8 p-4">
                  <Input
                    {...lockRegister("amount", {
                      required: true,
                      min: 1,
                    })}
                    placeholder="1 GRAFF"
                  />
                  <Button type="submit" disabled={contractHook.isPending}>
                    {contractHook.isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </Button>
                </div>
              </form>
            </DialogHeader>
          ) : (
            <DialogHeader>
              <DialogTitle>Connect your wallet to award GRAFF</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={unlockingDialogOpen}
        onOpenChange={(newState) => {
          setUnlockingDialogOpen(newState);
        }}
      >
        <DialogContent className="w-80">
          <DialogHeader>
            <DialogTitle>Unlock GRAFF from this post</DialogTitle>
            <DialogDescription></DialogDescription>

            <form onSubmit={unlockHandleSubmit(onUnlockSubmit)}>
              <div className="flex flex-row gap-8 p-4">
                <Input
                  {...unlockRegister("amount", {
                    required: true,
                    min: 1,
                    max: unlockingPostMaxLikes,
                  })}
                  placeholder="1 GRAFF"
                />
                <Button type="submit" disabled={contractHook.isPending}>
                  {contractHook.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LockingDialogs;
