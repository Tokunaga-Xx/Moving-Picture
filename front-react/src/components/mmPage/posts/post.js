import React, { Component } from "react";
import Markdown from "react-markdown";
import markdownfile from "./post1.md";

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
    const name = "<Love, Death & Robots>";
    const head = "第七集《天鹰座裂隙之外》原版小说的设定以及一些可能的解读";
    return (
      <div className={"postPage"}>
        <h1>{name}</h1>
        <h3>{head}</h3>
        <Markdown
          source={markdown}
          className="markdown"
          head="第七集《天鹰座裂隙之外》原版小说的设定以及一些可能的解读"
          name="<Love, Death & Robots>"
        />
      </div>
    );
  }
}

export default Post;
