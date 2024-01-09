import axios from 'axios';
import { FETCH_ALL_TYPES, saveAllTypes } from '../actions/types';

const baseApiUrl = `https://pokebuildapi.fr/api/v1`;

const typesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_TYPES: {
      axios
        .get(`${baseApiUrl}/types`)
        .then((response) => {
          store.dispatch(saveAllTypes(response.data));
        })
        .catch(() => {});
      break;
    }
    default:
  }
  next(action);
};

export default typesMiddleware;
