import React from "react";
import { render } from "react-testing-library";
import Insertion from "../InsertionSort";

it("returns an insertion sort", () => {
  const arr = [15, 2, 7, 5, 21, 4, 1];
  const { getByText } = render(<Insertion arr={arr} />);
  expect(getByText("1"));
});
