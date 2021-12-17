import React from "react";
import Button from "./button";
import { render, screen } from "@testing-library/react";

test("displays the button as enabled when isDisabled prop is omitted", () => {
  render(<Button />);

  expect(screen.getByRole("button")).not.toBeDisabled();
});

test("displays the button as disabled when isDisabled prop is true", () => {
  render(<Button isDisabled={true} />);

  expect(screen.getByRole("button")).toBeDisabled();
});
