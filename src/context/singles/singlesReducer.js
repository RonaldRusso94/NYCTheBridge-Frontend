import { GET_SINGLE, SEARCH_SINGLES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SINGLE:
      return {
        ...state,
        single: action.payload
      };
    case SEARCH_SINGLES:
      return {
        ...state,
        singles: action.payload
      };
    default:
      return state;
  }
};
