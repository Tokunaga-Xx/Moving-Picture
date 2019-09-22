import React, { Component } from "react";
import Swal from "sweetalert2";

class Footer extends Component {
  componentDidMount() {
    let content = document.getElementsByClassName("rate-content")[0];
    content.addEventListener("click", e => {
      if (e.target.nodeName === "INPUT") {
        Swal.fire({
          type: "success",
          title: "Thanks!",
          text: "Your opinion is being delieved !"
        });
      }
    });
  }
  render() {
    return (
      <footer className={"footer"}>
        <div className="rateArea">
          <p>Give your score here =></p>
          <div className="rate-content">
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
          </div>
        </div>

        <h3>Designed&coded by TokunagaX - 2019</h3>
      </footer>
    );
  }
}

export default Footer;
