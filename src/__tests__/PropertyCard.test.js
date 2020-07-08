import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  test("it renders correctly against snapshot", () => {
    const { asFragment } = render(
      <PropertyCard
        title="Property for rent"
        type="Flat"
        city="Manchester"
        bedrooms="2"
        bathrooms="2"
        price="100000"
        email="test@test.com"
      />
    );
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });

  test("it renders the correct elements", () => {
    const { getByTestId, getByRole, getByText } = render(
      <PropertyCard
        title="Property for rent"
        type="Flat"
        city="Manchester"
        bedrooms="2"
        bathrooms="1"
        price="100000"
        email="test@test.com"
      />
    );

    expect(getByTestId("title")).toHaveClass("property-card__title");
    expect(getByText(/^property for rent$/i)).toBeInTheDocument();

    expect(getByTestId("type")).toHaveClass("property-card__type");
    expect(getByText(/^flat - manchester$/i)).toBeInTheDocument();

    expect(getByTestId("bedrooms")).toHaveClass("property-card__bedrooms");
    expect(getByText(/^2$/i)).toBeInTheDocument();

    expect(getByTestId("bathrooms")).toHaveClass("property-card__bathrooms");
    expect(getByText(/^1$/i)).toBeInTheDocument();

    expect(getByTestId("price")).toHaveClass("property-card__price");
    expect(getByText(/^100000$/i)).toBeInTheDocument();

    expect(getByRole("button", { name: /email/i })).toBeInTheDocument();
  });
});
