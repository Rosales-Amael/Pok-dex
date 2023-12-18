import axios from 'axios';
import {
  FETCH_POKEMONS,
  FETCH_SINGLE_POKEMON,
  savePokemons,
  saveSinglePokemon,
  setLoaderFalse,
} from '../actions/pokemons';

const baseApiUrl = `https://pokebuildapi.fr/api/v1`;

const pokemonsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POKEMONS: {
      axios
        .get(
          `${baseApiUrl}/pokemon/limit/${store.getState().pokemons.limitValue}`
        )
        .then((response) => {
          console.log(response);
          store.dispatch(savePokemons(response.data));
          store.dispatch(setLoaderFalse());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case FETCH_SINGLE_POKEMON: {
      axios
        .get(`${baseApiUrl}/pokemon/${action.pokemonName}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveSinglePokemon(response.data));
          store.dispatch(setLoaderFalse());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default pokemonsMiddleware;
