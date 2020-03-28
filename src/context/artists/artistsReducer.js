import {
  SEARCH_ARTISTS,
  SET_LOADING,
  CLEAR_ARTISTS,
  GET_ARTIST
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
        loading: false
      };
    case CLEAR_ARTISTS:
      return {
        ...state,
        artists: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
