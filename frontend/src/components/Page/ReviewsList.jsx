import React from 'react';
import ReviewCard from './ReviewCard';


const ReviewsList = ({reviews}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {reviews.map(review => (
        <ReviewCard key={review.id} review={reviews} />
      ))}
    </div>
  );
};

export default ReviewsList;
