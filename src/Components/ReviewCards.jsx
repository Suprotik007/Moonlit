import React from 'react';

const ReviewCards = ({ reviews }) => {
  
  return (
    <div className="carousel w-full max-w-4xl mx-auto">
      {reviews.map((review, index) => (
        <div
          key={review._id || index}
          id={`slide${index}`}
          className="carousel-item relative w-full p-4 flex justify-center"
        >
       <div className="rounded-xl p-3 border-3 border-gray-600 border-dashed mx-auto  shadow-lg">
 
  <div className="card-body ">
    <h2 className="card-title text-3xl">
      {review.title}
      
    </h2>

    <div className="badge bg-gray-700 text-lg p-3 text-white">{review.userName}</div>
    <p className='text-gray-900 text-md'>{review.description}</p>
    <div className="card-actions justify-end">
      <div className="badge bg-gray-700 text-white badge-outline">Rating : {review.rating}/5</div>
      <div className="badge bg-gray-700 text-white badge-outline">{review.date}</div>
    </div>
  </div>
</div>

        
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${(index - 1 + reviews.length) % reviews.length}`}
              className="btn text-white bg-gray-600 btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${(index + 1) % reviews.length}`}
              className="btn text-white bg-gray-600 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;
