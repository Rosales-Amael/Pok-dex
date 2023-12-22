export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const CHANGE_LIMIT_VALUE = 'CHANGE_LIMIT_VALUE';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_ONE_POKEMON_DETAILS = 'FETCH_ONE_POKEMON_DETAILS';
export const SAVE_POKEMONS = 'SAVE_POKEMONS';
export const SAVE_ONE_POKEMON_DETAILS = 'SAVE_ONE_POKEMON_DETAILS';
export const FETCH_SEARCH_SINGLE_POKEMON = 'FETCH_SEARCH_SINGLE_POKEMON';
export const SAVE_SEARCH_SINGLE_POKEMON = 'SAVE_SEARCH_SINGLE_POKEMON';
export const FETCH_ONE_POKEMON_EVOLUTION = 'FETCH_ONE_POKEMON_EVOLUTION';
export const SAVE_ONE_POKEMON_EVOLUTION = 'SAVE_ONE_POKEMON_EVOLUTION';

export const changeSearchValue = (newValue) => ({
  type: CHANGE_SEARCH_VALUE,
  newValue,
});

export const fetchPokemons = (limit) => ({
  type: FETCH_POKEMONS,
  limit,
});

export const fetchOnePokemonDetails = (pokemonName) => ({
  type: FETCH_ONE_POKEMON_DETAILS,
  pokemonName,
});

export const savePokemons = (objectPokemons) => ({
  type: SAVE_POKEMONS,
  objectPokemons,
});

export const saveOnePokemonDetails = (pokemon) => ({
  type: SAVE_ONE_POKEMON_DETAILS,
  pokemon,
});

export const changeLimitValue = () => ({
  type: CHANGE_LIMIT_VALUE,
});

export const fetchSearchSinglePokemon = (pokemonName) => ({
  type: FETCH_SEARCH_SINGLE_POKEMON,
  pokemonName,
});

export const saveSearchSinglePokemon = (pokemon) => ({
  type: SAVE_SEARCH_SINGLE_POKEMON,
  pokemon,
});

export const fetchOnePokemonEvolution = (pokemonName) => ({
  type: FETCH_ONE_POKEMON_EVOLUTION,
  pokemonName,
});

export const saveOnePokemonEvolution = (pokemon) => ({
  type: SAVE_ONE_POKEMON_EVOLUTION,
  pokemon,
});
