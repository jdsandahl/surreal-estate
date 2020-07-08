import React from "react";
import { render } from "@testing-library/react";
import PropertyListings from "../components/PropertyListings";

describe("PropertyListings", () => {
  const mockListings = [
    {
      _id: "5f061c7df78b346249beb5f5",
      title: "Second New Property",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 10000,
      city: "Leeds",
      email: "test@test.com",
    },
  ];

  test("the component renders correctly against snapshot", () => {
    const { asFragment } = render(<PropertyListings listings={mockListings}/>);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
