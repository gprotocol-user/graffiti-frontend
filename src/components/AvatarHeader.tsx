"use client";

import makeBlockie from "ethereum-blockies-base64";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAccount } from "wagmi";
import Link from "next/link";

const AvatarHeader = () => {
  const account = useAccount();
  if (account.address)
    return (
      <div>
        <div>
          <Link href={"/user?add=" + account.address}>
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage
                src={makeBlockie(account.address ? account.address : " ")}
              />
              <AvatarFallback>{account.address}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <div
          id="dropdownMenu"
          className="absolute right-0 z-10 mt-3 hidden w-56 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="none">
            <a
              href="profile.html"
              className="block rounded-md px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Profile
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full rounded-md px-4 py-2 text-left text-sm text-red-500 hover:bg-red-100"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AvatarHeader;
