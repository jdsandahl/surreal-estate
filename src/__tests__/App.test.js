import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import App from "../components/App";

test("full app rendering & navigating correctly", () => {
  const history = createMemoryHistory();
  const { container, getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const titleElement = getByText(/surreal estate/i);

  expect(titleElement).toBeInTheDocument();
  expect(container.innerHTML).toMatch('Properties Page');

  fireEvent.click(getByText(/add property/i));
  expect(getByTestId('AddProperty')).toBeInTheDocument();  
});
