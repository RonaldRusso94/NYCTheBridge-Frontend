import React, { useContext, useEffect } from 'react';
import SingleItem from './SingleItem';
import SinglesContext from '../../context/singles/singlesContext';

const Singles = () => {
  const singlesContext = useContext(SinglesContext);
  const { singles, getSingles } = singlesContext;

  useEffect(() => {
    getSingles();
    // eslint-disable-next-line
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
