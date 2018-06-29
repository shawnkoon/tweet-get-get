// Lib
import React from 'react';

// App
import { Button } from 'reactstrap';

/*
  interface SearchComponentProps {
    handleGetAll(): void;
  }
*/
export const SearchComponent = props => (
  <div>
    <Button size="lg" color="primary" onClick={props.handleGetAll}>Get All Tweets</Button>
  </div>
);
