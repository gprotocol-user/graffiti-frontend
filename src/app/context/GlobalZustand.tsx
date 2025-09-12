import { create, StateCreator } from "zustand";
import { UseWaitForTransactionReceiptReturnType } from "wagmi";
import { QueryKey } from "@tanstack/react-query";
import { Walls } from "@/lib/generated/codegen/graphql";

type TransactionReceiptDataType =
  UseWaitForTransactionReceiptReturnType["data"];

// Slice for handling transaction receipt
export interface TransactionSlice {
  lastTransactionReceipt: TransactionReceiptDataType | null;
  setLastTransactionReceipt: (
    receipt: TransactionReceiptDataType | null,
  ) => void;
}
export const createTransactionSlice: StateCreator<TransactionSlice> = (
  set,
) => ({
  lastTransactionReceipt: null,
  setLastTransactionReceipt: (receipt: TransactionReceiptDataType | null) =>
    set({ lastTransactionReceipt: receipt }),
});

// Slice for handling the liking dialog and post index
export interface LockingSlice {
  lockingDialogOpen: boolean;
  lockingPostIndex: number | null | undefined;
  setLockingDialogOpen: (isOpen: boolean) => void;
  setLockingPostIndex: (index: number | null | undefined) => void;
}

export const createLockingSlice: StateCreator<LockingSlice> = (set) => ({
  lockingDialogOpen: false,
  lockingPostIndex: null,
  setLockingDialogOpen: (isOpen: boolean) => set({ lockingDialogOpen: isOpen }),
  setLockingPostIndex: (index: number | null | undefined) =>
    set({ lockingPostIndex: index }),
});

// Slice for handling the unlocking dialog, post index, and max likes
export interface UnlockingSlice {
  unlockingDialogOpen: boolean;
  unlockingPostIndex: number | null | undefined;
  unlockingPostMaxLikes: number;
  setUnlockingDialogOpen: (isOpen: boolean) => void;
  setUnlockingPostIndex: (index: number | null | undefined) => void;
  setUnlockingPostMaxLikes: (maxLikes: number) => void;
}

export const createUnlockingSlice: StateCreator<UnlockingSlice> = (set) => ({
  unlockingDialogOpen: false,
  unlockingPostIndex: null,
  unlockingPostMaxLikes: 0,
  setUnlockingDialogOpen: (isOpen: boolean) =>
    set({ unlockingDialogOpen: isOpen }),
  setUnlockingPostIndex: (index: number | null | undefined) =>
    set({ unlockingPostIndex: index }),
  setUnlockingPostMaxLikes: (maxLikes: number) =>
    set({ unlockingPostMaxLikes: maxLikes }),
});

const defaultCommunity: Walls = {
  wallName: "Loading",
  wallIndex: 0,
  postCost: 0,
};

// Slice for handling the selected community and its cost
export interface CommunitySlice {
  selectedCommunity: Walls;
  communityNotFound: boolean;
  setSelectedCommunity: (community: Walls) => void;
  setCommunityNotFound: (found: boolean) => void;
}

export const createCommunitySlice: StateCreator<CommunitySlice> = (set) => ({
  selectedCommunity: defaultCommunity,
  communityNotFound: false,
  setSelectedCommunity: (community: Walls) =>
    set({ selectedCommunity: community }),
  setCommunityNotFound: (found: boolean) => set({ communityNotFound: found }),
});

// Slice for handling the selected mobile tab
export interface SelectedMobileTabSlice {
  selectedMobileTab: string;
  setSelectedMobileTab: (tab: string) => void;
}

export const createSelectedMobileTabSlice: StateCreator<
  SelectedMobileTabSlice
> = (set) => ({
  selectedMobileTab: "feed",
  setSelectedMobileTab: (tab: string) => set({ selectedMobileTab: tab }),
});

// Slice for handling the search dialog
export interface SearchDialogSlice {
  searchDialogOpen: boolean;
  setSearchDialogOpen: (isOpen: boolean) => void;
}

export const createSearchDialogSlice: StateCreator<SearchDialogSlice> = (
  set,
) => ({
  searchDialogOpen: false,
  setSearchDialogOpen: (isOpen: boolean) => set({ searchDialogOpen: isOpen }),
});

// Slice for handling the allowance Query key
export interface AllowanceSlice {
  allowanceQuerykey: QueryKey;
  setAllowanceQuerykey: (queryKey: QueryKey) => void;
}

export const createAllowanceSlice: StateCreator<AllowanceSlice> = (set) => ({
  allowanceQuerykey: [],
  setAllowanceQuerykey: (queryKey: QueryKey) =>
    set({ allowanceQuerykey: queryKey }),
});

// Combine all slices into one store using the specified pattern
const useBoundStore = create<
  TransactionSlice &
    LockingSlice &
    UnlockingSlice &
    CommunitySlice &
    SelectedMobileTabSlice &
    SearchDialogSlice &
    AllowanceSlice
>()((...a) => ({
  ...createTransactionSlice(...a),
  ...createLockingSlice(...a),
  ...createUnlockingSlice(...a),
  ...createCommunitySlice(...a),
  ...createSelectedMobileTabSlice(...a),
  ...createSearchDialogSlice(...a),
  ...createAllowanceSlice(...a),
}));

export default useBoundStore;
