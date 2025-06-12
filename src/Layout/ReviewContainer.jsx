

import React, { useEffect, useState } from 'react';
import ReviewCards from '../Components/ReviewCards';

const ReviewContainer = () => {
  const [showReview, setShowReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/clientReviews')
      .then(res => res.json())
      .then(data => {
        setShowReview(data || []);
        // console.log(data);
      })
      
  }, []);

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-6/12 mx-auto mb-5'>
        What Our Clients Say
      </h1>

      <ReviewCards reviews={showReview} />
    </div>
  );
};

export default ReviewContainer;
