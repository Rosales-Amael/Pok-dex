import { useDispatch, useSelector } from 'react-redux';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import pokemonsNames from '../../../utils/pokemonsNames';
import {
  changeSearchValue,
  fetchSearchSinglePokemon,
} from '../../../actions/pokemons';
import './SearchForm.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector((state) => state.pokemons.searchValue);

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchSearchSinglePokemon(searchInputValue));
      }}
    >
      <Stack id="input__container" fullWidth>
        <Autocomplete
          id="input__search"
          freeSolo
          fullWidth
          options={pokemonsNames}
          renderInput={(params) => (
            <TextField {...params} placeholder="Salamèche..." fullWidth />
          )}
          value={searchInputValue}
          onChange={(evt, newValue) => {
            dispatch(changeSearchValue(newValue));
          }}
        />
      </Stack>
    </form>
  );
};

export default SearchForm;
