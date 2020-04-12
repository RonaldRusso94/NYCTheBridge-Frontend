import React, { useContext } from 'react';
import AlbumItem from './AlbumItem';
import Spinner from '../layout/Spinner';
import AlbumsContext from '../../context/albums/albumsContext';

const Albums = () => {
  const albumsContext = useContext(AlbumsContext);

  const { albums } = albumsContext;
  return (
    <div className='grid-3'>
      {albums &&
        albums.map((album) => <AlbumItem key={album.albumId} album={album} />)}
    </div>
  );
};

export default Albums;
