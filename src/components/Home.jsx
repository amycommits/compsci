import React, { Component } from "react";
import BasicRecursion from "./recursion/BasicRecursion";
import Fibonacci from "./recursion/Fibonacci";
import Factorial from "./recursion/Factorial";
import BubbleSort from "./sorting/BubbleSort";
import InsertionSort from "./sorting/InsertionSort";
import MergeSort from "./sorting/MergeSort";
import QuickSort from "./sorting/QuickSort";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> Basic Recursion </h1>
        {<BasicRecursion />}
        <h1> Fibonacci </h1>
        {<Fibonacci />}
        <h1> Factorial </h1>
        {<Factorial num={3} />}
        <h1> Bubble Sort </h1>
        {<BubbleSort arr={[30, 14, 5, 12, 2]} />}
        <h1> Insertion </h1>
        {<InsertionSort arr={[30, 14, 5, 12, 2]} />}
        <h1> Merge Sort </h1>
        {<MergeSort arr={[30, 14, 5, 12, 2]} />}
        <h1> Quick Sort </h1>
        {<QuickSort arr={[30, 14, 5, 12, 13]} />}
      </div>
    );
  }
}
