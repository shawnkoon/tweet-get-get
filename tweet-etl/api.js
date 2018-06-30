// Lib
import axios from 'axios';

// Constants
const DB_URL = 'http://localhost:3000';

export const postTweetPage = tweet => (
  new Promise((resolve, reject) => (
    axios.post(`${DB_URL}/tweetPages`, tweet)
      .then(newTweet => resolve(newTweet.data))
      .catch(error => reject(error))
  ))
);
