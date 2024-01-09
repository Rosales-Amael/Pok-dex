import axios from 'axios';
import {
  FETCH_ONE_POKEMON_DETAILS,
  FETCH_ONE_POKEMON_EVOLUTION,
  FETCH_POKEMONS,
  FETCH_SEARCH_SINGLE_POKEMON,
  saveOnePokemonDetails,
  saveOnePokemonEvolution,
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
          store.dispatch(savePokemons(response.data));
        })
        .catch(() => {});
      break;

    case FETCH_ONE_POKEMON_DETAILS: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          store.dispatch(saveOnePokemonDetails(response.data));
        })
        .catch(() => {});
      break;
    }

    case FETCH_SEARCH_SINGLE_POKEMON: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          store.dispatch(saveSearchSinglePokemon(response.data));
        })
        .catch(() => {
          window.location.href = '/404';
        });
      break;
    }

    case FETCH_ONE_POKEMON_EVOLUTION: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          store.dispatch(saveOnePokemonEvolution(response.data));
        })
        .catch(() => {});
      break;
    }
    default:
  }
  next(action);
};

export default pokemonsMiddleware;
