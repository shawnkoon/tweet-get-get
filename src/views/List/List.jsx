// Lib
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// App
import { ListComponent } from './List.component';

class ListContainer extends PureComponent {
  render() {
    const { tweets } = this.props;

    if (!tweets) {
      return <h1 className="mt-3">Tweets loading...</h1>;
    }

    // return <div />;
    return <ListComponent tweets={tweets} />;
  }
}

const mapStateToProps = state => (
  {
    tweets: state.tweetState.tweets,
  }
);

export const List = connect(mapStateToProps)(ListContainer);
