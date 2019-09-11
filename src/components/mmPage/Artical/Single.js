import React, { Component } from "react";
import long from "../../../images/long.svg";
import short from "../../../images/short1.svg";

export default class Single extends Component {
  // constructor(props) {
  //   super(props);
  // }
  imgstyle = {
    width: "32px",
    height: "32px"
  };
  render() {
    return (
      <li>
        <div className="imgArea">
          <a href={this.props.link}>
            <img data-src={this.props.imgsrc} alt="" className="img" />
          </a>
        </div>
        <div className="postArea">
          <a href="/post1">
            <h1 className="h1">{this.props.content}</h1>
          </a>
          <div className="icon">
            <img src={short} alt="" style={this.imgstyle} />
            <img src={long} alt="" style={this.imgstyle} />
          </div>
          <audio src={this.props.song}></audio>
        </div>
      </li>
    );
  }
}
