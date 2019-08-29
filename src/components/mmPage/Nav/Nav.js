import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <h1>
          Tokun<span>a</span>ga
        </h1>
        <ul>
          <li>
            <a href="/page">home</a>
          </li>
          <li>
            <a href="/postlist">posts</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
