import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Slider from "./Slider/Slider";
import Data from "./movieData/movieData";
import MovieComment from "./Artical/Artical";
import Footer from "./Footer/Footer";
import Loading1 from "../intro/load";
import fetch from "../intro/fetch";

class mmPage extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    fetch().then(() => {
      this.setState(() => ({
        loading: false
      }));
    });
    // setTimeout(() => {
    //   this.setState(() => ({
    //     loading: false
    //   }));
    // }, 3000);
  }
  render() {
    return this.state.loading ? (
      <Loading1 />
    ) : (
      <div className="mmPage">
        <Nav />
        <Slider />
        <Data />
        <MovieComment />
        <Footer />
      </div>
    );
  }
}

export default mmPage;
