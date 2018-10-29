import React from "react";
import { render } from "react-testing-library";
import BubbleSort from "../BubbleSort";

it("expect factorial to contain certain numbers", () => {
  const arr = [15, 2, 7, 5, 21, 4, 1];
  const { getByText } = render(<BubbleSort arr={arr} />);
  expect(getByText("1"));
});
