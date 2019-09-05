import React, { Component } from "react";
import Bound from "bounds.js";

class Artical extends Component {
  componentDidMount() {
    // lazy loading images
    const boundary = Bound({
      margins: { bottom: -50 }
    });

    const boundary2 = Bound({
      margins: { bottom: -50 }
    });

    let images = document.querySelectorAll(".img");
    let posts = document.querySelectorAll(".h1");

    const onImageEnter = image => {
      return () => {
        image.src = image.dataset.src;
        boundary.unWatch(image);
      };
    };
    const onPEnter = post => {
      return () => {
        post.classList.toggle("showup");
        boundary2.unWatch(post);
      };
    };

    posts.forEach(post => {
      boundary2.watch(post, onPEnter(post));
    });

    images.forEach(img => {
      boundary.watch(img, onImageEnter(img));
    });
  }
  render() {
    return (
      <div className={"Artical"}>
        <ul>
          <li>
            <div className="imgArea">
              <a href="/post1">
                <img
                  data-src="http://localhost:5000/api/picture/one/boyhood-1566288713858.jpg"
                  alt=""
                  className="img"
                />
              </a>
            </div>
            <div className="postArea">
              <a href="/post1">
                <h1 className="h1">
                  It's so different from other movies, a masterpiece!
                </h1>
              </a>
            </div>
          </li>
          <li>
            <div className="imgArea">
              <a href="/post1">
                <img
                  data-src="http://localhost:5000/api/picture/one/hibana-1566291844316.jpg"
                  alt=""
                  className="img"
                />
              </a>
            </div>
            <div className="postArea">
              <a href="/post1">
                <h1 className="h1">
                  So warm, so heartbreaking, so beautiful, just breathtaking!
                </h1>
              </a>
            </div>
          </li>
          <li>
            <div className="imgArea">
              <a href="/post1">
                <img
                  data-src="http://localhost:5000/api/picture/one/terracehousealoha-1565784144585.jpg"
                  alt=""
                  className="img"
                />
              </a>
            </div>
            <div className="postArea">
              <a href="/post1">
                <h1 className="h1">
                  It shows the real life & emotion about young people in japan.
                </h1>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Artical;
