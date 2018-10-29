import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InsertionSort extends Component {
  render() {
    function doInsertion(arr) {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
          if (arr[i] < arr[j]) {
            const spliced = arr.splice(i, 1);
            // at position j, not taking anything out, value of the first position of spliced
            arr.splice(j, 0, spliced[0]);
          }
        }
      }
      return arr;
    }
    const { arr } = this.props;
    return (
      <ul>
        {doInsertion(arr).map(num => (
          <li key={num}>{num}</li>
        ))}{" "}
      </ul>
    );
  }
}

InsertionSort.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.number)
};
