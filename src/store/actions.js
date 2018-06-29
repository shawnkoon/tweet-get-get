// App
import * as types from './actionTypes';

export const getAllTweets = tweets => ({
  tweets,
  type: types.GET_ALL_TWEET,
});
