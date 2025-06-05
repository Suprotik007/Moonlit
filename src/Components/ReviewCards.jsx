import React from 'react';

const ReviewCards = () => {
    return (
        <div>
            <div className="carousel carousel-center border-2 border-gray-700 rounded-box max-w-md space-x-4 p-2">
  <div className="carousel-item">
<div className=" bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">hello</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
  </div>
 
</div>
        </div>
    );
};

export default ReviewCards;