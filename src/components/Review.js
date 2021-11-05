import React from 'react';
import './Review.css';

export const Review = (props) => {

    const review = props.data;

    const convertToDate = (timestamp) => {
        let date = review.publish_date.split("T")[0];
        let datePieces = date.split("-");
        return `${datePieces[1]}~${datePieces[2]}~${datePieces[0]}`;
    }

    /*const getStars = (rating) => {
        // Round to nearest half
        rating = Math.round(rating * 2) / 2;
        let output = [];

        // Append all the filled whole stars
        for (var i = rating; i >= 1; i--)
            output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

        // If there is a half a star, append it
        if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

        // Fill the empty stars
        for (let i = (5 - rating); i >= 1; i--)
            output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

        return output.join('');
    }*/

    return (
        <div className="review-body">
            <div className="author">{ review.author }</div>
            <div className="rating" id="stars">Rating: { review.rating } / 5</div>
            <div className="publish-date">{ convertToDate(review.publish_date) }</div>
            <div className="body">"{ review.body }"</div>
        </div>
    )
}

export default Review;