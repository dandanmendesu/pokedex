import { loadPokemon, getAllPokemon } from "../../utils/pokemon";
import "./PageLoadButton.css";

/*
  ページ切り替えボタンコンポーネント
  @Param isPrev: true -> 「前へ」ボタン、 false -> 「次へ」ボタン
  @Param setLoading: ローディング状態を管理する関数
  @Param allPokemonDataRef: すべてのポケモンデータを保持するref
  @Param setPokemonData: ポケモンデータを設定する関数
  @Return ページ切り替えボタンコンポーネント
*/
const PageLoadButton = ({
  isPrev,
  setLoading,
  allPokemonDataRef,
  setPokemonData,
}) => {
  return (
    <div className="pageLoadButton">
      <button
        disabled={isAvailable(isPrev, allPokemonDataRef)}
        onClick={
          isPrev === true
            ? () =>
                handlePrevPage(setLoading, allPokemonDataRef, setPokemonData)
            : () =>
                handleNextPage(setLoading, allPokemonDataRef, setPokemonData)
        }
      >
        {isPrev === true ? "前へ" : "次へ"}
      </button>
    </div>
  );
};

/*
  前ページ切り替えボタンイベントハンドラ
  @Param setLoading: ローディング状態を管理する関数
  @Param allPokemonDataRef: すべてのポケモンデータを保持するref
  @Param setPokemonData: ポケモンデータを設定する関数
  @Return なし
*/
const handlePrevPage = async (
  setLoading,
  allPokemonDataRef,
  setPokemonData
) => {
  console.log("前へボタンがクリックされました");
  console.log(allPokemonDataRef);
  if (!allPokemonDataRef.current.previous) return;
  setLoading(true);
  const data = await getAllPokemon(
    allPokemonDataRef.current.previous,
    allPokemonDataRef
  );
  await loadPokemon(data.results, setPokemonData);
  setLoading(false);
};

/*
  次ページ切り替えボタンイベントハンドラ
  @Param setLoading: ローディング状態を管理する関数
  @Param allPokemonDataRef: すべてのポケモンデータを保持するref
  @Param setPokemonData: ポケモンデータを設定する関数
  @Return なし
*/
const handleNextPage = async (
  setLoading,
  allPokemonDataRef,
  setPokemonData
) => {
  console.log("次へボタンがクリックされました");
  console.log(allPokemonDataRef.current);
  if (!allPokemonDataRef.current.next) return;
  setLoading(true);
  const data = await getAllPokemon(
    allPokemonDataRef.current.next,
    allPokemonDataRef
  );
  await loadPokemon(data.results, setPokemonData);
  setLoading(false);
};

/*
  ボタンの有効/無効を判定する関数
  @Param isPrev: true -> 「前へ」ボタン、 false -> 「次へ」ボタン
  @Param allPokemonDataRef: すべてのポケモンデータを保持するref
  @Return ボタンが無効ならtrue、有効ならfalse
*/
const isAvailable = (isPrev, allPokemonDataRef) => {
  if (isPrev) {
    return allPokemonDataRef.current?.previous ? false : true;
  } else {
    return allPokemonDataRef.current?.next ? false : true;
  }
};

export default PageLoadButton;
