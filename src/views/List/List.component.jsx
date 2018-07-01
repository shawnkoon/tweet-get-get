// Lib
import React from 'react';

// App
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

/**
 * interface ListProps {
 *  tweets: [tweetObj]
 * }
 */
export const ListComponent = props => (
  <ListGroup className="mt-3 mb-3">
    {props.tweets.map(tweet => (
      <ListGroupItem key={tweet.id}>
        <ListGroupItemHeading>Id : {tweet.id}</ListGroupItemHeading>
        <ListGroupItemText>Time : {tweet.stamp}</ListGroupItemText>
        <ListGroupItemText>Content : {tweet.text}</ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
);
