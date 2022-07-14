import axios from "../lib/axios";

export const usePokeAPI = () => {
  const getPokemons = async ({ setPokemon }) => {
    axios("https://pokeapi.co")
      .get(`api/v2/pokemon?offset=0&limit=20`)
      .then(async (res) => {
        for (let index = 0; index < res.data.results.length; index++) {
          await axios("https://pokeapi.co")
            .get(res.data.results[index].url)
            .then((res) => {
              setPokemon((prevArray) => [...prevArray, res.data]);
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {});
  };

  return {
    getPokemons,
  };
};
