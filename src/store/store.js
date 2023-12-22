import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import pokemonsMiddleware from '../middlewares/pokemonsMiddleware';
import typesMiddleware from '../middlewares/typesMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(pokemonsMiddleware, typesMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
