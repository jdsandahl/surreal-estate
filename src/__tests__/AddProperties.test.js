import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

test('renders AddProperty component', () => {
    const { getByText } = render(<AddProperty />);

    const pageElement = getByText(/add property page/i);

    expect(pageElement).toBeInTheDocument();
});