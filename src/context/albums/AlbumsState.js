import React, { useReducer, useEffect } from 'react';
import AlbumsContext from './albumsContext';
import AlbumsReducer from './albumsReducer';
import { GET_ALBUMS, GET_ALBUM, ARTIST_ALBUMS, SEARCH_ALBUMS } from '../types';

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

  // Get All Albums
  const getAlbums = async () => {
    const albums = await api.get('/albums');

    dispatch({
      type: GET_ALBUMS,
      payload: albums.data,
    });
  };

  // Get One Album
  const getAlbum = async (id) => {
    const album = await api.get(`/albums/${id}`);
    dispatch({
      type: GET_ALBUM,
      payload: album.data,
    });
  };

  // Get Album By Artist
  const artistAlbums = async (id) => {
    const albums = await api.get(`/albums/artist/${id}`);

    dispatch({
      type: ARTIST_ALBUMS,
      payload: albums.data,
    });
  };

  // Get Album By Seach
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
        artistAlbums,
      }}
    >
      {props.children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsState;
