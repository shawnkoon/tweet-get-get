// Lib
import axios from 'axios';

const baseURL = 'http://localhost:3000/tweetPages';

export const fetchTweets = pageNumber => (
  new Promise((resolve, reject) => {
    axios.get(`${baseURL}/${pageNumber}`, { headers: { 'Content-Type': 'application/json' } })
      .then(result => resolve(result.data.tweets))
      .catch(error => reject(error.response));
  })
);
