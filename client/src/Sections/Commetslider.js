import React from 'react';
import Slider from 'react-slick';

// Sample comment data with star ratings
const data = [
  {
    id: 1,
    author: "John Doe",
    comment: "This is a great product!",
    rating: 4, // Rating out of 5
  },
  {
    id: 2,
    author: "Jane Smith",
    comment: "I love this website!",
    rating: 5, // Rating out of 5
  },
  // Add more comments as needed
];

const Commetslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Function to render star ratings
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-[100px]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
      <Slider {...settings} className="mb-8">
        {data.map(comment => (
          <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-gray-800 font-semibold">{comment.author}</div>
              <div className="flex ml-4">{renderStarRating(comment.rating)}</div>
            </div>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Commetslider;
