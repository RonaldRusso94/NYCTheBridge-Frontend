import React, { useContext } from 'react';
import SingleItem from './SingleItem';
import Spinner from '../layout/Spinner';
import SinglesContext from '../../context/singles/singlesContext';

const Singles = () => {
  const singlesContext = useContext(SinglesContext);

  const { singles } = singlesContext;

  return (
    <div className='grid-3'>
      {singles &&
        singles.map((single) => (
          <SingleItem key={single.singleId} single={single} />
        ))}
    </div>
  );
};

export default Singles;
