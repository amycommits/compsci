import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Factorial extends Component {
  render() {
    function doFactorial(num) {
      if (num < 2) return 1;

      return num * doFactorial(num - 1);
      //   else console.log(num);
      //   num = num + doFactorial(num - 1);
      // }
      // return <div>{doFactorial(num)}</div>;
    }

    const { num } = this.props;
    const factorial = doFactorial(num);
    return <h1>{factorial}</h1>;
  }
}

Factorial.propTypes = {
  num: PropTypes.number
};
