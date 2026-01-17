
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import useAxiosSecure from '../provider/useAxiosSecure';

const AllRoomCard = ({ singleRoom }) => {
   const [reviewCount, setReviewCount] = useState();
    const axiosSecure = useAxiosSecure();
  useEffect(() => {
  axiosSecure.get(`/reviews/${singleRoom.title}`)
    .then(res => setReviewCount(res.data.total))
    .catch(error => console.error('Error fetching review count:', error));

}, [singleRoom.title,axiosSecure]);

  return (
   <Link to={`/roomDetails/${singleRoom._id}`}>
   <motion.div
  className="rounded-2xl p-2 text-left bg-base-200 m-5 border-2 border-gray-700 shadow-lg flex flex-col"
  initial={{ opacity: 0, y: 20 }}
  animate={{ rotate: 360, opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
  style={{ height: '450px', minWidth: '300px' }} // fixed height, optional min width
>
  <figure className="h-48">
    <img className="rounded-2xl w-full h-full object-cover" src={singleRoom.image} />
  </figure>

  <div className="p-5 flex flex-col justify-between h-full">
    <div>
      <h2 className="card-title text-2xl">{singleRoom.title}</h2>
      <p className="text-gray-700 mt-2">{singleRoom.short_description}</p>
    </div>

    <div className="mt-4">
      <p className="font-semibold">
        Price : <span className="badge border-2 border-gray-700 badge-outline">{singleRoom.price}</span>
      </p>
      <p className="font-semibold mt-2">
  Total Reviews : <span className="badge border-2 border-gray-700 badge-outline">{reviewCount || 0}</span>
</p>

    </div>
  </div>
</motion.div>

   </Link>
  );
};

export default AllRoomCard;
