import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_ARTIST } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
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
    case CLEAR_USERS:
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
