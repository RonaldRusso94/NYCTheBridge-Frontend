import { GET_ALBUM, SEARCH_ALBUMS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload
      };
    case SEARCH_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};
