import React, { Fragment, useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

import Artists from '../artists/Artists';

const Home = () => {
  const artistsContext = useContext(ArtistsContext);
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  console.log('Artist From Home', artistsContext.artists);
  console.log('Singles From Home', singlesContext.singles);

  return (
    <Fragment>
      <h1 className='text-center py-1'>Most Recent</h1>
      <Artists />
    </Fragment>
  );
};

export default Home;
