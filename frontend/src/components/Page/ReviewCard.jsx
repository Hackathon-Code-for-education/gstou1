import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
      <div className="font-bold text-xl mb-2">{review.author}</div>
      <p className="text-gray-700 text-base">{review.content}</p>
      <div className="flex mt-4">
        {Array.from({ length: 5 }, (_, i) => (
          i < review.rating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-gray-300" />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
