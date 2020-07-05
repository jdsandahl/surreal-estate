import axios from 'axios';

const postProperty = ({ title, city, type, bedrooms, bathrooms, price, email }) => {
    return axios
        .post("http://localhost:4000/api/v1/PropertyListing", {
            title,
            city,
            type,
            bedrooms,
            bathrooms,
            price,
            email
        })
        .then((response) => {
            console.log(response);
            return { 
                message: "Property added successfully",
                isSuccess: true
            };
        })
        .catch((error) => {
            console.log(error);
            return { 
                message: "Server Error: Property not added, please try again later",
                isSuccess: false
            };
        });
}

export default postProperty;