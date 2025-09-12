"use client";

import { useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { Search as SearchIcon } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

// import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import useBoundStore from "@/app/context/GlobalZustand";

type FormValues = {
  query: string;
};

const Search = () => {
  const router = useRouter();
  const searchDialogOpen = useBoundStore((state) => state.searchDialogOpen);
  const setSearchDialogOpen = useBoundStore(
    (state) => state.setSearchDialogOpen,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    router.push("/search?q=" + data.query);
    reset();
    setSearchDialogOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchDialogOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div
          onClick={() => setSearchDialogOpen(true)}
          className="relative -top-0 flex w-60 cursor-pointer items-center justify-between rounded-lg border border-gray-m-100 bg-white py-[7px] pe-2 ps-9 dark:border-none dark:bg-s3 dark:text-slate-300"
        >
          <div>
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            Search
          </div>
          <button className="rounded-lg bg-gray-m-300 px-2 py-1 text-xs text-gray-m-900 dark:bg-s4 dark:text-slate-300">
            ⌘ K
          </button>
        </div>
      </div>
      <Dialog
        open={searchDialogOpen}
        onOpenChange={(open) => setSearchDialogOpen(open)}
      >
        <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>
        <DialogContent>
          <form
            className="m-2 flex items-center rounded-lg border px-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              type="text"
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400"
              placeholder="Search for anything!"
              {...register("query", {
                required: true,
                maxLength: 250,
              })}
            />
          </form>
        </DialogContent>
        {/* <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>
        <CommandInput
          placeholder="Type your search..."
          onSubmitCapture={() => {
            console.log("submitted");
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Communities</span>
            </CommandItem>
            <CommandItem>
              <Coins className="mr-2 h-4 w-4" />
              <span>Token</span>
            </CommandItem>
            <CommandItem>
              <HandCoins className="mr-2 h-4 w-4" />
              <span>Top Holders</span>
            </CommandItem>
          </CommandGroup>
        </CommandList> */}
      </Dialog>
    </>
  );
};

export default Search;
