import PokemonCard from "@/components/PokemonCard";


const TYPE_THEMES = {
  fire: {
    color: "#3b0f0f",
    image: "/backgrounds/fire.jpg",
  },
  water: {
    color: "#0b1f3b",
    image: "/backgrounds/water.jpg",
  },
  grass: {
    color: "#0b2f1a",
    image: "/backgrounds/grass.jpg",
  },
  electric: {
    color: "#3b340f",
    image: "/backgrounds/electric.jpg",
  },
  ice: {
    color: "#0b2f3b",
    image: "/backgrounds/ice.jpg",
  },
  bug: {
    color: "#2a3b0f",
    image: "/backgrounds/bug.jpg",
  },
  dragon: {
    color: "#1a0f3b",
    image: "/backgrounds/dragon.jpg",
  },
  fairy: {
    color: "#3b0f2a",
    image: "/backgrounds/fairy.jpg",
  },
  fighting: {
    color: "#3b1a0f",
    image: "/backgrounds/fighting.jpg",
  },
  flying: {
    color: "#1f2f3b",
    image: "/backgrounds/flying.jpg",
  },
  ghost: {
    color: "#1a1a2f",
    image: "/backgrounds/ghost.jpg",
  },
  ground: {
    color: "#3b2f1a",
    image: "/backgrounds/ground.jpg",
  },
  normal: {
    color: "#2a2a2a",
    image: "/backgrounds/normal.jpg",
  },
  poison: {
    color: "#2f0f3b",
    image: "/backgrounds/poison.jpg",
  },
  rock: {
    color: "#2f2a1a",
    image: "/backgrounds/rock.jpg",
  },
  psychic: {
    color: "#2f0b2f",
    image: "/backgrounds/psychic.jpg",
  },
};

async function getPokemon() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data.results;
}

export default async function PokedexPage() {
  const pokemon = await getPokemon();

  return (
    <main className="min-h-screen bg-[#0b1f1a] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Gotta Catch ’Em All
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {pokemon.map((p, index) => (
          <PokemonCard
            key={p.name}
            id={index + 1}
            name={p.name}
          />
        ))}
      </div>
    </main>
  );
}
