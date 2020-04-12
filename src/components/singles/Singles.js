import React, { useContext } from 'react';
import SingleItem from './SingleItem';
import Spinner from '../layout/Spinner';
import SinglesContext from '../../context/singles/singlesContext';

const Singles = () => {
  const singlesContext = useContext(SinglesContext);

  const { singles } = singlesContext;

  return (
    <div style={singleStyle}>
      {singles &&
        singles.map((single) => (
          <SingleItem key={single.singleId} single={single} />
        ))}
    </div>
  );
};

const singleStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Singles;
