/*Propsの型定義をするファイル*/

import { AllPokemonDataType, PokemonType } from "./pokemonType";

/*
ポケモンデータ全件を取得するutils「getAllPokemon」のPropsの型定義
@param url APIのURL
@param allPokemonDataRef 取得した全ポケモンデータを格納するRefオブジェクト
@returns Propsの型定義
*/
export type GetAllPokemonProps = {
  url: string;
  allPokemonDataRef: React.RefObject<AllPokemonDataType | null>;
};

/*
/各ポケモンの詳細データを取得するutils「loadPokemon」のPropsの型定義
@param AllPokemonDataType.results 各ポケモンの名前とURLの配列
@param setPokemonData ポケモンデータを格納するStateのSetter関数
@returns Propsの型定義
*/
export type LoadPokemonProps = {
  pokemonData: AllPokemonDataType["results"];
  setPokemonData: React.Dispatch<React.SetStateAction<PokemonType[]>>;
};

/*
ポケモン1体分の詳細データを取得するutils「getPokemon」のPropsの型定義
@param url 各ポケモンの詳細データのURL
@returns Propsの型定義
*/
export type GetPokemonProps = {
  url: string;
};
