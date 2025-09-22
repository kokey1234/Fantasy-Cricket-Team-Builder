import React, { useEffect, useState } from "react";
import Card from "./Card";

export const Available = ({ onSelectPlayer, selectedPlayers }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setPlayers(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Unknown error");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="py-6 text-center text-gray-600">Loading players…</div>;
  }
  if (error) {
    return <div className="py-6 text-center text-red-500">Error: {error}</div>;
  }
  if (!players.length) {
    return <div className="py-6 text-center text-gray-500">No players found.</div>;
  }
  
  const isPlayerSelected = (player) => {
    return selectedPlayers.some(p => p.name === player.name);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((p) => (
        <Card 
          key={p.name} // Use a unique identifier from your data
          player={p}
          onSelectPlayer={onSelectPlayer}
          isSelected={isPlayerSelected(p)}
        />
      ))}
    </div>
  );
};

export default Available;