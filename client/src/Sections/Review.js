import React, { useState } from 'react';

export const Review = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of rating and feedback
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // You can add your logic for submitting the rating and feedback to a database or API
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] h-[305.98px] px-9 pt-9 pb-24 bg-white rounded-[48px] shadow flex-col justify-start items-start gap-6 inline-flex">
        {/* Star rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`w-6 h-6 justify-center items-center flex cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                }`}
              onClick={() => handleRatingChange(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        {/* User feedback */}
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback..."
          className="w-[312.47px] h-[100px] px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-slate-900"
        ></textarea>
        {/* Submit button */}
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};
