export const getAllPokemon = (url, allPokemonDataRef) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        allPokemonDataRef.current = data;
        resolve(data);
      });
  });
};

export const loadPokemon = async (data, setPokemonData) => {
  const pokemonRecords = await Promise.all(
    data.map((pokemon) => {
      return getPokemon(pokemon.url);
    })
  );
  setPokemonData(pokemonRecords);
  console.log(pokemonRecords);
};

const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        resolve(data);
      });
  });
};
