import AvatarHeader from "@/components/AvatarHeader";
import ConnectWalletAndBalance from "./ConnectWalletAndBalance";
import { AddToMetamask } from "./AddToMetamask";
import Link from "next/link";
import Search from "./Search";

const FeedHeader = () => {
  return (
    <header className="fixed z-40 w-full bg-white shadow dark:bg-s2">
      <nav className="mx-auto flex items-center justify-between p-2 backdrop-blur-3xl md:p-4 lg:px-5">
        <div className="flex items-center gap-12">
          <div className="flex">
            <Link className="-m-1.5 p-1.5" href="/feed">
              <span className="sr-only">Graffiti Protocol</span>
              <img
                alt=""
                loading="lazy"
                className="hidden md:block dark:invert"
                decoding="async"
                src="/images/logo.svg"
              />
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="block h-7 md:hidden dark:invert"
                src="/images/grafftiIcon.svg"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Search />
          <ConnectWalletAndBalance />
          {/* Notifications */}
          {/* <div className="relative inline-block text-left">
            <button type="button" className="">
              <div className="relative flex items-center justify-center rounded-md border border-gray-m-100 p-1.5 hover:bg-gray-50 md:p-[9px]">
                <img
                  src="images/bellIcon.svg"
                  className="h-5 w-5 md:h-5 md:w-5"
                  alt=""
                />
                <span className="absolute right-1 top-1 block h-1 w-1 rounded-full bg-red-500 md:h-2 md:w-2" />
              </div>
            </button>
            <div
              id="dropdownMenu2"
              className="absolute right-0 z-10 mt-3 hidden w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="p-2" role="none">
                <div className="divide-y divide-gray-100">
                  <a
                    href="#"
                    className="flex rounded-md px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="images/user.png"
                        alt="Jese image"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="mb-1.5 text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                          Jese Leos
                        </span>
                        : like your comment "graffiti token price will
                        skyrocket"
                      </div>
                      <div className="text-xs text-blue-600">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex rounded-md px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="images/user.png"
                        alt="Jese image"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="mb-1.5 text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                          Jese Leos
                        </span>
                        : like your comment "graffiti token price will
                        skyrocket"
                      </div>
                      <div className="text-xs text-blue-600">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex rounded-md px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="images/user.png"
                        alt="Jese image"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="mb-1.5 text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                          Jese Leos
                        </span>
                        : like your comment "graffiti token price will
                        skyrocket"
                      </div>
                      <div className="text-xs text-blue-600">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex rounded-md px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="images/user.png"
                        alt="Jese image"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="mb-1.5 text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                          Jese Leos
                        </span>
                        : like your comment "graffiti token price will
                        skyrocket"
                      </div>
                      <div className="text-xs text-blue-600">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex rounded-md px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="images/user.png"
                        alt="Jese image"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="mb-1.5 text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                          Jese Leos
                        </span>
                        : like your comment "graffiti token price will
                        skyrocket"
                      </div>
                      <div className="text-xs text-blue-600">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block rounded-b-lg bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="me-2 h-4 w-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 14"
                    >
                      <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    View all
                  </div>
                </a>
              </div>
            </div>
          </div> */}
          <AddToMetamask />
          <AvatarHeader />
        </div>
      </nav>
      <div className="hidden lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 hidden bg-black opacity-50" />
        <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 md:px-6 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="#" className="">
              <span className="sr-only">Graffiti</span>
              <img
                alt=""
                loading="lazy"
                width={194}
                height={50}
                decoding="async"
                className="h-12 w-auto"
                style={{ color: "transparent" }}
                src="/images/logo.svg"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                  href="/"
                >
                  Top Graffitists
                </Link>
                <Link
                  href="/#faqs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  How It Works
                </Link>
                <Link
                  href="/#blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  How It Works
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                  href="contactus"
                >
                  Token Info
                </Link>
                <Link
                  href="/#blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Community
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                  href="contactus"
                >
                  News &amp; Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FeedHeader;
