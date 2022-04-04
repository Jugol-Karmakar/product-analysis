import React, { useEffect, useState } from "react";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Review = (props) => {
  const { isHome } = props;
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
        {isHome
          ? reviews
              .slice(0, 3)
              .map((review) => (
                <ReviewDetail review={review} key={review.id}></ReviewDetail>
              ))
          : reviews.map((review) => (
              <ReviewDetail review={review} key={review.id}></ReviewDetail>
            ))}
      </div>
    </div>
  );
};

export default Review;
