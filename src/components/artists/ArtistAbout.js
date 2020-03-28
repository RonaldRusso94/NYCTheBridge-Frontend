import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';

export const ArtistAbout = props => {
  const artistsContext = useContext(ArtistsContext);
  return (
    <>
      <img
        src={artistsContext.artist.image_address}
        alt=''
        style={{ width: '30%' }}
      />
    </>
  );
};

export default ArtistAbout;
