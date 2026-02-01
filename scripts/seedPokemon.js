import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedPokemon = async () => {
  for (let i = 1; i <= 151; i++) {
    const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);

    const pokemon = {
      id: i,
      name: pokemonRes.data.name,
      image: pokemonRes.data.sprites.front_default,
      types: pokemonRes.data.types.map(t => t.type.name),
      description: speciesRes.data.flavor_text_entries.find(
        e => e.language.name === "en"
      )?.flavor_text.replace(/\n|\f/g, " "),
    };

    await setDoc(doc(db, "pokemon", String(i)), pokemon);
    console.log(`Seeded ${pokemon.name}`);
  }
};

seedPokemon();
