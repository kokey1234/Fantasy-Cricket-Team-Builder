// src/component/Available.jsx

import React, { useEffect, useState } from "react";
import Card from "./Card";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // 1. Import motion

export const Available = ({ onSelectPlayer, selectedPlayers }) => {
  // ... (your existing state and fetch logic is perfect) ...
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // 2. Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This creates the cool stagger effect
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    /* ... no changes ... */
  }
  if (error) {
    /* ... no changes ... */
  }
  if (!players.length) {
    /* ... no changes ... */
  }

  const isPlayerSelected = (player) => {
    return selectedPlayers.some((p) => p.name === player.name);
  };

  return (
    // 3. Apply the animation variants to motion components
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {players.map((p) => (
        <motion.div key={p.id || p.name} variants={cardVariants}>
          <Card
            player={p}
            onSelectPlayer={onSelectPlayer}
            isSelected={isPlayerSelected(p)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Available;
