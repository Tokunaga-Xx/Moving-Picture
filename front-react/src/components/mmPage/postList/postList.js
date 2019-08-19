import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import List from "./List";

export default class postList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  render() {
    return (
      <div className="postlist">
        <Nav />
        <List />
        <Footer />
      </div>
    );
  }
}
