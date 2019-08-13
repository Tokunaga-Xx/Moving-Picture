import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class postList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
          <li>test4</li>
        </ul>
        <Footer />
      </div>
    );
  }
}
