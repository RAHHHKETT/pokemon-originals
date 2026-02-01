import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b1f1a] text-white">
      
      {/* Pokémon Logo */}
      <img
        src="/pokemon-23.svg"
        alt="Pokemon"
        className="w-[300px] md:w-[400px]"
      />

      {/* Originals text */}
      <h2 className="text-3xl font-bold mt-4 tracking-wide">
        Originals
      </h2>

      {/* Button */}
      <Link
        href="/pokedex"
        className="mt-10 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
      >
        Gotta Catch ’Em All
      </Link>

      {/* Social */}
      <p className="mt-10 text-sm text-gray-400">
        Instagram: <span className="text-yellow-400">@kitflacko</span>
      </p>
    </main>
  );
}
