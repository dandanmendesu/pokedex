import type {
  AllPokemonDataType,
  JpEnNameDataType,
  jpEnNameProperty,
  PokemonType,
} from "../type/pokemonType.js";
import type {
  GetAllPokemonProps,
  GetPokemonProps,
  LoadPokemonProps,
  TranslateToJapaneseProps,
} from "../type/utilpropsType.js";
import jpEnNameList from "../resource/jpEnName.json" with { type: "json" };
import { CONSTANTS } from "../const/appConst.js";

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

//英語名を日本語名に変換するutils
//@param englishName: 英語名
//@param category: 翻訳対象のカテゴリ（"pokemonNames" | "typeNames" | "abilityNames"）デフォルト: "pokemonNames"
//@param return: 日本語名が存在する場合: 日本語名 日本語名が存在しない場合: englishName
export const translateToJapanese = ({
  englishName,
  category = CONSTANTS.JSONPROPERTIES.POKEMON_NAME //pokemonNames
}: TranslateToJapaneseProps): string => {
  try {
    if (!englishName) return "";
    
    // category を型安全に絞る
    const categoryKey = category as keyof JpEnNameDataType;

    // categoryMap が存在するかチェック
    const categoryMap = jpEnNameList[categoryKey] as Record<string, string>;
    if (!categoryMap) return englishName;
    
    // englishName が存在するかチェックして返す
    return categoryMap[englishName] ?? englishName;
  } catch (error) {
    console.error(`Error translating ${category} name "${englishName}":`, error);
    return englishName;
  }
};
