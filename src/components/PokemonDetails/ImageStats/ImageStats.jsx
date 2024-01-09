import { useSelector } from 'react-redux';
import { Label } from 'semantic-ui-react';

import './ImageStats.scss';

const ImageStats = () => {
  const currentPokemon = useSelector(
    (state) => state.pokemons.onePokemonDetails
  );
  return (
    <div className="details__image__progress__wrapper">
      <div>
        <img src={currentPokemon.image} alt="" className="details__image" />
        <Label.Group className="label__group">
          {currentPokemon &&
            currentPokemon.apiTypes.map((currentType) => (
              <Label image key={currentType.id}>
                <img src={currentType.image} alt={currentType.name} />
                <Label.Detail>{currentType.name}</Label.Detail>
              </Label>
            ))}
        </Label.Group>
      </div>
      <div className="details__progress__bars">
        <h1 className="details__stats__title">Statistiques</h1>

        <label className="details__stats__labels">
          HP :{' '}
          <strong className="stats__value">{currentPokemon.stats.HP}</strong>
        </label>
        <progress
          value={currentPokemon.stats.HP}
          className="progress is-large is-success"
          id="progress__health"
          max="200"
        />
        <label className="details__stats__labels">
          Attaque :{' '}
          <strong className="stats__value">
            {currentPokemon.stats.attack}
          </strong>
        </label>
        <progress
          value={currentPokemon.stats.attack}
          className="progress is-large is-danger"
          id="progress__attack"
          max="200"
        />
        <label className="details__stats__labels">
          Défense :{' '}
          <strong className="stats__value">
            {currentPokemon.stats.defense}
          </strong>
        </label>
        <progress
          value={currentPokemon.stats.defense}
          className="progress is-large is-link"
          id="progress__defense"
          max="200"
        />
        <label className="details__stats__labels">
          Attaque spéciale :{' '}
          <strong className="stats__value">
            {currentPokemon.stats.special_attack}
          </strong>
        </label>
        <progress
          value={currentPokemon.stats.special_attack}
          className="progress is-large is-info"
          id="progress__special__attack"
          max="200"
        />
        <label className="details__stats__labels">
          Défense spéciale :{' '}
          <strong className="stats__value">
            {currentPokemon.stats.special_defense}
          </strong>
        </label>
        <progress
          value={currentPokemon.stats.special_defense}
          className="progress is-large is-primary"
          id="progress__special__defense"
          max="200"
        />
        <label className="details__stats__labels">
          Vitesse :{' '}
          <strong className="stats__value">{currentPokemon.stats.speed}</strong>
        </label>
        <progress
          value={currentPokemon.stats.speed}
          className="progress is-large is-warning"
          max="200"
        />
      </div>
    </div>
  );
};

export default ImageStats;
