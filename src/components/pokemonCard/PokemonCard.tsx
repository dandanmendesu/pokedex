import { PokemonCardProps } from "../../type/componentpropstype";
import "./card.css";

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
      <h3 className="cardName">{pokemonData?.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemonData?.types?.map((type) => {
          return (
            <div key={type.slot}>
              <span className="typeName">{type.type.name}</span>
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
            技: {pokemonData?.abilities[0]?.ability?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
