import React from "react";
import { render, waitForElementToBeRemoved, act } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  test("the page renders correctly against snapshot", () => {
    const { asFragment, getByText, getByRole } = render(<Properties />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

});
