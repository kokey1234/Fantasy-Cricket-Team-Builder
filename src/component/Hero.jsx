// src/component/Hero.jsx

import React from "react";
import banner from "../assets/bg-shadow.png";
import bannerLogo from "../assets/banner-main.png";

// 1. Import motion for animations and toast for notifications
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

export const Hero = ({ coin, setCoin }) => {

  // 2. Create a handler function to show the toast and update the coin
  const handleClaimCredit = () => {
    // Show a success toast
    toast.success("🎉 15,000,000 credits claimed successfully!");
    
    // Update the state
    setCoin(coin + 15000000);
  };

  return (
    <section
      className="w-full rounded-2xl bg-center bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          {/* Note: We are not animating the logo, but you could if you want! */}
          <img
            src={bannerLogo}
            alt="Banner logo"
            className="w-36 sm:w-44 md:w-56 lg:w-64 object-contain"
          />

          {/* 3. Add motion.h2 for animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-md"
          >
            Assemble Your Ultimate Dream 11 Cricket Team
          </motion.h2>

          {/* 4. Add motion.h4 for a staggered animation effect */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-base md:text-lg font-bold text-white/90 mt-1"
          >
            Beyond Boundaries · Beyond Limits
          </motion.h4>

          {/* 5. Wrap the button in a motion.div to animate it as well */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4"
          >
            <button
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md shadow-lg text-sm sm:text-base transition-transform transform hover:scale-105"
              onClick={handleClaimCredit} // Use the new handler
            >
              Claim Free Credit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};