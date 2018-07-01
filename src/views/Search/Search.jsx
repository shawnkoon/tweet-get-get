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

    this.state = { error: undefined };

    this.handleGetAll(props.pageNumber);
  }

  handleGetAll = (pageNumber) => {
    api.fetchTweets(pageNumber)
      .then((tweets) => {
        api.fetchTweets(pageNumber + 1)
          .then(() => this.props.setHasNextPage(true))
          .catch(() => this.props.setHasNextPage(false));

        this.setState({ error: undefined });
        this.props.getAllTweets(pageNumber, tweets);
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <SearchComponent
        handleGetAll={this.handleGetAll}
        hasNextPage={this.props.hasNextPage}
        currentPage={this.props.pageNumber}
        error={this.state.error}
      />
    );
  }
}

const mapStateToProps = state => (
  {
    hasNextPage: state.tweetState.hasNextPage,
    pageNumber: state.tweetState.pageNumber || 1,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getAllTweets: (pageNumber, tweets) => dispatch(actions.getAllTweets(pageNumber, tweets)),
    setHasNextPage: hasNext => dispatch(actions.hasNextPage(hasNext)),
  }
);

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
