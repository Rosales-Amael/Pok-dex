export const CHANGE_LIMIT_VALUE = 'CHANGE_LIMIT_VALUE';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_SINGLE_POKEMON = 'FETCH_SINGLE_POKEMON';
export const SAVE_POKEMONS = 'SAVE_POKEMONS';
export const SAVE_SINGLE_POKEMON = 'SAVE_SINGLE_POKEMON';
export const SET_LOADER_TRUE = 'SET_LOADER_TRUE';
export const SET_LOADER_FALSE = 'SET_LOADER_FALSE';

export const fetchPokemons = (limit) => ({
  type: FETCH_POKEMONS,
  limit,
});

export const fetchSinglePokemon = (pokemonName) => ({
  type: FETCH_SINGLE_POKEMON,
  pokemonName,
});

export const savePokemons = (objectPokemons) => ({
  type: SAVE_POKEMONS,
  objectPokemons,
});

export const saveSinglePokemon = (pokemon) => ({
  type: SAVE_SINGLE_POKEMON,
  pokemon,
});
export const changeLimitValue = () => ({
  type: CHANGE_LIMIT_VALUE,
});

export const setLoaderTrue = () => ({
  type: SET_LOADER_TRUE,
});

export const setLoaderFalse = () => ({
  type: SET_LOADER_FALSE,
});
