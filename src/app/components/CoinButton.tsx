"use client"
import React, { useState } from 'react';
interface CoinButtonProps {
  increment: number;
}

const CoinButton: React.FC<CoinButtonProps> = ({ increment }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + increment);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="rounded-full bg-yellow-500 w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
        onClick={handleClick}
      >
        🪙
      </button>
      <p className="text-xl mt-2">Amount of coins: {counter}</p>
    </div>
  );
};

export default CoinButton;
