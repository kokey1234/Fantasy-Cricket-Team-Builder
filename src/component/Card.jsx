// src/component/Card.jsx

import React from 'react';
// 1. Import motion for hover animations
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Card = ({ player, onSelectPlayer, isSelected }) => {
  const { name, country, role, rating, batting_style, price } = player;
  const formattedPrice = new Intl.NumberFormat().format(price);

  // 3. Create a handler to show toast before selecting
  const handleSelect = () => {
    onSelectPlayer(player);
  };

  return (
    // 4. Add a hover animation to the entire card
    <motion.div
      className="border mx-8 border-slate-700 rounded-lg p-4 shadow-lg bg-slate-800 flex flex-col justify-between text-slate-300 h-full"
      whileHover={{ scale: 1.03, y: -5 }} // Card lifts up and grows slightly on hover
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-slate-400">{country}</p>
        <p className="text-sm text-slate-500 mb-4">{role} | {batting_style}</p>
        <div className="my-2 flex justify-between items-center">
          <span className="font-semibold text-slate-300">Rating:</span>
          <span className="font-bold text-white text-lg">{rating}</span>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold text-slate-300">Price:</span>
          <span className="font-bold text-green-400 text-lg">${formattedPrice}</span>
        </div>
      </div>

      <button
        onClick={handleSelect}
        disabled={isSelected}
        className={`w-full py-2.5 px-4 rounded-lg text-white font-semibold transition-transform duration-200 ${
          isSelected
            ? 'bg-slate-600 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 active:scale-95'
        }`}
      >
        {isSelected ? 'Selected' : 'Choose Player'}
      </button>
    </motion.div>
  );
};

export default Card;