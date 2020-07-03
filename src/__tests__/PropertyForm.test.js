import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PropertyForm from "../components/PropertyForm";

describe("PropertyForm", () => {
  test("the page renders correctly against snapshot", () => {
    const { asFragment } = render(<PropertyForm />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("renders AddProperty component", () => {
    const { getByRole, getByLabelText } = render(<PropertyForm />);

    expect(getByRole("button")).toHaveTextContent(/add/i);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/city/i)).toBeInTheDocument();
    expect(getByLabelText(/type/i)).toBeInTheDocument();
    expect(getByLabelText(/bedrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/bathrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/price/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
  });
});
