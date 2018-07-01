// Lib
import React from 'react';

// App
import { Button, UncontrolledAlert } from 'reactstrap';

/*
  interface SearchComponentProps {
    currentPage: number;
    hasNextPage: boolean;
    error?: AxiosError.response;
    handleGetAll(): void;
  }
*/
export const SearchComponent = props => (
  <React.Fragment>
    {!!props.error && (
      <UncontrolledAlert key={Math.random()} color="danger">
        Sorry, recent action failed with status code of {props.error.status}.
      </UncontrolledAlert>
    )}
    <Button
      className="mr-1"
      disabled={props.currentPage === 1}
      color="primary"
      onClick={() => props.handleGetAll(props.currentPage - 10 < 0 ? 1 : props.currentPage - 10)}
    >
      <i className="fas fa-angle-double-left" />
    </Button>
    <Button
      disabled={props.currentPage === 1}
      color="primary"
      onClick={() => props.handleGetAll(props.currentPage - 1)}
    >
      <i className="fas fa-angle-left" />
    </Button>
    <span className="ml-3 mr-3">{props.currentPage}</span>
    <Button
      className="mr-1"
      disabled={!props.hasNextPage}
      color="primary"
      onClick={() => props.handleGetAll(props.currentPage + 1)}
    >
      <i className="fas fa-angle-right" />
    </Button>
    <Button
      disabled={!props.hasNextPage}
      color="primary"
      onClick={() => props.handleGetAll(props.currentPage + 10)}
    >
      <i className="fas fa-angle-double-right" />
    </Button>
  </React.Fragment>
);
