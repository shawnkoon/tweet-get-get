// Lib
import React, { PureComponent } from 'react';

// App
import { AppComponent } from './App.component';
import { Search } from '../Search';
import { List } from '../List';

export class App extends PureComponent {
  render() {
    return (
      <AppComponent>
        <Search />
        <List />
      </AppComponent>
    );
  }
}
