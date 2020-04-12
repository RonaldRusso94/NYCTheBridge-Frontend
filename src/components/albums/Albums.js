import React, { useContext } from 'react';
import AlbumItem from './AlbumItem';
import Spinner from '../layout/Spinner';
import AlbumsContext from '../../context/albums/albumsContext';

const Albums = () => {
  const albumsContext = useContext(AlbumsContext);

  const { albums } = albumsContext;
  return (
    <div style={albumStyle}>
      {albums &&
        albums.map((album) => <AlbumItem key={album.albumId} album={album} />)}
    </div>
  );
};

const albumStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Albums;
