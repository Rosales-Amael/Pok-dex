/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from 'react-redux';
import { Card as SemanticCard } from 'semantic-ui-react';
import Card from './Card/Card';
import './Cards.scss';

const Cards = () => {
  const homePokemonsList = useSelector((state) => state.pokemons.homePokemons);
  return (
    <SemanticCard.Group id="cards__wrapper">
      {Array.isArray(homePokemonsList) ? (
        homePokemonsList.map((currentPokemon) => (
          <Card key={currentPokemon.id} {...currentPokemon} />
        ))
      ) : (
        <Card key={homePokemonsList.id} {...homePokemonsList} />
      )}
    </SemanticCard.Group>
  );
};

export default Cards;
