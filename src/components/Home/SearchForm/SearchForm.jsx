import { useDispatch, useSelector } from 'react-redux';
import './SearchForm.scss';
import { Dropdown, Form } from 'semantic-ui-react';
import pokemonsNames from '../../../utils/pokemonsNames';
import {
  changeSearchValue,
  fetchSearchSinglePokemon,
} from '../../../actions/pokemons';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector((state) => state.pokemons.searchValue);
  const pokemonsOptions = pokemonsNames.map((name) => ({
    text: name,
    value: name,
  }));

  return (
    <div>
      <Form
        onSubmit={() => {
          dispatch(fetchSearchSinglePokemon(searchInputValue));
        }}
      >
        <Dropdown
          clearable
          fluid
          search
          selection
          options={pokemonsOptions}
          placeholder="Pikachu..."
          noResultsMessage="Aucun pokémon trouvé..."
          value={searchInputValue}
          onChange={(e, data) => {
            const currentPokemon = data.value;
            dispatch(changeSearchValue(currentPokemon));
          }}
        />
        {/* <Form.Field>
          <input placeholder="Pikachu..." />
        </Form.Field> */}
      </Form>
    </div>
  );
};

export default SearchForm;
