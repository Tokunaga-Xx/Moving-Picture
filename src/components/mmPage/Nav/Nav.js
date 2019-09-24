import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    let checkbox = document.querySelector("input[name=theme]");
    const trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="toggle-container">
          <input type="checkbox" id="switch" name="theme" />
          <label htmlFor="switch">Toggle</label>
        </div>
        <h1>
          Tokun<span>a</span>ga
        </h1>
        <ul>
          <li>
            <Link to="/page">
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link to="/postlist">
              <p>posts</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
