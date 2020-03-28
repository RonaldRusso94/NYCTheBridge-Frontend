import React, { Fragment, useContext } from 'react';
import SearchState from '../search/SearchState';
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
      <SearchState
        artists={artistsContext.artists}
        singles={singlesContext.singles}
        albums={albumsContext.albums}
      />
      <h1 className='text-center py-2'>Most Recent</h1>
      <Artists />
    </Fragment>
  );
};

export default Home;
