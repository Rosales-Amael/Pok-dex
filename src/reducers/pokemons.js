import {
  CHANGE_LIMIT_VALUE,
  CHANGE_SEARCH_VALUE,
  SAVE_ONE_POKEMON_DETAILS,
  SAVE_ONE_POKEMON_EVOLUTION,
  SAVE_POKEMONS,
  SAVE_SEARCH_SINGLE_POKEMON,
} from '../actions/pokemons';

const initialState = {
  homePokemons: [],
  onePokemonDetails: {},
  onePokemonEvolution: {},
  searchValue: 'td',
  limitValue: 50,
  isHomePokemonsLoaded: false,
  isOnePokemonDetailsLoaded: false,
  isSearchSinglePokemonLoaded: false,
  isOnePokemonEvolution: false,
};

const pokemonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POKEMONS: {
      return {
        ...state,
        homePokemons: action.objectPokemons,
        isHomePokemonsLoaded: true,
      };
    }

    case SAVE_ONE_POKEMON_DETAILS: {
      return {
        ...state,
        onePokemonDetails: action.pokemon,
        isOnePokemonDetailsLoaded: true,
      };
    }

    case SAVE_SEARCH_SINGLE_POKEMON: {
      return {
        ...state,
        homePokemons: action.pokemon,
        isSearchSinglePokemonLoaded: true,
      };
    }

    case SAVE_ONE_POKEMON_EVOLUTION: {
      return {
        ...state,
        onePokemonEvolution: action.pokemon,
        isOnePokemonEvolution: true,
      };
    }

    case CHANGE_LIMIT_VALUE: {
      return {
        ...state,
        limitValue: state.limitValue + 50,
      };
    }

    case CHANGE_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default pokemonsReducer;
