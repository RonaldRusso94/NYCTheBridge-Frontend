import React, { useReducer } from 'react';
import SinglesContext from './singlesContext';
import SinglesReducer from './singlesReducer';
import { GET_SINGLE, SEARCH_SINGLES } from '../types';

const SinglesState = (props) => {
  const initialState = {
    singles: [
      {
        singleId: '1',
        artistId: ['1'],
        features: ['2'],
        singleImg:
          'https://image.shutterstock.com/image-vector/vector-music-icon-260nw-668051581.jpg',
        title: 'Different Path Single',
        genre: ['classic', 'trap'],
        musicVideo: true,
        musicUrl: '',
      },
      {
        singleId: '2',
        artistId: ['3', '1'],
        features: ['1'],
        singleImg:
          'https://image.shutterstock.com/image-vector/vector-music-icon-260nw-668051581.jpg',
        title: 'Stick By My Side Single',
        genre: [
          'classic',
          'r&b',
          'trap',
          'drill',
          'spanish',
          'reggae',
          'freestyle',
          'instrumental',
        ],
        musicVideo: true,
        musicUrl: '',
      },
    ],
    single: {},
  };

  const [state, dispatch] = useReducer(SinglesReducer, initialState);

  // Get a single
  const getSingle = async (id) => {
    const single = state.singles.find((single) => single.singleId === id);

    console.log('from dispatch getSingle', single);

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
        searchSingles,
      }}
    >
      {props.children}
    </SinglesContext.Provider>
  );
};

export default SinglesState;
