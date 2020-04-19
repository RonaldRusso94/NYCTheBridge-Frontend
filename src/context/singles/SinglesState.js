import React, { useReducer, useEffect } from 'react';
import SinglesContext from './singlesContext';
import SinglesReducer from './singlesReducer';
import { GET_SINGLE, GET_SINGLES, SEARCH_SINGLES } from '../types';

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
  const getSingles = async (id) => {
    const singles = await api.get('/singles');
    // const single = state.singles.find((single) => single.singleId === id);
    console.log('TEST', singles.data);
    dispatch({
      type: GET_SINGLES,
      payload: singles.data,
    });
  };

  // Get a single
  const getSingle = async (id) => {
    const single = state.singles.find((single) => single.singleId === id);

    dispatch({
      type: GET_SINGLE,
      payload: single,
    });
  };

  // Search Singles **FIX
  const searchSingles = async (text) => {
    const filtered = state.singles.filter((single) => {
      return single.title.indexOf(text) !== -1;
    });
    dispatch({
      type: SEARCH_SINGLES,
      payload: filtered,
    });
  };

  return (
    <SinglesContext.Provider
      value={{
        singles: state.singles,
        single: state.single,
        getSingle,
        getSingles,
        searchSingles,
      }}
    >
      {props.children}
    </SinglesContext.Provider>
  );
};

export default SinglesState;
