import { GET_SINGLE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SINGLE:
      return {
        ...state,
        single: action.payload
      };
    default:
      return state;
  }
};
