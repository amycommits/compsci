import React from "react";
import { render } from "react-testing-library";
import Factorial from "../Factorial";

it("expect factorial to contain certain numbers", () => {
  const { getByText } = render(<Factorial num={3} />);
  expect(getByText("6"));
});

it("expect factorial to contain certain numbers", () => {
  const { getByText } = render(<Factorial num={4} />);
  expect(getByText("24"));
});
