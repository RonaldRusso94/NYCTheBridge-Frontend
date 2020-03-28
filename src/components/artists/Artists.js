import React, { useContext } from 'react';
import ArtistItem from './ArtistItem';
import Spinner from '../layout/Spinner';
import ArtistsContext from '../../context/artists/artistsContext';

const Artists = () => {
  const artistsContext = useContext(ArtistsContext);

  const { loading, artists } = artistsContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={artistStyle}>
        {artists.map(artist => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </div>
    );
  }
};

const artistStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Artists;
