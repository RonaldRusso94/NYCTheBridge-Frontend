import React, { useReducer, useEffect } from 'react';
import AlbumsContext from './albumsContext';
import AlbumsReducer from './albumsReducer';
import { GET_ALBUMS, GET_ALBUM, SEARCH_ALBUMS } from '../types';

import api from '../../api';

const AlbumsState = (props) => {
  const initialState = {
    albums: [],
    album: {},
  };

  useEffect(() => {
    getAlbums();
  }, []);

  const [state, dispatch] = useReducer(AlbumsReducer, initialState);

  // Get all albums
  const getAlbums = async () => {
    const albums = await api.get('/albums');

    dispatch({
      type: GET_ALBUMS,
      payload: albums.data,
    });
  };

  //     const res = await api.get('/albums/:albumId');
  //     console.log('From Album', res.data);
  //     setAlbum(res.data);

  // Get a single album
  const getAlbum = async (id) => {
    const album = await api.get(`/albums/${id}`);
    dispatch({
      type: GET_ALBUM,
      payload: album.data,
    });
  };

  // Search Albums
  const searchAlbums = async (text) => {
    const filtered = await api.get(`/albums/search/${text}`);

    dispatch({
      type: SEARCH_ALBUMS,
      payload: filtered.data,
    });
  };

  return (
    <AlbumsContext.Provider
      value={{
        albums: state.albums,
        album: state.album,
        getAlbums,
        getAlbum,
        searchAlbums,
      }}
    >
      {props.children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsState;
