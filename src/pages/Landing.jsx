// src/pages/Landing.jsx

import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Hero } from "../component/Hero";
import { Players } from "../component/Players";
import Footer from "../component/Footer";
import { ToastContainer } from 'react-toastify';

export const Landing = () => {
  const [coin, setCoin] = useState(() => {
    const saved = localStorage.getItem("coin");
    return saved ? parseInt(saved, 10) : 100000;
  });

  useEffect(() => {
    localStorage.setItem("coin", coin.toString());
  }, [coin]);

  return (
    // Remove all margin/padding from the root element
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* NavBar is full-width and fixed, so it stays outside the main content container */}
      <NavBar coin={coin} />

      {/* Add a 'main' content wrapper with the desired margins and padding */}
      {/* We add pt-20 here to push content down below the fixed navbar */}
      <main className="mx-auto px-4 sm:px-6 lg:px-4 pt-16">
        <Hero coin={coin} setCoin={setCoin} />
        <Players coin={coin} setCoin={setCoin} />
      </main>

      {/* Footer can also be full-width */}
      <Footer />
    </div>
  );
};