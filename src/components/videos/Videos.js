import React, { useContext } from 'react';
import VideoItemSingle from './VideoItemSingle';
import Spinner from '../layout/Spinner';
//getting both for the moment just in case
import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

const Videos = () => {
  const singlesContext = useContext(SinglesContext);

  const { singles } = singlesContext;

  return (
    <div className='grid-3'>
      {/* runs through all singles and creates a component for each one */}
      {singles &&
        singles.map(
          (single) =>
            single.video && <VideoItemSingle key={single.id} single={single} />
        )}
    </div>
  );
};

export default Videos;
