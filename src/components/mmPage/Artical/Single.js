import React, { Component } from "react";
import long from "../../../images/long.svg";
import { Link } from "react-router-dom";
import short from "../../../images/short1.svg";
import Line from "./Line";

export default class Single extends Component {
  render() {
    return (
      <li>
        <Line />
        <div className="imgArea">
          <Link
            to={{ pathname: "/posts", query: { file: `${this.props.link}` } }}
          >
            <img
              data-src={this.props.imgsrc}
              alt={this.props.head2}
              title={this.props.head2}
              className="img"
            />
          </Link>
        </div>
        <div className="postArea">
          <Link
            to={{ pathname: "/posts", query: { file: `${this.props.link}` } }}
          >
            {" "}
            <h1 className="head">{this.props.head}</h1>
            <h2 className="head2">
              <span style={{ color: "crimson" }}>---</span>
              {this.props.head2}
            </h2>
          </Link>
          <div className="icon">
            <img src={short} alt="" title="see my short comment about it" />
            <img src={long} alt="" title="see posts about it" />
          </div>
          <audio src={this.props.song}></audio>
        </div>
      </li>
    );
  }
}
