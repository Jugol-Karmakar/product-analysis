import React from "react";

const CustomerReview = (props) => {
  const { name, image, review, rating, email } = props.review;
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <img className="rounded-full w-48 h-48 mx-auto" src={image} alt="" />
      <div className="p-2">
        <h2 className="text-3xl font-semibold	my-3">{name}</h2>
        <p className="text-base py-3">Review{review}</p>
        <h5 className="text-lg font-semibold">Rating : {rating}</h5>
        <p className="text-base font-semibold">Email : {email}</p>
      </div>
    </div>
  );
};

export default CustomerReview;
