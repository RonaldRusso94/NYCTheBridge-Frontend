import React, { useReducer } from 'react';
import ArtistsContext from './artistsContext';
import ArtistsReducer from './artistsReducer';
import {
  SEARCH_ARTISTS,
  SET_LOADING,
  CLEAR_ARTISTS,
  GET_ARTISTS,
  GET_ARTIST,
} from '../types';

import api from '../../api';

const ArtistsState = (props) => {
  const initialState = {
    artists: [],
    artist: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ArtistsReducer, initialState);

  // Search Artists
  const searchArtists = async (text) => {
    setLoading();

    const filtered = await api.get(`/artists/search/${text}`);

    dispatch({
      type: SEARCH_ARTISTS,
      payload: filtered.data,
    });
  };

  // Clear artists from state
  const clearArtists = () => dispatch({ type: CLEAR_ARTISTS });

  // Get all artist
  const getArtists = async () => {
    const artists = await api.get('/artists');

    dispatch({
      type: GET_ARTISTS,
      payload: artists.data,
    });
  };

  // Get a single artist
  const getArtist = async (id) => {
    setLoading();
    const artist = await api.get(`/artists/${id}`);

    dispatch({
      type: GET_ARTIST,
      payload: artist.data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ArtistsContext.Provider
      value={{
        artists: state.artists,
        artist: state.artist,
        getArtists,
        searchArtists,
        clearArtists,
        getArtist,
      }}
    >
      {props.children}
    </ArtistsContext.Provider>
  );
};

export default ArtistsState;
