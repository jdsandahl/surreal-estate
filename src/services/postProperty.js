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
        })
        .catch((error) => {
            console.log(error);
        });
}

export default postProperty;