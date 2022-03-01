import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          <li>
            <a href="/posts/ldr1">
              <img
                src="http://localhost:5000/api/picture/one/ldr7-1566200714659.jpg"
                alt=""
              />
              <div className="headarea">
                <h1 className="h1">Love, Death & Robots</h1>
                <h3 className="h3">
                  `Some explaination and thoughts about Original Novels of
                  Episode7 "Beyond the rift"`
                </h3>
              </div>
            </a>
          </li>
          <li>
            <a href="/posts/earl1">
              <img
                src="http://localhost:5000/api/picture/one/meandearlandthedyinggirl-1568199984174.jpg"
                alt=""
              />
              <div className="headarea">
                <h1 className="h1">ME and Earl&the dying girl</h1>
                <h3 className="h3">
                  "Best indenpdent movie this year, maybe decades."
                </h3>
              </div>
            </a>
          </li>
          <li>
            <a href="/boyhood1">
              <img
                src="http://localhost:5000/api/picture/one/boyhood-1566288713858.jpg"
                alt=""
              />
              <div className="headarea">
                <h1 className="h1">Boyhood</h1>
                <h3 className="h3">
                  "Time and Life, can these be explained? Maybe this can."
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
