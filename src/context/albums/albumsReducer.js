import {
  GET_ALBUMS,
  GET_ALBUM,
  ARTIST_ALBUMS,
  FEATURED_ON_ALBUMS,
  SEARCH_ALBUMS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload,
      };
    case ARTIST_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case FEATURED_ON_ALBUMS:
      return {
        ...state,
        featuredOn: action.payload,
      };
    case SEARCH_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
};
