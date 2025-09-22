import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Hero } from "../component/Hero";
import { Players } from "../component/Players";
import Footer from "../component/Footer";

export const Landing = () => {
  const [coin, setCoin] = useState(() => {
    const saved = localStorage.getItem("coin");
    // Start with a larger amount to be able to afford players
    return saved ? parseInt(saved, 10) : 10000000;
  });

  useEffect(() => {
    localStorage.setItem("coin", coin.toString());
  }, [coin]); 

  return (
    <div className="mx-7 my-3">
      <NavBar coin={coin}></NavBar>
      <Hero coin={coin} setCoin={setCoin}></Hero>
      {/* Pass coin and setCoin down to Players */}
      <Players coin={coin} setCoin={setCoin} />
      <Footer></Footer>
    </div>
  );
};