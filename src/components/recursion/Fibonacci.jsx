import React, { Component } from "react";

export default class Fibonacci extends Component {
  render() {
    function fib(n) {
      if (n <= 2) {
        return 1;
      } else {
        return fib(n - 1) + fib(n - 2);
      }
    }
    function callFib() {
      let fibbing = [];
      for (var i = 1; i <= 20; i++) {
        fibbing.push(<li key={i}>{fib(i)}</li>);
      }
      return fibbing;
    }
    return <ul>{callFib()}</ul>;
  }
}
