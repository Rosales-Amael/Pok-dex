import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './ShowMoreButton.scss';
import { useDispatch } from 'react-redux';
import { changeLimitValue, fetchPokemons } from '../../../actions/pokemons';

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const bottomRef = useRef();

  // useEffect(() => {
  //   if (bottomRef.current) {
  //     bottomRef.current.scrollIntoView();
  //   }
  // }, [location]);

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
