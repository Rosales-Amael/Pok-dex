import {
  CHANGE_LIMIT_VALUE,
  SAVE_POKEMONS,
  SAVE_SINGLE_POKEMON,
  SET_LOADER_FALSE,
  SET_LOADER_TRUE,
  setLoaderTrue,
} from '../actions/pokemons';

const initialState = {
  homePokemons: [],
  singlePokemon: {},
  searchValue: '',
  limitValue: 50,
  isAppLoading: true,
};

const pokemonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POKEMONS: {
      return {
        ...state,
        homePokemons: action.objectPokemons,
      };
    }

    case SAVE_SINGLE_POKEMON: {
      return {
        ...state,
        singlePokemon: action.pokemon,
      };
    }

    case CHANGE_LIMIT_VALUE: {
      return {
        ...state,
        limitValue: state.limitValue + 50,
      };
    }

    case SET_LOADER_TRUE: {
      return {
        ...state,
        isAppLoading: true,
      };
    }
    case SET_LOADER_FALSE: {
      return {
        ...state,
        isAppLoading: false,
      };
    }

    default:
      return state;
  }
};

export default pokemonsReducer;
