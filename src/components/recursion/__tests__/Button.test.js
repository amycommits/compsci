import React from "react";
import { render } from "react-testing-library";
import Button from "../Button";

it("renders Button component", () => {
  const btnText = "View as a PDF";
  const title = "Clicking button opens a window with more content";
  const { getByText, getByTitle } = render(
    <Button title={title} label={btnText} />
  );

  expect(getByText(btnText));
  expect(getByTitle(title));
});
