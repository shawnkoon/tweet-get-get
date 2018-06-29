// Lib
import { createStore, combineReducers } from 'redux';

// App
import { tweetReducer } from './reducers';

export const store = createStore(combineReducers({ tweetState: tweetReducer }));
