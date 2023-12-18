/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { changeLimitValue, fetchPokemons } from '../../actions/pokemons';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const dispatch = useDispatch();
  const limitPokemonsValue = useSelector((state) => state.pokemons.limitValue);
  const isAppLoading = useSelector((state) => state.pokemons.isAppLoading);
  useEffect(() => {
    dispatch(fetchPokemons(limitPokemonsValue));
  }, []);

  if (isAppLoading) {
    return (
      <div className="loader__container">
        <CircularProgress id="loader" />
        <span>Chargement...</span>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:slug" element={<PokemonDetails />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
