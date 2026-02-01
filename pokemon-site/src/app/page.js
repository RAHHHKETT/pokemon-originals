import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-between px-6 py-10"
      style={{ backgroundColor: "#0b1f1a" }} // dark navy green
    >
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Pokémon Logo */}
        <Image
          src="/pokemon-23.svg"
          alt="Pokemon Logo"
          width={500}
          height={300}
          priority
        />

        {/* Originals */}
        <h2 className="mt-4 text-xl md:text-2xl tracking-[0.5em] text-gray-300">
          ORIGINALS
        </h2>

        {/* Button */}
        <Link
          href="/pokemon"
          className="mt-14 px-12 py-4 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-xl font-bold text-white shadow-xl hover:scale-105"
        >
          Enter the Pokédex
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm">
        Instagram:{" "}
        <a
          href="https://instagram.com/kitflacko"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          @kitflacko
        </a>
      </footer>
    </main>
  );
}
