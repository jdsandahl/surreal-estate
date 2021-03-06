import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  describe("when user NOT logged in", () => {
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
      expect(getByRole("img", { icon: /bed/i })).toBeInTheDocument();

      expect(getByTestId("bathrooms")).toHaveClass("property-card__bathrooms");
      expect(getByText(/^1$/i)).toBeInTheDocument();
      expect(getByRole("img", { icon: /bath/i })).toBeInTheDocument();

      expect(getByTestId("price")).toHaveClass("property-card__price");
      expect(getByText(/^100000$/i)).toBeInTheDocument();
      expect(getByRole("img", { icon: /pound-sign/i })).toBeInTheDocument();

      expect(getByRole("button", { name: /email/i })).toBeInTheDocument();
      expect(getByRole("img", { icon: /envelope/i })).toBeInTheDocument();
    });
  });

  describe("when user IS logged in", () => {
    test("it renders the correct elements", () => {
      const mockHandleSaveFavourite = jest.fn();
      const { getByTestId, getByRole, getByText } = render(
        <PropertyCard
          _id="mockId"
          title="Property for rent"
          type="Flat"
          city="Manchester"
          bedrooms="2"
          bathrooms="1"
          price="100000"
          email="test@test.com"
          userId="mockUserId"
          onSaveProperty={mockHandleSaveFavourite}
        />
      );

      expect(getByTestId("title")).toHaveClass("property-card__title");
      expect(getByText(/^property for rent$/i)).toBeInTheDocument();

      expect(getByTestId("type")).toHaveClass("property-card__type");
      expect(getByText(/^flat - manchester$/i)).toBeInTheDocument();

      expect(getByTestId("bedrooms")).toHaveClass("property-card__bedrooms");
      expect(getByText(/^2$/i)).toBeInTheDocument();
      expect(getByRole("img", { icon: /bed/i })).toBeInTheDocument();

      expect(getByTestId("bathrooms")).toHaveClass("property-card__bathrooms");
      expect(getByText(/^1$/i)).toBeInTheDocument();
      expect(getByRole("img", { icon: /bath/i })).toBeInTheDocument();

      expect(getByTestId("price")).toHaveClass("property-card__price");
      expect(getByText(/^100000$/i)).toBeInTheDocument();
      expect(getByRole("img", { icon: /pound-sign/i })).toBeInTheDocument();

      expect(getByRole("button", { name: /email/i })).toBeInTheDocument();
      expect(getByRole("img", { icon: /envelope/i })).toBeInTheDocument();

      expect(getByRole("button", { name: /save/i })).toBeInTheDocument();
      expect(getByRole("img", { icon: /star/i })).toBeInTheDocument();
    });

    test('it calls the onSaveProperty when user clicks the Save button', () =>{
      const mockHandleSaveFavourite = jest.fn();
      const {getByRole, getByText } = render(
        <PropertyCard
          _id="mockId"
          title="Property for rent"
          type="Flat"
          city="Manchester"
          bedrooms="2"
          bathrooms="1"
          price="100000"
          email="test@test.com"
          userId="mockUserId"
          onSaveProperty={mockHandleSaveFavourite}
        />
      );
      
      const saveFavourite = getByRole("button", { name: /save/i});
      fireEvent.click(saveFavourite);
      expect(mockHandleSaveFavourite).toHaveBeenCalledTimes(1);
    });
  });
});
