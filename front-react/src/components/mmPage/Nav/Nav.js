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
            <a href="/">home</a>
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
