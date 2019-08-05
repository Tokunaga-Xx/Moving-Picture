import React, {Component} from 'react';

import IntroPage from './components/intro/intro';
import mmPage from './components/mmPage/mmPage';
import './App.css';

import { BrowserRouter as Router,  Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className={'pageContainer'}>
        <Route path="/" exact component={IntroPage} />
        <Route path="/mymovie" component={mmPage} />
      </div>
      </Router>
    );
  }
}
export default App;