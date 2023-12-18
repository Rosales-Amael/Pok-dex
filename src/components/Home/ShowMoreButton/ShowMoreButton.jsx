import React from 'react';
import { Button } from 'semantic-ui-react';
import './ShowMoreButton.scss';
import { useDispatch } from 'react-redux';
import {
  changeLimitValue,
  fetchPokemons,
  setLoaderTrue,
} from '../../../actions/pokemons';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="show__more__button__wrapper">
      <Button
        color="blue"
        id="show__more__button"
        onClick={(e) => {
          dispatch(setLoaderTrue());
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
