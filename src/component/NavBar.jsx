// src/component/NavBar.jsx

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { RiCoinLine } from "react-icons/ri";
import logo from "../assets/logo.png";

const CoinDisplay = ({ coin, className }) => {
  const formattedCoin = new Intl.NumberFormat().format(coin);
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span>{formattedCoin}</span>
      {coin >= 1000 ? (
        <RiCoinLine className="text-yellow-300" />
      ) : (
        <span>coin{coin !== 1 ? "s" : ""}</span>
      )}
    </div>
  );
};

export const NavBar = ({ coin }) => {
  // State to control the mobile menu's visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // REMOVED mx-14, ensuring it's full-width
      className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm fixed top-0 left-0 z-50"
    >
      {/* This inner container aligns the content with your Hero section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a className="flex items-center space-x-3" href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* INCREASED logo size */}
            <img src={logo} alt="main logo" className="h-14 w-auto" />
            <span className="hidden sm:inline text-xl font-semibold text-gray-900 dark:text-gray-100">
              Select Your XI
            </span>
          </motion.a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-4 py-2 rounded-md bg-red-600 text-white transition">Home</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-4 py-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Fixture</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-4 py-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Teams</motion.button>
            <CoinDisplay
              coin={coin}
              className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold shadow-sm"
            />
          </nav>

          {/* Mobile menu button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button className="block w-full text-left px-4 py-2 rounded-md bg-red-600 text-white">Home</button>
              <button className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Fixture</button>
              <button className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Teams</button>
              <CoinDisplay coin={coin} className="w-full mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};