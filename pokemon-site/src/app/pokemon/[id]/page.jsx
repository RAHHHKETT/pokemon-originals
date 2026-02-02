export const runtime = "nodejs";

import { db } from "../../../lib/firebaseAdmin";
import Link from "next/link";


const TYPE_COLORS = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const TYPE_THEMES = {
  fire: { color: "#3b0f0f", image: "/backgrounds/fire.jpg" },
  water: { color: "#0b1f3b", image: "/backgrounds/water.jpg" },
  grass: { color: "#0b2f1a", image: "/backgrounds/grass.jpg" },
  electric: { color: "#3b340f", image: "/backgrounds/electric.jpg" },
  ice: { color: "#0b2f3b", image: "/backgrounds/ice.jpg" },
  bug: { color: "#243b0b", image: "/backgrounds/bug.jpg" },
  dragon: { color: "#1a0b3b", image: "/backgrounds/dragon.jpg" },
  fairy: { color: "#3b0b2f", image: "/backgrounds/fairy.jpg" },
  fighting: { color: "#3b120b", image: "/backgrounds/fighting.jpg" },
  flying: { color: "#1b2a3b", image: "/backgrounds/flying.jpg" },
  ghost: { color: "#1b0b3b", image: "/backgrounds/ghost.jpg" },
  ground: { color: "#3b2f0b", image: "/backgrounds/ground.jpg" },
  normal: { color: "#2a2a2a", image: "/backgrounds/normal.jpg" },
  poison: { color: "#2f0b3b", image: "/backgrounds/poison.jpg" },
  rock: { color: "#2f2a0b", image: "/backgrounds/rock.jpg" },
  psychic: { color: "#3b0b2f", image: "/backgrounds/psychic.jpg" },
};




export default async function PokemonDetailPage({ params }) {
  const { id } = await params;
  const doc = await db
    .collection("pokedex")
    .doc(id)
    .get();

  if (!doc.exists) {
    return <h1 style={{ color: "white" }}>Pokemon not found</h1>;
  }

  const pokemon = doc.data();

  const currentId = Number(id);


const primaryType = pokemon.types[0];

const theme = TYPE_THEMES[primaryType] || {
  color: "#0b1f1a",
  image: null,
};
  

  return (
    <main 
  className="min-h-screen text-white p-8 bg-cover bg-center transition-all duration-700"
  style={{
    backgroundColor: theme.color,
    backgroundImage: theme.image
      ? `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${theme.image})`
      : undefined,
  }}
>
    <Link
      href="/pokedex"
      className="inline-block mb-6 px-3 py-2 rounded-lg bg-black/60 hover:bg-black/80 transition"
    >
      ← Back to Pokédex
    </Link>
<div className="flex justify-between max-w-xl mx-auto mt-10">
  {currentId > 1 ? (
    <Link
      href={`/pokemon/${currentId - 1}`}
      className="px-6 py-3 bg-black/60 rounded-lg hover:bg-black/80 transition"
    >
      ⬅ Previous
    </Link>
  ) : (
    <div />
  )}

  <Link
    href={`/pokemon/${currentId + 1}`}
    className="px-6 py-3 bg-black/60 rounded-lg hover:bg-black/80 transition"
  >
    Next ➡
  </Link>
</div>

      <h1 className="text-4xl capitalize text-center">
        {pokemon.name}
      </h1>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-72 mx-auto my-6"
      />

      <p className="max-w-xl mx-auto text-center">
        {pokemon.description}
      </p>

      <div className="flex justify-center gap-3 mt-4">
  {pokemon.types.map((type) => (
    <span
      key={type}
      style={{
        backgroundColor: TYPE_COLORS[type] || "#777",
      }}
      className="px-3 py-1 rounded-full capitalize text-white"
    >
      {type}
    </span>
  ))}
</div>



    </main>
  );
}


