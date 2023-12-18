/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from 'react-redux';
import { Card as SemanticCard } from 'semantic-ui-react';
import Card from './Card/Card';
import './Cards.scss';

const Cards = () => {
  const homePokemonsList = useSelector((state) => state.pokemons.homePokemons);
  return (
    <div className="cards__wrapper">
      <SemanticCard.Group>
        {homePokemonsList.map((currentPokemon) => (
          <Card key={currentPokemon.id} {...currentPokemon} />
        ))}
      </SemanticCard.Group>
    </div>
  );
};

export default Cards;
