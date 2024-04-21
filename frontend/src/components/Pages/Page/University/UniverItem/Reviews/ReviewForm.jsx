import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('ИМЯ СТУДЕНТА');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author: name, content, rating });
    setName('');
    setContent('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm rounded overflow-hidden p-4 m-4 bg-white shadow-lg">
      <div className="mb-4">
        <div className="block text-gray-700 text-sm font-bold mb-2">
          Ваше имя: {name}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Отзыв
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          placeholder="Напишите ваш отзыв здесь"
          value={content}
          onChange={e => setContent(e.target.value)}
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
              onClick={() => setRating(i + 1)}
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
