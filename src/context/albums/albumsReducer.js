import { GET_ALBUM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload
      };
    default:
      return state;
  }
};
