import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className={"footer"}>
        <div className="rateArea">
          <p>Give your score here =></p>
          <div className="rate-content">
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
          </div>
        </div>

        <h3>Made by TokunagaX - 2019</h3>
      </footer>
    );
  }
}

export default Footer;
