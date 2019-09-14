import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }
  componentDidMount(props) {
    console.log(ReactDOM.findDOMNode(this).querySelectorAll("input")[0]);
  }
  render() {
    return (
      <div className="rateArea">
        <h1>
          <span style={{ color: "crimson" }}>{this.props.score}</span> out of{" "}
          <span style={{ color: "crimson" }}>10</span>
        </h1>
      </div>
    );
  }
}
