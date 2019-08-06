import React, {Component} from 'react';
import marked from 'marked';
const readmePath = require("./post1.md");


class Post1 extends Component {
    constructor() {
     super();
     this.state = { markdown: '' };
    }
    componentDidMount() {
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }
    render() {
        const { markdown } = this.state;

        return (
            <div className={'post1'}>
                <article dangerouslySetInnerHTML={{__html: markdown}}></article>
            </div>
        );
    }
}


export default Post1;