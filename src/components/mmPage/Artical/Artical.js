import React, { Component } from "react";
import Bound from "bounds.js";
import Singlepart from "./Single";
// import song from "../../../audios/meandearl.mp3";

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
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/ldr7-1566200714659.jpg"
            }
            head={`Some explaination and thoughts about Original Novels of Episode7 "Beyond the rift"`}
            head2={"Love Death&Robots"}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/meandearlandthedyinggirl-1568199984174.jpg"
            }
            head={`That's a film that worth saving time for! Best in 2016, even now
            is january.`}
            head2={"Me and Earl&the dying girl"}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/boyhood-1566288713858.jpg"
            }
            head={`It's so different from other movies, a masterpiece!
            `}
            head2={"Boyhood"}
          />
        </ul>
      </div>
    );
  }
}

export default Artical;
