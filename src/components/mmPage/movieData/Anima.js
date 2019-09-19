import React, { Component } from "react";

import Lottie from "react-lottie";
import animationData from "./rolling.json";

export default class LottieControl2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const style = {
      animation: "runningFrames2 5s infinite 1s",
      opacity: 0,
      position: "relative",
      bottom: 0,
      background: "#000",
      overflow: "hidden"
    };

    return (
      <div className="animation-wrapper">
        <Lottie
          options={defaultOptions}
          height={65}
          width={75}
          style={style}
          className="anima2"
        />
      </div>
    );
  }
}
