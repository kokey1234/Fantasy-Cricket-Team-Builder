import React from 'react';

// A small, self-contained SVG for the trash icon
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const Selected = ({ selectedPlayers, onRemovePlayer, onAddMore }) => {
  // If no players are selected, show a helpful message and the button
  if (!selectedPlayers || selectedPlayers.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-100 rounded-lg">
        <p className="text-gray-500 mb-4">You have not selected any players yet.</p>
        <button
          onClick={onAddMore}
          className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500"
        >
          Add Player
        </button>
      </div>
    );
  }

  return (
    // Main container with dark background
    <div className="bg-[#181818] text-white p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        Selected Player ({selectedPlayers.length}/6)
      </h2>

      <div className="space-y-4 mb-8">
        {selectedPlayers.map((player) => (
          <div
            key={player.name}
            className="flex items-center justify-between bg-[#282828] p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              {/* Image Placeholder */}
              <div className="w-12 h-12 bg-gray-500 rounded-md flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-lg">{player.name}</p>
                <p className="text-gray-400 text-sm">{player.batting_style}</p>
              </div>
            </div>
            <button onClick={() => onRemovePlayer(player)} className="focus:outline-none">
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onAddMore}
        className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors"
      >
        Add More Player
      </button>
    </div>
  );
};