import React, { useContext, useEffect } from 'react';
import SingleItem from './SingleItem';
import Spinner from '../layout/Spinner';
import SinglesContext from '../../context/singles/singlesContext';

const Singles = () => {
  const singlesContext = useContext(SinglesContext);
  const { singles, getSingles } = singlesContext;

  useEffect(() => {
    getSingles();
  }, []);

  return (
    <div className='grid-3'>
      {singles &&
        singles.map((single) => (
          <SingleItem key={single._id} single={single} />
        ))}
    </div>
  );
};

export default Singles;
