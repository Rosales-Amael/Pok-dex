import { CircularProgress } from '@mui/material';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader__container">
      <CircularProgress id="loader" />
      <span>Chargement...</span>
    </div>
  );
};

export default Loader;
