import React, { Component } from "react";
import Mymovie from "./introMymovie";
import Picbed from "./introPicbed";
import Anima from "./Anima";
import Loading from "./load";
import fetch from "./fetch";

class intro extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    fetch().then(() => {
      this.setState(() => ({
        loading: false
      }));
    });
  }
  render() {
    return this.state.loading ? (
      <Loading />
    ) : (
      <div className={"introContainer"}>
        <div className={"mymovieContainer"}>
          <Mymovie />
        </div>
        <div className={"picbedContainer"}>
          <Picbed />
        </div>
        <div className={"animationContainer"}>
          <Anima />
        </div>
      </div>
    );
  }
}

export default intro;
