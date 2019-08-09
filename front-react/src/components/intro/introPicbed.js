import React, { Component } from "react";
import github from "../../images/GitHub.png";

class introPicbed extends Component {
  render() {
    return (
      <div className="introPicbed">
        <h1>My-image-host</h1>
        <a href="http://localhost:5000">
          <button>Log in</button>
        </a>
        <i>
          <a href="https://github.com/Tokunaga-X/Moving-Picture">
            <img src={github} alt="" />
          </a>
        </i>
      </div>
    );
  }
}

export default introPicbed;
