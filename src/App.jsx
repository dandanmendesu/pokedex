import { useEffect, useState, useRef } from "react";
import "./App.css";

import { getAllPokemon, loadPokemon } from "./utils/pokemon";
import { CONSTANTS } from "./const/appConst";
import PokemonCard from "./components/pokemonCard/PokemonCard";
import Navbar from "./components/navbar/Navbar";
import PageLoadButton from "./components/pageButton/PageLoadButton";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const allPokemonDataRef = useRef(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //すべてのポケモンを取得
      const response = await getAllPokemon(
        CONSTANTS.POKEMONAPI.URL,
        allPokemonDataRef
      );
      //各ポケモンの詳細なデータを取得
      await loadPokemon(response.results, setPokemonData);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  // pokemonData が更新されたら実行
  //　デバッグ用
  useEffect(() => {
    if (pokemonData.length > 0) {
      console.log("ポケモンデータが更新されました ↓取得内容");
      console.log("取得したポケモンの数:", pokemonData.length);
      console.log(pokemonData);
      console.log("ここまで");
    }
  }, [pokemonData]);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <PageLoadButton
                isPrev={true}
                setLoading={setLoading}
                allPokemonDataRef={allPokemonDataRef}
                setPokemonData={setPokemonData}
              />
              <PageLoadButton
                isPrev={false}
                setLoading={setLoading}
                allPokemonDataRef={allPokemonDataRef}
                setPokemonData={setPokemonData}
              />
            </div>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon} />;
              })}
            </div>
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <PageLoadButton
                isPrev={true}
                setLoading={setLoading}
                allPokemonDataRef={allPokemonDataRef}
                setPokemonData={setPokemonData}
              />
              <PageLoadButton
                isPrev={false}
                setLoading={setLoading}
                allPokemonDataRef={allPokemonDataRef}
                setPokemonData={setPokemonData}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
