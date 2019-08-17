import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Bound from "bounds.js";

ReactDOM.render(<App />, document.getElementById("root"));

// lazy loading images
const boundary = Bound({
  margins: { bottom: -100 }
});

const boundary2 = Bound({
  margins: { bottom: -200 }
});

let images = document.querySelectorAll("img");
let posts = document.querySelectorAll("p");

const onImageEnter = image => {
  return () => {
    image.src = image.dataset.src;
    boundary.unWatch(image);
    console.log("picshowup");
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

serviceWorker.unregister();
