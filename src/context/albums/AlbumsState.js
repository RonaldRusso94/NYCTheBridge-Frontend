import React, { useReducer, useEffect } from 'react';
import AlbumsContext from './albumsContext';
import AlbumsReducer from './albumsReducer';
import { GET_ALBUMS, GET_ALBUM, SEARCH_ALBUMS } from '../types';
import { findDOMNode } from 'react-dom';

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
    console.log('From AlbumState', albums.data);

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
    // const album = state.albums.find((album) => album.albumId === id);
    const album = await api.get(`/albums/${id}`);
    dispatch({
      type: GET_ALBUM,
      payload: album.data,
    });
  };

  // Search Albums **FIX
  const searchAlbums = async (text) => {
    const filtered = state.albums.filter((album) => {
      return album.title.indexOf(text) !== -1;
    });
    dispatch({
      type: SEARCH_ALBUMS,
      payload: filtered,
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
