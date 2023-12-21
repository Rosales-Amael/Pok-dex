import axios from 'axios';
import {
  FETCH_ONE_POKEMON_DETAILS,
  FETCH_POKEMONS,
  FETCH_SEARCH_SINGLE_POKEMON,
  saveOnePokemonDetails,
  savePokemons,
  saveSearchSinglePokemon,
} from '../actions/pokemons';

const baseApiUrl = `https://pokebuildapi.fr/api/v1`;

const pokemonsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      axios
        .get(
          `${baseApiUrl}/pokemon/limit/${store.getState().pokemons.limitValue}`
        )
        .then((response) => {
          console.log(response);
          store.dispatch(savePokemons(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case FETCH_ONE_POKEMON_DETAILS: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveOnePokemonDetails(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    case FETCH_SEARCH_SINGLE_POKEMON: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveSearchSinglePokemon(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default pokemonsMiddleware;
