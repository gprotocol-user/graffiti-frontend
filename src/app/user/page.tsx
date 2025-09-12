"use client";

import type { NextPage } from "next";
import FeedHeader from "@/components/FeedHeader";

import { useSearchParams } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import MobileNavigation from "@/components/MobileNavigation";
import UserPageTabs from "./UserPageTabs";

interface SearchProps {
  setState: Function;
}

const SearchForParams = ({ setState }: SearchProps) => {
  const searchParams = useSearchParams();
  const address = searchParams.get("add");
  useEffect(() => {
    if (address) {
      setState(address);
    }
  }, [address, setState]);

  return <></>;
};

const User: NextPage = () => {
  const [address, setAddress] = useState(" ");
  return (
    <div className="nobar relative h-dvh overflow-scroll overflow-x-hidden overflow-y-scroll bg-zarcon dark:bg-s1">
      <Suspense>
        <SearchForParams setState={setAddress} />
      </Suspense>
      <FeedHeader />
      <main className="pb-16 md:pb-0">
        <section className="container mx-auto sm:px-4 2xl:px-0">
          <div className="grid grid-cols-12 px-2 md:gap-8 md:px-0">
            <UserPageTabs address={address} />
          </div>
        </section>
        <MobileNavigation isUserPage />
      </main>
    </div>
  );
};

export default User;
