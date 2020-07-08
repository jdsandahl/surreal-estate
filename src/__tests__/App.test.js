import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../components/App";

describe("App", () => {
  test('the page renders correctly against snapshot', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });


  test("full app rendering & navigating correctly", () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const titleElement = getByText(/surreal estate/i);

    expect(titleElement).toBeInTheDocument();

    fireEvent.click(getByText(/add property/i));
    expect(getByTestId("AddProperty")).toBeInTheDocument();
  });
});
