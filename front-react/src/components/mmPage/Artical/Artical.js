import React, { Component } from "react";

class Artical extends Component {
  render() {
    return (
      <div className={"Artical"}>
        <ul>
          <li>
            <div className="imgArea">
              <img
                data-src="http://localhost:5000/api/picture/one/boyhood-1566288713858.jpg"
                alt=""
                className="img"
              />
            </div>
            <div className="postArea">
              <h1 className="h1">
                A MASTERPIECE THAT ISN'T QUITE LIKE ANYTHING ELSE IN THE HISTORY
                OF CINEMA
              </h1>
              <a href="/post1">here</a>
            </div>
          </li>
          <li>
            <div className="imgArea">
              <img
                data-src="http://localhost:5000/api/picture/one/hibana-1566291844316.jpg"
                alt=""
                className="img"
              />
            </div>
            <div className="postArea">
              <h1 className="h1">
                A MASTERPIECE THAT ISN'T QUITE LIKE ANYTHING ELSE IN THE HISTORY
                OF CINEMA
              </h1>
              <a href="/post1">here</a>
            </div>
          </li>
          <li>
            <div className="imgArea">
              <img
                data-src="http://localhost:5000/api/picture/one/terracehousealoha-1565784144585.jpg"
                alt=""
                className="img"
              />
            </div>
            <div className="postArea">
              <h1 className="h1">
                A MASTERPIECE THAT ISN'T QUITE LIKE ANYTHING ELSE IN THE HISTORY
                OF CINEMA
              </h1>
              <a href="/post1">here</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Artical;
