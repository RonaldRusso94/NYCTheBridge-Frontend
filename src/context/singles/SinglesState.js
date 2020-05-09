import React, { useReducer, useEffect } from 'react';
import SinglesContext from './singlesContext';
import SinglesReducer from './singlesReducer';
import {
  GET_SINGLE,
  GET_SINGLES,
  ARTIST_SINGLES,
  SEARCH_SINGLES,
} from '../types';

import api from '../../api';

const SinglesState = (props) => {
  const initialState = {
    singles: [],
    single: {},
  };

  useEffect(() => {
    getSingles();
  }, []);

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
      type: ARTIST_Singles,
      payload: singles.data,
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

  return (
    <SinglesContext.Provider
      value={{
        singles: state.singles,
        single: state.single,
        getSingle,
        getSingles,
        artistSingles,
        searchSingles,
      }}
    >
      {props.children}
    </SinglesContext.Provider>
  );
};

export default SinglesState;
