import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { changeLimitValue, fetchPokemons } from '../../../actions/pokemons';
import './ShowMoreButton.scss';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="show__more__button__wrapper">
      <Button
        color="blue"
        id="show__more__button"
        onClick={() => {
          dispatch(changeLimitValue());
          dispatch(fetchPokemons());
        }}
      >
        Voir plus
      </Button>
    </div>
  );
};

export default ShowMoreButton;
