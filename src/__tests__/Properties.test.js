import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

test('renders Properties component', () => {
    const { getByText } = render(<Properties />);

    const propertyElement = getByText(/properties page/i);

    expect(propertyElement).toBeInTheDocument();
});