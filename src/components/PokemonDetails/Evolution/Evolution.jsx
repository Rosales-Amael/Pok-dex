/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import './Evolution.scss';
import { fetchOnePokemonDetails } from '../../../actions/pokemons';

const Evolution = () => {
  const dispatch = useDispatch();
  const currentPokemon = useSelector(
    (state) => state.pokemons.onePokemonDetails
  );
  const onePokemonEvolution = useSelector(
    (state) => state.pokemons.onePokemonEvolution
  );

  return (
    <div className="resistances">
      <h1 className="details__resistances__title">Evolution direct</h1>
      <div>
        {currentPokemon.apiEvolutions &&
        currentPokemon.apiEvolutions.length > 0 ? (
          <div>
            <div
              className="circle__image__evolution"
              onClick={() => {
                dispatch(fetchOnePokemonDetails(onePokemonEvolution.name));
              }}
            >
              <img
                src={onePokemonEvolution.image}
                alt={onePokemonEvolution.name}
                className="image__evolution"
              />
            </div>
            <p className="evolution__name">{onePokemonEvolution.name}</p>
          </div>
        ) : (
          <p className="evolution__name">Aucune évolution...</p>
        )}
      </div>
    </div>
  );
};

export default Evolution;
