import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  test("the component renders correctly against snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <SideBar />
      </Router>
    );
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });
});
