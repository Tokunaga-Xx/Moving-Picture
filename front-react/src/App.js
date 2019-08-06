import React, {Component} from 'react';

import IntroPage from './components/intro/intro';
import mmPage from './components/mmPage/mmPage';
import post1 from './components/mmPage/posts/post1';
import './App.css';

import { BrowserRouter as Router,  Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className={'pageContainer'}>
        <Route path="/" exact component={IntroPage} />
        <Route path="/page" component={mmPage} />
        <Route path="/posts/post1" component={post1} />
      </div>
      </Router>
    );
  }
}
export default App;