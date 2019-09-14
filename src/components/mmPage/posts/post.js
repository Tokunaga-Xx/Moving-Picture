import React, { Component } from "react";
import Markdown from "react-markdown";
import markdownfile from "./earl1.md";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    fetch(markdownfile)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        });
      });
  }
  render() {
    const { markdown } = this.state;

    return (
      <div>
        <Nav />
        <div className={"postPage"}>
          <button>
            <a href="/postlist">Back</a>
          </button>
          <Markdown source={markdown} className="markdown" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Post;
