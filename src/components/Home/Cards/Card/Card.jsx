/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Card as SemanticCard, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Card = ({ name, pokedexId, image, slug, apiTypes }) => {
  return (
    <SemanticCard as={Link} to={`/pokemon/${slug}`}>
      <Image src={image} wrapped ui={false} />
      <SemanticCard.Content>
        <SemanticCard.Header>{name}</SemanticCard.Header>
        <SemanticCard.Meta>
          <span>N° {pokedexId}</span>
        </SemanticCard.Meta>
        <Label.Group className="label__group">
          {apiTypes.map((currentType) => (
            <Label image key={currentType.id}>
              <img src={currentType.image} />
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
