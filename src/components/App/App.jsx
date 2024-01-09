/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Modal, Icon } from 'semantic-ui-react';
import { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { fetchPokemons } from '../../actions/pokemons';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import Loader from '../Loader/Loader';
import Error404 from '../Error404/Error404';
import Footer from '../Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const limitPokemonsValue = useSelector((state) => state.pokemons.limitValue);
  const isHomePokemonsLoaded = useSelector(
    (state) => state.pokemons.isHomePokemonsLoaded
  );

  useEffect(() => {
    dispatch(fetchPokemons(limitPokemonsValue));
  }, []);

  if (!isHomePokemonsLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Link to="/">
        <Icon
          inverted
          circular
          link="/"
          name="home"
          size="large"
          id="house__icon"
          onClick={() => {
            dispatch(fetchPokemons(50));
          }}
        />
      </Link>
      <Modal
        size="tiny"
        className="info__popup"
        trigger={
          <FontAwesomeIcon icon={faCircleInfo} className="info__icon" bounce />
        }
        header="Attention !"
        content={
          "Les données utilisées pour ce Pokédex n'excèdent pas le Pokémon n° 898, tout Pokémon recherché au-delà de ce numéro sera introuvable ! :)"
        }
        actions={[{ content: 'Compris' }]}
      />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:slug" element={<PokemonDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
