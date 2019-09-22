import React, { Component } from "react";

export default class Notfound extends Component {
  render() {
    return (
      <div className="notfoundcontainer">
        <div className="notfound">
          <p id="error">
            E<span>r</span>ror
          </p>
          <p id="code">
            4<span>0</span>
            <span>4</span>
          </p>
        </div>
      </div>
    );
  }
}
