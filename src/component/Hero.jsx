import React from "react";
import banner from "../assets/bg-shadow.png";
import bannerLogo from "../assets/banner-main.png";

export const Hero = ({ coin, setCoin }) => {
  return (
    <section
      className="w-full rounded-2xl bg-center bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
      aria-label="Hero banner"
    >
      {/* subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          <img
            src={bannerLogo}
            alt="Banner logo"
            className="w-36 sm:w-44 md:w-56 lg:w-64 object-contain"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>

          <h4 className="text-sm sm:text-base md:text-lg text-white/90 mt-1">
            Beyond Boundaries · Beyond Limits
          </h4>

          <div className="mt-4">
            <button
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md shadow-lg text-sm sm:text-base transition"
              onClick={() => setCoin(coin + 15000000)}
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
