import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-dustyPinky">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="block">
              {" "}
              <span className="sr-only">Home</span>
              <Link href={"/"}>
                <Image
                  src={"/logo.PNG"}
                  width={62}
                  height={62}
                  alt="Picture of the author"
                />{" "}
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-base font-medium">
                <li>
                  <Link
                    href={"/"}
                    className="text-cocoa transition hover:text-cocoa/75"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/About"}
                    className="text-cocoa transition hover:text-cocoa/75"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/Services"}
                    className="text-cocoa transition hover:text-cocoa/75"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/Contact"}
                    className="text-cocoa transition hover:text-cocoa/75"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/Events"}
                    className="text-cocoa transition hover:text-cocoa/75"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <div className="rounded-md bg-dustyBlack px-5 py-2.5 text-sm font-medium text-surface-500 transition hover:text-dustyPinky">
                  <Link href={"/Contact"}>Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-dustyBlack p-2 text-gray-600/75 transition hover:text-dustyPinky">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
