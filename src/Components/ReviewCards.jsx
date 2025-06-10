// import React, { useEffect, useState } from 'react';

const ReviewCards = ({bookings}) => {
  // const[showReview,setShowReview]=useState()
  // useEffect(()=>{
  //   fetch(`http://localhost:3000/reviews/${bookings.id}`)
  //   .then(res=>res.json())
  //   .then(data=>setShowReview(data)
  //   )
  // },[bookings.id])
    return (
        <div>
            <div className="carousel carousel-center border-2 border-gray-700 rounded-box max-w-md space-x-4 p-2">
  <div className="carousel-item">
<div className=" bg-base-300 w-96 shadow-sm">
 <h1></h1>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
  </div>
 
</div>
        </div>
    );
};

export default ReviewCards;