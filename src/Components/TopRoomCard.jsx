
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import PrivateRoute from '../provider/PrivateRoute'
const TopRoomCard = ({ singleRoom }) => {
   const [reviewCount, setReviewCount] = useState();
    useEffect(() => {
    fetch(`https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/reviews/${singleRoom.title}`)
      .then(res => res.json())
      // .then(data => console.log(data.total))
      .then(data => setReviewCount(data.total))
  
  }, [singleRoom.title]);
  
  return (
    <motion.div
      className="rounded-2xl text-left bg-base-00 m-5 border-2 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{rotate:360,  opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    >
      <figure>
        <img className="rounded-2xl p-1 " src={singleRoom.image} />
      </figure>
      <div className="p-5">
        <h2 className="card-title text-2xl">{singleRoom.title}</h2> 

        <p className="text-gray-700">{singleRoom.short_description}</p> <br />
        <p className="font-semibold">
          Price : <span className="badge bg-gray-600 border-2 text-white">{singleRoom.price}</span>
        </p> <br />
        <p className="font-semibold">
          Total Reviews :<span className="badge bg-gray-600 border-2 text-white">{reviewCount}</span>
        </p>
          
        <div className="card-actions justify-end">
          
            <Link to={`/roomDetails/${singleRoom._id}`}>
            <button className="btn btn-outline rounded-4xl hover:bg-gray-600 hover:text-white">
              Book Now
            </button>
          </Link>
         
        </div>
      </div>
    </motion.div>
  );
};

export default TopRoomCard;
