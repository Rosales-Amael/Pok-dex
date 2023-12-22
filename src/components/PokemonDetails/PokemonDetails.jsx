/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { Icon } from 'semantic-ui-react';

import {
  fetchOnePokemonDetails,
  fetchOnePokemonEvolution,
  fetchPokemons,
} from '../../actions/pokemons';
import { fetchAllTypes } from '../../actions/types';

import ImageStats from './ImageStats/ImageStats';
import Resistances from './Resistances/Resistances';
import Evolution from './Evolution/Evolution';

import './PokemonDetails.scss';

const PokemonDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const currentPokemon = useSelector(
    (state) => state.pokemons.onePokemonDetails
  );
  const isOnePokemonDetailsLoaded = useSelector(
    (state) => state.pokemons.isOnePokemonDetailsLoaded
  );
  const isTypesLoaded = useSelector((state) => state.pokemons.isTypesLoaded);
  const isOnePokemonEvolution = useSelector(
    (state) => state.pokemons.isOnePokemonEvolution
  );

  useEffect(() => {
    dispatch(fetchOnePokemonDetails(slug));
    dispatch(fetchAllTypes());
  }, []);

  useEffect(() => {
    if (currentPokemon.apiEvolutions && currentPokemon.apiEvolutions.length > 0)
      dispatch(fetchOnePokemonEvolution(currentPokemon.apiEvolutions[0].name));
  }, [dispatch, currentPokemon.apiEvolutions]);

  if (!isOnePokemonDetailsLoaded && !isTypesLoaded && !isOnePokemonEvolution) {
    return (
      <div className="loader__container">
        <CircularProgress id="loader" />
        <span>Chargement...</span>
      </div>
    );
  }

  return (
    <div className="details__wrapper">
      <Link to="/">
        <Icon
          color="black"
          circular
          link="/"
          name="home"
          size="large"
          className="house__icon"
          onClick={() => {
            dispatch(fetchPokemons(50));
          }}
        />
      </Link>
      <h1 className="details__pokemon__name">{currentPokemon.name}</h1>
      <ImageStats />
      <Resistances />
      <Evolution />
    </div>
  );
};

export default PokemonDetails;
