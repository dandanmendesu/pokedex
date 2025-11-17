import { AllPokemonDataType, PokemonType } from "../type/pokemonType";
import {
  GetAllPokemonProps,
  GetPokemonProps,
  LoadPokemonProps,
} from "../type/utilpropsType";

//ポケモンデータ全件を取得するutils
export const getAllPokemon = async ({
  url,
  allPokemonDataRef,
}: GetAllPokemonProps) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: AllPokemonDataType = await response.json();
    allPokemonDataRef.current = data;
    return data;
  } catch (error) {
    console.error("Error fetching all pokemon:", error);
    throw error;
  }
};

//各ポケモンの詳細データを取得するutils
export const loadPokemon = async ({
  pokemonData: data,
  setPokemonData,
}: LoadPokemonProps) => {
  try {
    if (!data || !Array.isArray(data)) {
      console.error("pokemonData is undefined or not an array", data);
      return;
    }

    const pokemonRecords: PokemonType[] = await Promise.all(
      data.map((pokemon) => getPokemon({ url: pokemon.url }))
    );

    setPokemonData(pokemonRecords);
    console.log(pokemonRecords);
  } catch (error) {
    console.error("Error loading pokemon:", error);
  }
};

//ポケモン1体分の詳細データを取得するutils
export const getPokemon = ({ url }: GetPokemonProps) => {
  return new Promise<PokemonType>((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(`Error fetching pokemon from ${url}:`, error);
        reject(error);
      });
  });
};
