import React, { useState, useEffect } from "react";
import { Available } from "./Available";
import { Selected } from "./Selected";

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
    // ... no changes to this function
    if (selectedPlayers.length >= 6) {
      alert("Your team is full! You cannot select more than 6 players.");
      return;
    }
    if (selectedPlayers.find((p) => p.name === player.name)) {
      alert(`${player.name} is already in your team.`);
      return;
    }
    if (coin < player.price) {
      alert("Insufficient coins! You cannot afford this player.");
      return;
    }
    setCoin((prevCoin) => prevCoin - player.price);
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    alert(`${player.name} has been added to your team!`);
  };

  // --- NEW FUNCTION TO REMOVE A PLAYER ---
  const handleRemovePlayer = (playerToRemove) => {
    // Add the player's price back to the coin balance
    setCoin((prevCoin) => prevCoin + playerToRemove.price);

    // Remove the player from the selected list by filtering
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
          // --- PASS THE NEW FUNCTIONS AS PROPS ---
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