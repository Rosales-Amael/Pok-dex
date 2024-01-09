import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card as SemanticCard, Label, Image } from 'semantic-ui-react';

import { fetchOnePokemonDetails } from '../../../../actions/pokemons';
import './Card.scss';

const Card = ({ name, pokedexId, image, slug, apiTypes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SemanticCard
      id="card"
      onClick={() => {
        dispatch(fetchOnePokemonDetails(slug));
        navigate(`/pokemon/${slug}`);
        window.location.reload();
      }}
    >
      <Image src={image} />
      <SemanticCard.Content>
        <SemanticCard.Header>{name}</SemanticCard.Header>
        <SemanticCard.Meta>
          <span>N° {pokedexId}</span>
        </SemanticCard.Meta>
        <Label.Group className="label__group">
          {apiTypes.map((currentType) => (
            <Label image key={currentType.id}>
              <img src={currentType.image} alt={currentType.name} />
              <Label.Detail>{currentType.name}</Label.Detail>
            </Label>
          ))}
        </Label.Group>
      </SemanticCard.Content>
    </SemanticCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pokedexId: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  apiTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
