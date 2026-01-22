import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const AllRoomCard = ({ singleRoom }) => {
   const [reviewCount, setReviewCount] = useState();

  const BACKEND_URL = 'https://cozy-room-server.vercel.app';

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/reviews/${singleRoom.title}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviewCount(data.total);
      } catch (error) {
        console.error('Error fetching review count:', error);
      }
    };

    fetchReviewCount();
}, [singleRoom.title, BACKEND_URL]);

  return (
   <Link to={`/roomDetails/${singleRoom._id}`}>
    <motion.div
      className="rounded-2xl  lg:h-[490px] text-left bg-base-200 m-5 border-2 border-gray-700 shadow-lg"
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
        <p className="text-gray-700 mt-2">{singleRoom.short_description}</p>
        <p className="font-semibold mt-2">
          Price : <span className="badge border-2 border-gray-700 badge-outline">{singleRoom.price}</span>
        </p>
        <p className="font-semibold mt-2">
          Total Reviews : <span className="badge border-2 border-gray-700 badge-outline">{reviewCount || 0}</span>
        </p>
      </div>
    </motion.div>
   </Link>
  );
};

export default AllRoomCard;
