import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Properties from "../components/Properties";

describe("Properties", () => {
  test("the page renders correctly against snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <Properties />
      </Router>
    );
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });
});
