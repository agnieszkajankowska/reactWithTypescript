import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import Description from "./Description";
import Header from "./Header";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="AGA" />
        </header>
        <Description countBy={3} />
      </div>
    );
  }
}

export default App;
