// Lib
import * as types from './actionTypes';

const initialState = {
  hasNextPage: true,
  pageNumber: undefined,
  tweets: [],
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TWEET:
      const { pageNumber, tweets } = action;
      return { ...state, pageNumber, tweets };
    case types.SET_HAS_NEXT:
      const { hasNextPage } = action;
      return { ...state, hasNextPage };
    default:
      return state;
  }
};
