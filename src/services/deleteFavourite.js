import axios from 'axios';

const deleteFavourite = (favouriteId) => {
    return axios
    .delete(`https://agile-taiga-51316.herokuapp.com/api/v1/Favourite/${favouriteId}`)
    .then((response) => {
      console.log(response);
      return {
        message: "Favourite removed successfully",
        isSuccess: true,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        message: "Server Error: Unable to remove favourite, please try again later",
        isSuccess: false,
      };
    });
};

export default deleteFavourite;