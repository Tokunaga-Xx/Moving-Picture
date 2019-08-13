import React, { Component } from "react";

class Right extends Component {
  render() {
    return (
      <div className={"right"}>
        <ul>
          <li>
            <a href="/post/1">post1</a>
          </li>
          <li>
            <a href="/post/2">post2</a>
          </li>
          <li>
            <a href="#">To be filled</a>
          </li>
          <li>
            <a href="#">To be filled</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Right;
