import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import typesReducer from './types';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  types: typesReducer,
});

export default rootReducer;
