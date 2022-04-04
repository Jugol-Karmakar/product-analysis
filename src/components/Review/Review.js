import React, { useEffect, useState } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";

const Review = (props) => {
  const { ishome } = props;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-green-50">
      <h2 className="text-center text-3xl font-semibold py-3">
        Customer Review
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mx-20 py-10 ">
        {reviews.map((review) => (
          <CustomerReview key={review.id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
