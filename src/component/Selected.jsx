import React from 'react';
// 1. Import motion and AnimatePresence for animations
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
// 2. Import toast for notifications
import { toast } from 'react-toastify';

// A small, self-contained SVG for the trash icon
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

// ✨ Awesome new helper function to get initials from a name
const getInitials = (name) => {
  if (!name) return '??';
  const words = name.split(' ');
  if (words.length > 1) {
    return words[0].charAt(0) + words[words.length - 1].charAt(0);
  }
  return name.substring(0, 2);
};


export const Selected = ({ selectedPlayers, onRemovePlayer, onAddMore }) => {
  // 3. Create a handler to show toast AND call the remove function
  const handleRemovePlayer = (player) => {
    toast.error(`${player.name} was removed from your team.`);
    onRemovePlayer(player);
  };

  // Animation variants for the list items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  };

  if (!selectedPlayers || selectedPlayers.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 bg-gray-100 dark:bg-slate-800 rounded-lg"
      >
        <p className="text-gray-500 dark:text-gray-400 mb-4">You have not selected any players yet.</p>
        <motion.button
          onClick={onAddMore}
          className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Player
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#181818] text-white p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        Selected Players ({selectedPlayers.length}/6)
      </h2>

      {/* 4. Use AnimatePresence to handle exit animations */}
      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {selectedPlayers.map((player) => (
            <motion.div
              key={player.id || player.name} // Use a stable unique key like player.id
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout // This makes the list re-order smoothly!
              className="flex items-center justify-between bg-[#282828] p-4 rounded-lg hover:bg-[#3a3a3a] transition-colors"
            >
              <div className="flex items-center space-x-4">
                {/* ✨ Awesome new initials placeholder */}
                <div className="w-12 h-12 bg-slate-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-yellow-400">
                  {getInitials(player.name)}
                </div>
                <div>
                  <p className="font-semibold text-lg">{player.name}</p>
                  <p className="text-gray-400 text-sm">{player.batting_style}</p>
                </div>
              </div>
              <motion.button 
                onClick={() => handleRemovePlayer(player)} 
                className="focus:outline-none p-2 rounded-full"
                whileHover={{ scale: 1.2, backgroundColor: 'rgba(239, 68, 68, 0.1)' }} // Red glow
                whileTap={{ scale: 0.9 }}
              >
                <TrashIcon />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        onClick={onAddMore}
        className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-black font-bold rounded-md transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add More Players
      </motion.button>
    </div>
  );
};