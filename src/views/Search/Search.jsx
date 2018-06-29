// Lib
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// App
import { SearchComponent } from './Search.component';
import * as actions from '../../store/actions';
import * as api from '../../store/api';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);

    console.log('tweets', props.tweets);
  }

  handleGetAll = () => {
    console.log('tweets', this.props.tweets);
    console.log('Call GetALL');
    api.fetchTweets()
      .then(tweets => this.props.getAllTweets(tweets));
  }

  render() {
    return <SearchComponent handleGetAll={this.handleGetAll} />;
  }
}

const mapStateToProps = state => (
  {
    tweets: state.tweetState.tweets,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getAllTweets: tweets => dispatch(actions.getAllTweets(tweets)),
  }
);

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
