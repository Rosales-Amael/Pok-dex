/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOnePokemonDetails } from '../../../actions/pokemons';
import './Evolution.scss';

const Evolution = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
                navigate(`/pokemon/${onePokemonEvolution.name}`);
                window.location.reload();
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
