import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders NavBar component", () => {
  const { getByText, getByAltText } = render(<NavBar />);

  const logoElement = getByAltText(/logo/i);
  const titleElement = getByText(/surreal estate/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(getByText("View Property")).toBeInTheDocument();
  expect(getByText("Add Property")).toBeInTheDocument();
});