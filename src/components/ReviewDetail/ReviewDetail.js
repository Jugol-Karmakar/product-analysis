import React from "react";

const ReviewDetail = (props) => {
  const { name, image, review, rating, email } = props.review;
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="p-2 text-center">
        <p className="text-base py-3">Review{review}</p>
        <h5 className="text-lg font-semibold">Rating : {rating}</h5>
        <div className="w-20 h-20 overflow-hidden rounded-full my-3 mx-auto">
          <img className="object-cover w-full" src={image} alt="" />
        </div>

        <h2 className="text-2xl font-bold	my-3 text-green-500">{name}</h2>
        <p className="text-base font-semibold text-gray-500">Email : {email}</p>
      </div>
    </div>
  );
};

export default ReviewDetail;
