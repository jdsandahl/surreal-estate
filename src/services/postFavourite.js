import axios from "axios";

const postFavourite = (listingId, userId) => {
  return axios
    .post("https://agile-taiga-51316.herokuapp.com/api/v1/Favourite", {
      propertyListing: listingId,
      fbUserId: userId,
    })
    .then((response) => {
      console.log(response);
      return {
        message: "Property added as favourite successfully",
        isSuccess: true,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        message: "Server Error: Unable to add favourite, please try again later",
        isSuccess: false,
      };
    });
};

export default postFavourite;
