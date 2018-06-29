// Lib
import React, { PureComponent } from 'react';

// App
import { AppComponent } from './App.component';
import { Search } from '../Search';

export class App extends PureComponent {
  render() {
    return (
      <AppComponent>
        <Search />
      </AppComponent>
    );
  }
}
