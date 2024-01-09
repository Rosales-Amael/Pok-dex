import { useSelector } from 'react-redux';
import { Label } from 'semantic-ui-react';

import './Resistances.scss';

const Resistances = () => {
  const pokemonTypes = useSelector((state) => state.types.types);
  const currentPokemon = useSelector(
    (state) => state.pokemons.onePokemonDetails
  );

  return (
    <div className="resistances">
      <h1 className="details__resistances__title">Résistances </h1>
      <div className="resists__container">
        {pokemonTypes.map((currentType) => {
          const resistance = currentPokemon.apiResistances.find(
            (element) => element.name === currentType.name
          );
          let resistanceNameTranslated = '';

          if (resistance.damage_relation === 'neutral') {
            resistanceNameTranslated = 'Neutre';
          } else if (resistance.damage_relation === 'vulnerable') {
            resistanceNameTranslated = 'Vulnérable';
          } else if (resistance.damage_relation === 'resistant') {
            resistanceNameTranslated = 'Résistant';
          } else if (resistance.damage_relation === 'immune') {
            resistanceNameTranslated = 'Immunisé';
          } else if (resistance.damage_relation === 'twice_vulnerable') {
            resistanceNameTranslated = 'Très vulnérable';
          } else {
            resistanceNameTranslated = 'Très résistant';
          }

          return (
            <div className="resist__wrapper" key={currentType.id}>
              <Label image>
                <img src={currentType.image} alt={currentType.name} />
                <Label.Detail>{currentType.name}</Label.Detail>
              </Label>

              <p
                className="details__resist__category"
                id={`${resistance.damage_relation}`}
              >
                {resistanceNameTranslated}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resistances;
