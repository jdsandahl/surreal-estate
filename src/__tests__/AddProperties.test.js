import React from "react";
import { render, fireEvent, getByPlaceholderText, getByLabelText } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  test('the page renders correctly against snapshot', () => {
    const { asFragment } = render(<AddProperty />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("renders AddProperty component", () => {
    const { getByTestId, getByRole, getByLabelText } = render(<AddProperty />);

    const pageElement = getByTestId("AddProperty");

    expect(pageElement).toBeInTheDocument();
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
