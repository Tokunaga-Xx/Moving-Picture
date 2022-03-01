import React, { Component } from "react";
import marked from "marked";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class Post extends Component {
  constructor(props) {
    super(props);
    let file = this.props.location.query.file;

    this.state = {
      file: `.${file}.md`
    };
  }

  componentWillMount() {
    // marked相关配置
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }
  componentDidMount() {
    const markdownfile = require(`${this.state.file}`);

    fetch(markdownfile)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          content: text
        });
      });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className={"postPage"}>
          <button>
            <a href="/postlist">Back</a>
          </button>
          <div
            id="mdContent"
            dangerouslySetInnerHTML={{
              __html: this.state.content ? marked(this.state.content) : null
            }}
          ></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Post;
