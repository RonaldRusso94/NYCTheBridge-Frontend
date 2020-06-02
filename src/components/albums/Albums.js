import React, { useContext, useEffect } from 'react';
import AlbumItem from './AlbumItem';
import AlbumsContext from '../../context/albums/albumsContext';

const Albums = () => {
  const albumsContext = useContext(AlbumsContext);
  const { albums, getAlbums } = albumsContext;

  useEffect(() => {
    getAlbums();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-3 my-1'>
      {albums &&
        albums.map((album) => <AlbumItem key={album._id} album={album} />)}
    </div>
  );
};

export default Albums;
