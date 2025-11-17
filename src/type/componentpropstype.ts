//コンポーネントのpropsの型定義

import type { AllPokemonDataType, PokemonType } from "./pokemonType.js";

//ポケモンカードコンポーネントのpropsの型定義
//@param PokemonType: ポケモン1体分の詳細データ
export type PokemonCardProps = {
  pokemonType: PokemonType;
};

//ページ読み込みボタンコンポーネントのpropsの型定義
//@Param isPrev: true -> 「前へ」ボタン、 false -> 「次へ」ボタン
//@Param setLoading: ローディング状態を管理する関数
//@Param allPokemonDataRef: すべてのポケモンデータを保持するref
//@Param setPokemonData: ポケモンデータを設定する関数
export type PageLoadButtonProps = {
  isPrev: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  allPokemonDataRef: React.RefObject<AllPokemonDataType | null>;
  setPokemonData: React.Dispatch<React.SetStateAction<PokemonType[]>>;
};

/*
  前ページ切り替えボタンイベントハンドラ
  @Param setLoading: ローディング状態を管理する関数
    @Param allPokemonDataRef: すべてのポケモンデータを保持するref
    @Param setPokemonData: ポケモンデータを設定する関数
  @Return なし
*/
export type HandlePageLoadButtonProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  allPokemonDataRef: React.RefObject<AllPokemonDataType | null>;
  setPokemonData: React.Dispatch<React.SetStateAction<PokemonType[]>>;
};

/*
  ボタンの有効/無効を判定する関数の引数の型定義
    @Param isPrev: true -> 「前へ」ボタン、 false -> 「次へ」ボタン
    @Param allPokemonDataRef: すべてのポケモンデータを保持するref
    @Return boolean: ボタンが無効ならtrue、有効ならfalse
*/
export type IsAvailableProps = {
  isPrev: boolean;
  allPokemonDataRef: React.RefObject<AllPokemonDataType | null>;
};
