"use client";

import { useState } from "react";

export default function PokemonCard({ id, name }) {
  const [capturing, setCapturing] = useState(false);

  const playPokeballSound = () => {
    setCapturing(true);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        playPokeballSound();
        setTimeout(() => {
          window.location.href = `/pokemon/${id}`;
        }, 300);
      }}
      className="relative cursor-pointer bg-[#12372a] hover:bg-[#1b5e46] transition rounded-xl p-4 text-center capitalize overflow-hidden hover:scale-105">
        {/* Pokéball capture overlay */}
        {capturing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
            <img
              src="/ballpoke.png"
              alt="Pokeball"
              className="w-20 animate-catch"
            />
          </div>
        )}

        {/* Pokémon sprite */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="mx-auto"
        />

        <p className="mt-2 font-semibold text-white">{name}</p>
      </div>
  );
}
