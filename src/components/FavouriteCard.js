import React from 'react';

const FavouriteCard = ({propertyListing: {title}, userId}) => {
    return (
        <div className="favourite-card">
            <div className="favourite-card__detail">
                {title}
            </div>
        </div>
    );
};

export default FavouriteCard;