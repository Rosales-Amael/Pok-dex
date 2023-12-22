export const FETCH_ALL_TYPES = 'FETCH_ALL_TYPES';
export const SAVE_ALL_TYPES = 'SAVE_ALL_TYPES';

export const fetchAllTypes = () => ({
  type: FETCH_ALL_TYPES,
});

export const saveAllTypes = (types) => ({
  type: SAVE_ALL_TYPES,
  types,
});
