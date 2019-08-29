import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Slider from "./Slider/Slider";
import Data from "./movieData/movieData";
import MovieComment from "./Artical/Artical";
import Footer from "./Footer/Footer";

class mmPage extends Component {
  render() {
    return (
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
