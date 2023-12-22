import { SAVE_ALL_TYPES } from '../actions/types';

const initialState = {
  types: [],
  isTypesLoaded: false,
};

const typesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_TYPES: {
      return {
        ...state,
        types: action.types,
        isTypesLoaded: true,
      };
    }
    default:
      return state;
  }
};

export default typesReducer;
