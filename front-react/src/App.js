import React, {Component} from 'react';

import IntroPage from './components/intro/intro';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'pageContainer'}>
        <IntroPage />
      </div>
    );
  }
}
export default App;