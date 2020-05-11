import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';

export const ArtistAbout = (props) => {
  const artistsContext = useContext(ArtistsContext);
  return (
    <>
      <h4>Image Gallery</h4>
      <div className='d-flex' style={{ flexWrap: 'wrap' }}>
        <img
          className=''
          src={artistsContext.artist.img}
          alt=''
          style={{ height: '500px', width: '500px' }}
        />
      </div>

      <p className='py-3'>{artistsContext.artist.bio}</p>
    </>
  );
};

export default ArtistAbout;
