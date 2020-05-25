import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';

export const ArtistAbout = (props) => {
  const artistsContext = useContext(ArtistsContext);
  return (
    <div className='card my-3'>
      <h3>Image Gallery</h3>
      <hr className='mb-1' />
      <div className='' style={{ overflow: 'auto' }}>
        {artistsContext.artist.gallery.map((img) => {
          return (
            <div key={img._id} className='test-img'>
              <img className='' src={img.img} alt='' />
            </div>
          );
        })}
      </div>

      <div className='my-3'>
        <h3>Bio</h3>
        <hr className='mb-1' />
        <p className=''>{artistsContext.artist.bio}</p>
      </div>
    </div>
  );
};

export default ArtistAbout;
