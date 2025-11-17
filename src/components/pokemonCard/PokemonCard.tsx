import type { PokemonCardProps } from "../../type/componentpropstype.js";
import { translateToJapanese } from "../../utils/pokemon.js";
import "./card.css";

import type { PokemonType } from "../../type/pokemonType.js";
import { CONSTANTS } from "../../const/appConst.js";

/*
  ポケモンカードコンポーネント
  @Param pokemon: ポケモン1体分の詳細データ
  @Return ポケモンカードコンポーネント
*/
const PokemonCard = ({ pokemonType: pokemonData }: PokemonCardProps) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img
          src={pokemonData?.sprites?.front_default ?? undefined}
          alt={pokemonData?.name}
        />
      </div>
      <h3 className="cardName">
        {translateToJapanese({
          englishName: pokemonData?.name,
          category: CONSTANTS.JSONPROPERTIES.POKEMON_NAME,
        })}
      </h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemonData?.types?.map((type: PokemonType["types"][0]) => {
          return (
            <div key={type.slot}>
              <span className="typeName">
                {translateToJapanese({
                  englishName: type.type.name,
                  category: CONSTANTS.JSONPROPERTIES.TYPE_NAME,
                })}
              </span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ: {pokemonData?.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ: {pokemonData?.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            特性:{" "}
            {translateToJapanese({
              englishName: pokemonData?.abilities[0]?.ability?.name ?? "",
              category: CONSTANTS.JSONPROPERTIES.ABILITY_NAME,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
