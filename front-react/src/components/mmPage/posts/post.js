import React, { Component } from "react";
import marked from "marked";
import markdownfile from "./post2.md";

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
          markdown: marked(text)
        });
      });
  }
  render() {
    const { markdown } = this.state;

    return (
      <div className={"postPage"}>
        <h1>PostPage?</h1>
        <article dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    );
  }
}

export default Post;
