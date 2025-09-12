"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsNew";

import UserPostsList from "./UserPostList";
import LockingDialogs from "./LockingDialogs";

interface UserWallPostsProps {
  address: string;
}

const UserWallPostsFeed = ({ address }: UserWallPostsProps) => {
  return (
    <div>
      <Tabs defaultValue="newest">
        <TabsList className="mb-3 flex flex-wrap items-center gap-1 md:mb-6 md:gap-2">
          <TabsTrigger value="newest">All</TabsTrigger>
          <TabsTrigger value="top">Top</TabsTrigger>
        </TabsList>

        <TabsContent value="newest">
          <UserPostsList address={address} chrono />
        </TabsContent>
        <TabsContent value="top">
          <UserPostsList address={address} />
        </TabsContent>
      </Tabs>

      <LockingDialogs />
    </div>
  );
};

export default UserWallPostsFeed;
