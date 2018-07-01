// Lib
import axios from 'axios';
import moment from 'moment';

// App
import { postTweetPage } from './api';

// Constants
const BASE_URL = 'https://badapi.iqvia.io/api/v1/Tweets';
const MAX_PAGE_SIZE = 100;

export class TweetFetcher {
  constructor(startDate = moment('2016-01-01').utc().startOf('year'), endDate = moment('2017-12-31').utc().endOf('year')) {
    // State
    this.START_DATE = startDate;
    this.END_DATE = endDate;
    this.TWEET_COUNT = 0;
    this.PAGE_COUNT = 0;
  }

  /**
   * Calls badapi to get tweets.
   *
   * @param {moment} startDate: Start date in UTC with moment object.
   *
   * @return {Promise<tweet[]>}: Returns a promise to fetch tweets.
   */
  fetchTweets(startDate) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}?startDate=${startDate.format()}&endDate=${this.END_DATE.format()}`)
        .then(result => resolve(result.data))
        .catch(error => reject(error));
    });
  }

  /**
   * Main application to fetch tweets in recursive manner.
   *
   * @param {moment} startDate: Start date in UTC with moment object.
   * @param {tweet} previousTweet: Last Tweet found from previous run of function call.
   */
  executor(startDate = this.START_DATE, previousTweet = undefined) {
    this.fetchTweets(startDate)
      .then((tweets) => {
        let numberOfDuplicates = 0;

        if (previousTweet) {
          numberOfDuplicates = tweets.findIndex(tweet => tweet.id === previousTweet.id) + 1;
        }
        this.TWEET_COUNT = this.TWEET_COUNT + tweets.length - numberOfDuplicates;

        this.apiHandler(tweets, ++this.PAGE_COUNT, numberOfDuplicates);
      });
  }

  apiHandler(tweets, pageId, newStartIndex) {
    postTweetPage(tweets.slice(newStartIndex), pageId)
      .then(() => {
        // Base case.
        if (tweets.length !== MAX_PAGE_SIZE) {
          console.log(`Tweet Get Get process finished with ${this.TWEET_COUNT} tweets.`);
          return;
        }

        console.log(`Currently ${this.TWEET_COUNT} tweets fetched and saved.`);
        this.executor(moment(tweets[tweets.length - 1].stamp).utc(), tweets[tweets.length - 1]);
      })
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          console.log('ERROR [500]: Duplicate insertion detected, DB needs to be re-started.');
          return;
        }
        console.log('DB is busy, cooling off for 1 second.');
        setTimeout(() => this.apiHandler(tweets.slice(newStartIndex), pageId, newStartIndex), 1000);
      });
  }
}

console.log('Executing Tweet Get Get please wait...');
const fetcher = new TweetFetcher();
fetcher.executor();
