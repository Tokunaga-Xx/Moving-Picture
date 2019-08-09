import React, { Component } from "react";
import { Link } from "react-router-dom";
import douban from "../../images/douban.png";

class introMymovie extends Component {
  render() {
    return (
      <div className="introMymovie">
        <h1>My-movie-log | xyc</h1>
        <Link to="/page">
          <button>Learn more</button>
        </Link>
        <i>
          <a href="https://www.douban.com/people/68930030/">
            <img src={douban} alt="douban" />
          </a>
        </i>
      </div>
    );
  }
}

export default introMymovie;
