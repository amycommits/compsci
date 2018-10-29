import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BubbleSort extends Component {
  render() {
    function doBubbles(arr) {
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
          }
        }
      } while (swapped);
      return arr;
    }
    const { arr } = this.props;
    const sorted = doBubbles(arr);

    return (
      <div>
        {sorted.map(num => {
          return <h1 key={num}>{num}</h1>;
        })}
      </div>
    );
  }
}

BubbleSort.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.number)
};
