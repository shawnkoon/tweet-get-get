// Lib
import * as types from './actionTypes';

const initialState = {
  tweets: [],
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TWEET:
      const tweets = action;
      return {
        ...state,
        tweets,
      };
    default:
      return state;
  }
};
