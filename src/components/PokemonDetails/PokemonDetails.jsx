import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Loader from '../Loader/Loader';
import ImageStats from './ImageStats/ImageStats';
import Resistances from './Resistances/Resistances';
import Evolution from './Evolution/Evolution';

import {
  fetchOnePokemonDetails,
  fetchOnePokemonEvolution,
} from '../../actions/pokemons';
import { fetchAllTypes } from '../../actions/types';

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
  }, [dispatch, slug]);

  useEffect(() => {
    if (currentPokemon.apiEvolutions && currentPokemon.apiEvolutions.length > 0)
      dispatch(fetchOnePokemonEvolution(currentPokemon.apiEvolutions[0].name));
  }, [dispatch, currentPokemon.apiEvolutions]);

  if (!isOnePokemonDetailsLoaded && !isTypesLoaded && !isOnePokemonEvolution) {
    return <Loader />;
  }

  return (
    <div className="details__wrapper">
      <h1 className="details__pokemon__name">{currentPokemon.name}</h1>
      <ImageStats />
      <Resistances />
      <Evolution />
    </div>
  );
};

export default PokemonDetails;
