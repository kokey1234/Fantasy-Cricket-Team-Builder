import React from 'react';

const Card = ({ player, onSelectPlayer, isSelected }) => {
  const { name, country, role, rating, batting_style, price } = player;

  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    // Main container with a dark background and subtle border
    <div className="border border-slate-700 rounded-lg p-4 shadow-lg bg-slate-800 flex flex-col justify-between text-slate-300">
      <div>
        {/* Player Name: Bright white for prominence */}
        <h3 className="text-xl font-bold text-white">{name}</h3>
        
        {/* Country & Role: Lighter gray for secondary details */}
        <p className="text-slate-400">{country}</p>
        <p className="text-sm text-slate-500 mb-4">{role} | {batting_style}</p>
        
        {/* Rating: Clear label with a distinct, bold value */}
        <div className="my-2 flex justify-between items-center">
          <span className="font-semibold text-slate-300">Rating:</span> 
          <span className="font-bold text-white text-lg">{rating}</span>
        </div>
        
        {/* Price: Clear label with a highlighted, colored value to draw attention */}
        <div className="mb-4 flex justify-between items-center">
          <span className="font-semibold text-slate-300">Price:</span> 
          <span className="font-bold text-green-400 text-lg">${formattedPrice}</span>
        </div>
      </div>
      
      {/* Button: Updated green for better visibility on the dark card */}
      <button
        onClick={() => onSelectPlayer(player)}
        disabled={isSelected}
        className={`w-full py-2.5 px-4 rounded-lg text-white font-semibold transition-colors duration-200 ${
          isSelected
            ? 'bg-slate-600 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isSelected ? 'Selected' : 'Choose Player'}
      </button>
    </div>
  );
};

export default Card;