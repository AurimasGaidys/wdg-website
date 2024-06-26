"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-[#999b9e] border-b-[1px] w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://whydoesgames.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className=""
            src="/logo_main.png"
            alt="Why Does Games Ghosts logo"
            width={50}
            height={20}
            priority
          />
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="#b28c3b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#2E2924] hover:text-[#BDA064] md:p-0"
                aria-current="page"
              >
                Public events
              </a>
            </li>
            <li>
              <a
                href="/private-events"
                className="block py-2 px-3 text-[#2E2924] hover:text-[#BDA064] md:p-0"
              >
                Private event
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="block py-2 px-3 text-[#2E2924] hover:text-[#BDA064] md:p-0"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
