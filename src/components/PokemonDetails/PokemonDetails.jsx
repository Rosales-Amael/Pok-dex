/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import { Icon, Label } from 'semantic-ui-react';
import './PokemonDetails.scss';
import { fetchOnePokemonDetails, fetchPokemons } from '../../actions/pokemons';

const PokemonDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const currentPokemon = useSelector(
    (state) => state.pokemons.onePokemonDetails
  );
  const isOnePokemonDetailsLoaded = useSelector(
    (state) => state.pokemons.isOnePokemonDetailsLoaded
  );

  useEffect(() => {
    dispatch(fetchOnePokemonDetails(slug));
  }, []);

  if (!isOnePokemonDetailsLoaded) {
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
          inverted
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
      <div className="details__image__progress__wrapper">
        <div>
          <img src={currentPokemon.image} alt="" className="details__image" />
          <Label.Group className="label__group">
            {currentPokemon.apiTypes.map((currentType) => (
              <Label image key={currentType.id}>
                <img src={currentType.image} />
                <Label.Detail>{currentType.name}</Label.Detail>
              </Label>
            ))}
          </Label.Group>
        </div>
        <div className="details__progress__bars">
          <h1 className="details__stats__title">Statistiques</h1>

          <label className="details__stats__labels">HP :</label>
          <progress
            value={currentPokemon.stats.HP}
            className="progress is-large is-info"
            max="100"
          />
          <label className="details__stats__labels">Attaque :</label>
          <progress
            value={currentPokemon.stats.attack}
            className="progress is-large is-info"
            max="100"
          />
          <label className="details__stats__labels">Défense :</label>
          <progress
            value={currentPokemon.stats.defense}
            className="progress is-large is-info"
            max="100"
          />
          <label className="details__stats__labels">Attaque spéciale :</label>
          <progress
            value={currentPokemon.stats.special_attack}
            className="progress is-large is-info"
            max="100"
          />
          <label className="details__stats__labels">Défense spéciale :</label>
          <progress
            value={currentPokemon.stats.special_defense}
            className="progress is-large is-info"
            max="100"
          />
          <label className="details__stats__labels">Vitesse :</label>
          <progress
            value={currentPokemon.stats.speed}
            className="progress is-large is-info"
            max="100"
          />
        </div>
      </div>
      <div className="resistances">
        <h1 className="details__resistances__title">Résistances </h1>
        <div className="resists__container">
          {currentPokemon.apiResistances.map((currentResistant) => (
            <div className="resist__wrapper" key={currentResistant.id}>
              <Label image>
                <img src="https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png" />
                <Label.Detail>{currentResistant.name}</Label.Detail>
              </Label>
              <p className="details__resist__category">
                {currentResistant.damage_relation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
