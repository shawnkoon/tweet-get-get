// Lib
import axios from 'axios';
import moment from 'moment';

// Constants
const BASE_URL = 'https://badapi.iqvia.io/api/v1/Tweets';
const START_DATE = moment('2016-01-01').utc().startOf('year');
const END_DATE = moment('2017-12-31').utc().endOf('year');
const MAX_PAGE_SIZE = 100;

// State
let TWEET_COUNT = 0;

/**
 * Calls badapi to get tweets.
 *
 * @param {moment} startDate: Start date in UTC with moment object.
 *
 * @return {Promise<tweet[]>}: Returns a promise to fetch tweets.
 */
export const fetchTweets = startDate => (
  new Promise((resolve, reject) => {
    const url = `${BASE_URL}?startDate=${startDate.format()}&endDate=${END_DATE.format()}`;
    axios.get(url)
      .then(result => resolve(result.data))
      .catch(error => reject(error));
  })
);

/**
 * Main application to fetch tweets in recursive manner.
 *
 * @param {moment} startDate: Start date in UTC with moment object.
 * @param {tweet} previousTweet: Last Tweet found from previous run of function call.
 */
const executor = (startDate, previousTweet = undefined) => {
  fetchTweets(startDate)
    .then((tweets) => {
      TWEET_COUNT += tweets.length;

      if (previousTweet) {
        const numberOfDuplicates = tweets.findIndex(tweet => tweet.id === previousTweet.id) + 1;
        TWEET_COUNT -= numberOfDuplicates;
      }

      if (tweets.length !== MAX_PAGE_SIZE) {
        console.log(`Tweets fetching process finished with ${TWEET_COUNT} tweets.`);
        return;
      }

      console.log(`Currently ${TWEET_COUNT} tweets fetched.`);
      executor(moment(tweets[tweets.length - 1].stamp).utc(), tweets[tweets.length - 1]);
    });
};

console.log('Executing Tweet Get Get please wait...');
executor(START_DATE);
