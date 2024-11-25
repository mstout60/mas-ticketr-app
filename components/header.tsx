import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import logo from "@/images/logo.png";

import SearchBar from "./search-bar";

function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-col items-center gap-4 p-4 lg:flex-row">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link href="/" className="shrink-0 font-bold">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>
          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition hover:bg-gray-200">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        {/* Search Bar - full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="ml-auto hidden lg:block">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition hover:bg-gray-200">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition hover:bg-gray-200">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
        {/* Mobile Action Buttons */}
        <div className="flex w-full justify-center gap-3 lg:hidden">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700">
                Sell Tickets
              </button>
            </Link>

            <Link href="/tickets" className="flex-1">
              <button className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition hover:bg-gray-200">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
