import React, { useReducer, useEffect } from 'react';
import SinglesContext from './singlesContext';
import SinglesReducer from './singlesReducer';
import {
  GET_SINGLE,
  GET_SINGLES,
  ARTIST_SINGLES,
  SEARCH_SINGLES,
  FEATURED_ON_SINGLES,
  VIDEO_SINGLES,
} from '../types';

import api from '../../api';

const SinglesState = (props) => {
  const initialState = {
    singles: [],
    single: {},
    featuredOn: [],
  };

  const [state, dispatch] = useReducer(SinglesReducer, initialState);

  // Get all singles
  const getSingles = async () => {
    const singles = await api.get('/singles');
    dispatch({
      type: GET_SINGLES,
      payload: singles.data,
    });
  };

  // Get a single
  const getSingle = async (id) => {
    const single = await api.get(`/singles/${id}`);

    dispatch({
      type: GET_SINGLE,
      payload: single.data,
    });
  };

  // Get Single By Artist
  const artistSingles = async (id) => {
    const singles = await api.get(`/singles/artist/${id}`);

    dispatch({
      type: ARTIST_SINGLES,
      payload: singles.data,
    });
  };

  // Get Single By Featured
  const featuredOnSingle = async (id) => {
    const features = await api.get(`/singles/features/${id}`);

    dispatch({
      type: FEATURED_ON_SINGLES,
      payload: features.data,
    });
  };

  // Search Singles
  const searchSingles = async (text) => {
    const filtered = await api.get(`/singles/search/${text}`);

    console.log(filtered.data);
    dispatch({
      type: SEARCH_SINGLES,
      payload: filtered.data,
    });
  };

  // Get single w/ videos
  const videoSingles = async () => {
    const singles = await api.get('/singles/videos');
    dispatch({
      type: VIDEO_SINGLES,
      payload: singles.data,
    });
  };

  return (
    <SinglesContext.Provider
      value={{
        singles: state.singles,
        single: state.single,
        featuredOn: state.featuredOn,
        getSingle,
        getSingles,
        artistSingles,
        searchSingles,
        featuredOnSingle,
        videoSingles,
      }}
    >
      {props.children}
    </SinglesContext.Provider>
  );
};

export default SinglesState;
