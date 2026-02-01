import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getAllPokemon = async () => {
    const snapshot = await getDocs(collection(db, "pokemon"));
    return snapshot.docs.map(doc => doc.data());
};

export const getPokemonById = async (id) => {
    const ref = doc(db, "pokemon", String(id));
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
};

export async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    throw new Error("Pokemon not found");
  }

  return res.json();
}

export async function getPokemonSpecies(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  if (!res.ok) {
    throw new Error("Species not found");
  }

  return res.json();
}
