import React, { Component } from "react";

import IntroPage from "./components/intro/intro";
import mmPage from "./components/mmPage/mmPage";
import postlist from "./components/mmPage/postList/postList";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={"pageContainer"}>
          <Switch>
            <Route path="/" exact component={IntroPage} />
            <Route path="/page" component={mmPage} />
            <Route path="/postlist" component={postlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
