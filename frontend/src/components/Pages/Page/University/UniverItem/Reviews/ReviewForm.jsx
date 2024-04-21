import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import axios from 'axios';

const ReviewForm = () => {
  
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const handleReviewChange = (e) => {
    setContent(e.target.value);
  }

  const handleRatingChange = (value) => {
    setRating(value);
  }
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formReview = {

      text: content,
      rating: rating
    }; 

    const newReview = {
      text: content,
      rating: rating
    };

    setReviews([...reviews, newReview]);

    setContent('');
    setRating(0);
    setHoverRating(0);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.authToken}`
        },
        body: JSON.stringify(formReview)
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Failed to send form data:', error);
      console.log(formReview)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm rounded overflow-hidden p-4 m-4 bg-white shadow-lg">
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Отзыв
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          placeholder="Напишите ваш отзыв здесь"
          value={content}
          onChange={handleReviewChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Рейтинг
        </label>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              onMouseEnter={() => setHoverRating(i + 1)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleRatingChange(i + 1)}
              className="cursor-pointer"
            >
              {i < (hoverRating || rating) ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-gray-300" />}
            </span>
          ))}
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Опубликовать
      </button>
    </form>
  );
};

export default ReviewForm;
