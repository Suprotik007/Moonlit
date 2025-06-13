

import React, { useEffect, useState } from 'react';
import AllRoomCard from '../Components/AllRoomCard';

const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const query = filter && filter !== 'All' ? `?category=${filter}` : '';
    fetch(`https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/allRooms${query}`)
      .then(res => res.json())
      .then(data => setAllRooms(data))
     
  }, [filter]);

  return (
    <div>
      <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-15'>Choose Your Cozy room</h1>

      <p className='text-xl font-semibold'>Price range:</p>
      <div className="flex flex-wrap justify-center mt-3 space-x-4 mb-5">
        {['All', 'Cozy', 'Luxury', 'Premium'].map(price => (
          <button
            key={price}
            onClick={() => setFilter(price)}
            className={`btn btn-outline ${
              filter === price
                ? 'bg-gray-800 text-white'
                : 'text-gray-700 hover:bg-gray-800 border-2 hover:text-white'
            } mb-2 sm:mb-0`}
          >
            {price}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto pt-8'>
        {allRooms.map(singleRoom => (
          <AllRoomCard key={singleRoom._id || singleRoom.id} singleRoom={singleRoom} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
