import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PropertyForm from "../components/PropertyForm";

describe("PropertyForm", () => {
  const mockHandleFieldChange = jest.fn();
  const mockHandleAddProperty = jest.fn();
  const mockData = {
    title: "",
    city: "Manchester",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 1,
    price: 100000,
    email: "test@test.com",
  };

  test("the page renders correctly against snapshot", () => {
    const { asFragment } = render(
      <PropertyForm
        handleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
        title={mockData.title}
        city={mockData.city}
        type={mockData.type}
        bedrooms={mockData.bedrooms}
        bathrooms={mockData.bathrooms}
        price={mockData.price}
        email={mockData.email}
      />
    );
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("renders AddProperty component", () => {
    const { getByRole, getByLabelText } = render(
      <PropertyForm
        handleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
        title={mockData.title}
        city={mockData.city}
        type={mockData.type}
        bedrooms={mockData.bedrooms}
        bathrooms={mockData.bathrooms}
        price={mockData.price}
        email={mockData.email}
      />
    );

    expect(getByRole("button")).toHaveTextContent(/add/i);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/city/i)).toBeInTheDocument();
    expect(getByLabelText(/type/i)).toBeInTheDocument();
    expect(getByLabelText(/bedrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/bathrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/price/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("submits the form data and calls the handle submint function", () => {
    const { getByTestId } = render(
      <PropertyForm
        handleAddProperty={mockHandleAddProperty}
        handleFieldChange={mockHandleFieldChange}
        title={mockData.title}
        city={mockData.city}
        type={mockData.type}
        bedrooms={mockData.bedrooms}
        bathrooms={mockData.bathrooms}
        price={mockData.price}
        email={mockData.email}
      />
    );

    const form = getByTestId('property-form');
    fireEvent.submit(form);
    expect(mockHandleAddProperty).toHaveBeenCalled();

  });
});
