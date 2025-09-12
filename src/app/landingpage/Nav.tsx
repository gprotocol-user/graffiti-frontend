"use client";

import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[99] w-full shadow">
      <nav className="mx-auto flex items-center justify-between bg-white p-4 lg:px-5">
        <div className="flex items-center gap-12">
          <div className="flex">
            <Link className="-m-1.5 p-1.5" href="/html/grafti/index.html">
              <span className="sr-only">Graffiti Protocol</span>
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="h-9 lg:h-12"
                src="images/logo.svg"
              />
            </Link>
          </div>
          <ul className="hidden flex-grow items-center justify-center gap-2 lg:flex xl:gap-6">
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                Top Graffitists
              </Link>
            </li>
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                How It Works
              </Link>
            </li>
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                FAQ
              </Link>
            </li>
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                Token Info
              </Link>
            </li>
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                Community
              </Link>
            </li>
            <li className="">
              <Link
                className="nav-link active rounded-full px-1 py-2 text-sm font-medium text-ebony hover:bg-gray-m-200 xl:px-3 xl:text-base"
                href="/"
              >
                News &amp; Updates
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/feed"
              className="rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-white hover:bg-primaryDark md:px-4 md:py-2.5 md:text-base"
            >
              Go to App
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              id="mobileMenuBtn"
              onClick={() => {
                setMobileOpen(!mobileOpen);
              }}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${!mobileOpen && "hidden"} lg:hidden`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 hidden bg-black opacity-50" />
        <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 md:px-6 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="#" className="">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                loading="lazy"
                width={194}
                height={50}
                decoding="async"
                className="h-9 w-auto"
                style={{ color: "transparent" }}
                src="images/logo.svg"
              />
            </Link>
            <button
              type="button"
              id="mobileMenuBtn2"
              onClick={() => {
                setMobileOpen(!mobileOpen);
              }}
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

export default Nav;
