import React, { useContext, useEffect } from 'react';
import ArtistItem from './ArtistItem';
import ArtistsContext from '../../context/artists/artistsContext';

const Artists = () => {
  const artistsContext = useContext(ArtistsContext);
  const { artists, getArtists } = artistsContext;

  useEffect(() => {
    getArtists();
  }, []);
  return (
    <>
      <div className='grid-3 my-1'>
        {artists.map((artist) => (
          <ArtistItem key={artist._id} artist={artist} />
        ))}
      </div>
    </>
  );
  // }
};

export default Artists;
