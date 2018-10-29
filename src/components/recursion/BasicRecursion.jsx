import React, { Component } from "react";

export default class BasicRecursion extends Component {
  render() {
    let writing = (msg = "-------") => document.write(`<li>${msg}</li>`);
    function firstFunction(max, current) {
      if (current > max) return;
      writing(current);
      firstFunction(max, current + 1);
    }
    return <ul id="first-recursion">{firstFunction(5, 1)}</ul>;
  }
}
