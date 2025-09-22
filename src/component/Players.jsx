// src/component/Players.jsx

import React, { useState, useEffect } from "react";
import { Available } from "./Available";
import { Selected } from "./Selected";
import { toast } from "react-toastify"; // 1. Import toast

export const Players = ({ coin, setCoin }) => {
  const [activeTab, setActiveTab] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("selectedPlayers");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
  }, [selectedPlayers]);

  const handleSelectPlayer = (player) => {
    // 2. Replace all alerts with toasts
    if (selectedPlayers.length >= 6) {
      toast.error("Your team is full! You cannot select more than 6 players.");
      return;
    }
    if (selectedPlayers.find((p) => p.name === player.name)) {
      toast.warn(`${player.name} is already in your team.`);
      return;
    }
    if (coin < player.price) {
      toast.error("Insufficient credits! You cannot afford this player.");
      return;
    }
    setCoin((prevCoin) => prevCoin - player.price);
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    // toast.success(`${player.name} has been added to your team!`);
  };

  const handleRemovePlayer = (playerToRemove) => {
    // 3. (Bonus) Add a toast for removing a player as well
    // toast.error(`${playerToRemove.name} was removed from your team.`);
    setCoin((prevCoin) => prevCoin + playerToRemove.price);
    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((p) => p.name !== playerToRemove.name)
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold">
          {activeTab === "available" ? "Available Players" : " "}
        </h2>
        <div className="flex space-x-2 mt-2 md:mt-0">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "available"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("available")}
          >
            Available
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "selected"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "available" ? (
          <Available
            onSelectPlayer={handleSelectPlayer}
            selectedPlayers={selectedPlayers}
          />
        ) : (
          <Selected
            selectedPlayers={selectedPlayers}
            onRemovePlayer={handleRemovePlayer}
            onAddMore={() => setActiveTab("available")}
          />
        )}
      </div>
    </div>
  );
};