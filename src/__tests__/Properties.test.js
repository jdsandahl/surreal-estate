import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  test("the page renders correctly against snapshot", () => {
    const { asFragment } = render(<Properties />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("renders Properties component", () => {
    const { getByText } = render(<Properties />);

    const propertyElement = getByText(/properties page/i);

    expect(propertyElement).toBeInTheDocument();
  });
});
