import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import App from "../components/App";

test("renders correctly", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const linkElement = getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
