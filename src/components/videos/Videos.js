import React, { useContext, useEffect } from 'react';
import VideoItemSingle from './VideoItemSingle';
import Spinner from '../layout/Spinner';
import SinglesContext from '../../context/singles/singlesContext';

const Videos = () => {
  const singlesContext = useContext(SinglesContext);

  const { singles, videoSingles } = singlesContext;

  useEffect(() => {
    videoSingles();
  }, []);

  return (
    <div className='grid-3'>
      {/* runs through all singles and creates a component for each one */}
      {singles &&
        singles.map(
          (single) =>
            single.video && <VideoItemSingle key={single._id} single={single} />
        )}
    </div>
  );
};

export default Videos;
