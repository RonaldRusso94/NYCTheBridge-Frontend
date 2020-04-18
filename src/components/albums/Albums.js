import React, { useContext, useState, useEffect } from 'react';
import AlbumItem from './AlbumItem';
import Spinner from '../layout/Spinner';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Albums = () => {
  const albumsContext = useContext(AlbumsContext);
  // const { getArtist, loading, artist } = artistsContext;
  const { albums } = albumsContext;

  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const res = await api.get('/albums');
  //       console.log('From res', res.data);
  //       setAlbums(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   apiCall();
  // }, []);

  console.log('albums var', albums);

  // const { albums } = albumsContext;
  return (
    <div className='grid-3'>
      {albums &&
        albums.map((album) => <AlbumItem key={album._id} album={album} />)}
    </div>
  );
};

export default Albums;
