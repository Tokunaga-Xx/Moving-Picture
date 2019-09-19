import React, { Component } from "react";
import { init } from "ityped";

export default class movieData extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "I start tagging movie on douban since February 2013, now I've tagged over 700 movies and tv-shows. To watch all these, I spend about 3380 hours. Averagely speaking, I watch 2.1 movie or tv-show every week."
      ],
      typeSpeed: 50,
      startDelay: 1000,
      loop: false,
      onFinished: function() {
        if (document.getElementById("myElement") != null) {
          document.getElementById("myElement").innerHTML =
            "<p>I start tagging movie on douban since February 2013, now I've tagged over <span>700</span> movies and tv-shows. To watch all these, I spend about <span>3380</span> hours. Averagely speaking, I watch <span>2.1</span> movie or tv-show every week.</p>";
          let arrs = document
            .getElementById("myElement")
            .getElementsByTagName("span");
          for (let i = 0; i < arrs.length; i++) {
            setTimeout(() => {
              arrs[i].classList.add("numberaffect");
            }, 1000);
          }
        }

        // let values = text.match(/[0-9]+.?[0-9]+/g);
      }
      // cursorChar: "=|"
    });
  }
  render() {
    return (
      <div className="moviedata">
        <div id="myElement" />
      </div>
    );
  }
}
