import React, { useContext } from 'react';
import ArtistItem from './ArtistItem';
import Spinner from '../layout/Spinner';
import ArtistsContext from '../../context/artists/artistsContext';

const Artists = () => {
  const artistsContext = useContext(ArtistsContext);

  const { loading, artists } = artistsContext;

  // if (loading) {
  //   return <Spinner />;
  // } else {
  return (
    <>
      <div className='grid-3'>
        {artists.map((artist) => (
          <ArtistItem key={artist._id} artist={artist} />
        ))}
      </div>
    </>
  );
  // }
};

export default Artists;
