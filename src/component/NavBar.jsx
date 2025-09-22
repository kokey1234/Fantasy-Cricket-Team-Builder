import React from "react";
import logo from "../assets/logo.png";

export const NavBar = ({ coin }) => {
  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center space-x-3" href="/">
            <img src={logo} alt="main logo" className=" w-auto" />
            <span className="hidden sm:inline text-lg font-semibold text-gray-900 dark:text-gray-100">
              X-Cricket
            </span>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-3">
            <button className="px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition">
              Home
            </button>

            <button className="px-3 py-1.5 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Fixture
            </button>

            <button className="px-3 py-1.5 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Teams
            </button>

            <button className="px-3 py-1.5 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Schedules
            </button>

            <div className="ml-3 px-3 py-1.5 rounded-md bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-medium shadow-sm">
              {coin} coin{coin !== 1 ? "s" : ""}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                <svg
                  className="w-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg ring-1 ring-black/5 p-2">
                <button className="w-full text-left px-3 py-2 rounded-md bg-red-600 text-white mb-1">
                  Home
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mb-1">
                  Fixture
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mb-1">
                  Teams
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mb-1">
                  Schedules
                </button>
                <div className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 rounded-md">
                  {coin} coin{coin !== 1 ? "s" : ""}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};
