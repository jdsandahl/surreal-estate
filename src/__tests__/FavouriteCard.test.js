import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavouriteCard from "../components/FavouriteCard";

describe("FavouriteCard", () => {
  let mockKey;
  let mockFavourite;
  let mockOnRemoveFavourite;

  beforeEach(() => {
    mockKey = "11a2s3d4f5g";
    mockFavourite = {
      title: "test property",
      email: "test@test.com",
    };
    mockOnRemoveFavourite = jest.fn();
  });

  test("it renders correctly against snapshot", () => {
    const { asFragment } = render(
      <FavouriteCard
        key={mockKey}
        propertyListing={mockFavourite}
        onRemoveFavourite={mockOnRemoveFavourite}
      />
    );
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("it calls the onRemoveFavourites method when Remove is clicked", () => {
    const { getByRole } = render(
      <FavouriteCard
        key={mockKey}
        propertyListing={mockFavourite}
        onRemoveFavourite={mockOnRemoveFavourite}
      />
    );

    const removeFavourite = getByRole("button", { name: /remove/i });
    fireEvent.click(removeFavourite);
    expect(mockOnRemoveFavourite).toHaveBeenCalledTimes(1);
  });
});
