// Lib
import React from 'react';

// App
import { Col, Row } from 'reactstrap';
import logo from '../../images/logo.svg';
import '../../styles/App.css';

export const AppComponent = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Welcome to Tweet Get Get
      </h1>
    </header>
    <Row>
      <Col xs="2" />
      <Col className="mt-2">
        {props.children}
      </Col>
      <Col xs="2" />
    </Row>
  </div>
);
