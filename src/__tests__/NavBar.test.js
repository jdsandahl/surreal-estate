import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import NavBar from "../components/NavBar";

test("renders NavBar component", () => {
  const history = createMemoryHistory();
  const { getByText, getByAltText } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );

  const logoElement = getByAltText(/logo/i);
  const titleElement = getByText(/surreal estate/i);

  expect(titleElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(getByText("View Properties")).toBeInTheDocument();
  expect(getByText("Add Property")).toBeInTheDocument();
});
