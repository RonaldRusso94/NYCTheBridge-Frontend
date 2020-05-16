import React, { useContext, useState, useEffect } from 'react';
import AlbumItem from './AlbumItem';
import Spinner from '../layout/Spinner';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Albums = () => {
  const albumsContext = useContext(AlbumsContext);
  const { albums } = albumsContext;

  return (
    <div className='grid-3'>
      {albums &&
        albums.map((album) => <AlbumItem key={album._id} album={album} />)}
    </div>
  );
};

export default Albums;
