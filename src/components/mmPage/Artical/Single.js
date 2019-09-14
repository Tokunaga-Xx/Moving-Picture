import React, { Component } from "react";
import long from "../../../images/long.svg";
import short from "../../../images/short1.svg";
import Line from "./Line";

export default class Single extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li>
        <Line />
        <div className="imgArea">
          <a href={this.props.link}>
            <img data-src={this.props.imgsrc} alt="" className="img" />
          </a>
        </div>
        <div className="postArea">
          <a href="/post1">
            <h1 className="head">{this.props.head}</h1>
            <h2 className="head2">
              <span style={{ color: "crimson" }}>---</span>
              {this.props.head2}
            </h2>
          </a>
          <div className="icon">
            <img src={short} alt="" />
            <img src={long} alt="" />
          </div>
          <audio src={this.props.song}></audio>
        </div>
      </li>
    );
  }
}
