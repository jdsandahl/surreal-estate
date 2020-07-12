import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  test("that it renders correct against snapshot", () => {
    const { asFragment } = render(<SearchForm 
        handleSearch={jest.fn()}
        handleInputChange={jest.fn()}
        query=""
    />)

    expect(asFragment()).toMatchSnapshot();
  });
});
