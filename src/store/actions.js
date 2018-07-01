// App
import * as types from './actionTypes';

export const getAllTweets = (pageNumber, tweets) => ({
  pageNumber,
  tweets,
  type: types.GET_ALL_TWEET,
});

export const hasNextPage = hasNext => ({
  hasNextPage: hasNext,
  type: types.SET_HAS_NEXT,
});
