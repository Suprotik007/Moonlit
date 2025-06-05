import React from 'react';
import ReviewCards from '../Components/ReviewCards';

const ReviewContainer = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-5'> Reviews</h1>

           <div>
            <ReviewCards></ReviewCards>
           </div>
        </div>
    );
};

export default ReviewContainer;