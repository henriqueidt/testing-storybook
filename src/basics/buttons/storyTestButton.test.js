import React from "react";
import { render, screen } from "@testing-library/react";
import { Default, Disabled } from "./buttons.stories.js";

test("displays the button as enabled when isDisabled prop is omitted", () => {
  render(<Default {...Default.args} />);

  expect(screen.getByRole("button")).not.toBeDisabled();
});

test("displays the button as disabled when isDisabled prop is true", () => {
  render(<Disabled {...Disabled.args} />);

  expect(screen.getByRole("button")).toBeDisabled();
});
