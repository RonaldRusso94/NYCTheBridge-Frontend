import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import ArtistsContext from '../../context/artists/artistsContext';

const Users = () => {
  const artistsContext = useContext(ArtistsContext);

  const { loading, artists } = artistsContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={artistStyle}>
        {artists.map(artist => (
          <UserItem key={artist.id} artist={artist} />
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

export default Users;
