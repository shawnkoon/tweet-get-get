// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// App
import { store } from './store';
import { App } from './views/App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
