import React, { Component } from "react";
import PropTypes from "prop-types";

export default class QuickSort extends Component {
  render() {
    const quickSort = arr => {
      if (arr.length <= 1) return arr;

      const pivotNum = arr[arr.length - 1];
      let leftSide = [];
      let rightSide = [];

      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] <= pivotNum ? leftSide.push(arr[i]) : rightSide.push(arr[i]);
      }
      return [...quickSort(leftSide), pivotNum, ...quickSort(rightSide)];
    };
    const { arr } = this.props;
    return (
      <ul>
        {quickSort(arr).map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    );
  }
}

QuickSort.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.number)
};
