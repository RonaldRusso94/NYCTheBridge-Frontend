import React, { Fragment, useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

import Artists from '../artists/Artists';

const Home = () => {
  return (
    <Fragment>
      <h1 className='text-center py-1'>Most Recent</h1>
      <Artists />
    </Fragment>
  );
};

export default Home;
