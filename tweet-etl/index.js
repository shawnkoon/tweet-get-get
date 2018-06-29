// Lib
import axios from 'axios';

const baseURL = 'https://badapi.iqvia.io/api/v1/Tweets';

export const fetchTweets = () => (
  new Promise((resolve, reject) => {
    axios.get(`${baseURL}?startDate=2017-03-22T04:07:56.271Z&endDate=2017-03-28T04:07:56.271Z`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        console.log('API Succeeded', result.data);
        resolve(result.data);
      })
      .catch((error) => {
        console.log('An error occured', error);
        reject(error);
      });
  })
);

fetchTweets();
