import {
  GET_SINGLE,
  GET_SINGLES,
  SEARCH_SINGLES,
  ARTIST_SINGLES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SINGLE:
      return {
        ...state,
        single: action.payload,
      };
    case GET_SINGLES:
      return {
        ...state,
        singles: action.payload,
      };
    case ARTIST_SINGLES:
      return {
        ...state,
        singles: action.payload,
      };
    case SEARCH_SINGLES:
      return {
        ...state,
        singles: action.payload,
      };
    default:
      return state;
  }
};
