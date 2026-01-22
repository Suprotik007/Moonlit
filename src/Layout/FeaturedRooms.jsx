import React, { useEffect, useState } from 'react';
import TopRoomCard from '../Components/TopRoomCard';

const FeaturedRooms = () => {
    const [topRooms,setTopRooms]=useState([])

   const BACKEND_URL = 'https://cozy-room-server.vercel.app';

    useEffect(()=>{
        const fetchTopRooms = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/topRooms`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTopRooms(data);
            } catch (error) {
                console.error('Error fetching top rooms:', error);
            }
        };

        fetchTopRooms();
    }, [BACKEND_URL])
    return (
        <div className='w-11/12 mx-auto gap-8'> 
        <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-5'>Featured Rooms</h1>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto pt-8'>
            {
                topRooms.map(singleRoom=>(
                 <TopRoomCard key={singleRoom.id} singleRoom={singleRoom}></TopRoomCard>))

            }
        </div>
        </div>
    );
};

export default FeaturedRooms;