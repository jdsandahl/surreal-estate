import React from "react";
import { render } from "@testing-library/react";
import PropertyListings from "../components/PropertyListings";

describe("PropertyListings", () => {
  test("the component renders correctly against snapshot", () => {
    const { asFragment } = render(<PropertyListings />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
