import React, { useReducer } from 'react';
import SinglesContext from './singlesContext';
import SinglesReducer from './singlesReducer';
import { GET_SINGLE } from '../types';

const SinglesState = props => {
  const initialState = {
    singles: [
      {
        singleId: '1',
        artistId: ['1', '2'],
        singleImg:
          'https://image.shutterstock.com/image-vector/vector-music-icon-260nw-668051581.jpg',
        title: 'Different Path Single',
        genre: ['classic', 'pop', 'trap'],
        musicVideo: true,
        musicUrl: ''
      },
      {
        singleId: '2',
        artistId: ['3', '4'],
        singleImg:
          'https://image.shutterstock.com/image-vector/vector-music-icon-260nw-668051581.jpg',
        title: 'Stick By My Side Single',
        genre: ['classic', 'pop', 'r&b'],
        musicVideo: true,
        musicUrl: ''
      }
    ],
    single: {}
  };

  const [state, dispatch] = useReducer(SinglesReducer, initialState);

  // Get a single
  const getSingle = async id => {
    const single = state.singles.find(single => single.singleId === id);

    console.log('from dispatch getSingle', single);

    dispatch({
      type: GET_SINGLE,
      payload: single
    });
  };

  return (
    <SinglesContext.Provider
      value={{
        singles: state.singles,
        single: state.single,
        getSingle
      }}
    >
      {props.children}
    </SinglesContext.Provider>
  );
};

export default SinglesState;
