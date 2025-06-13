import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RoomDetailsCard from '../Components/RoomDetailsCard';

const RoomDetails = () => {
    const { _id } = useParams(); 
    const [roomDetails,setRoomDetails]=useState([])
    useEffect(()=>{
        fetch(`https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/allRooms/${_id}`)
        .then(res=>res.json())
        .then(data=>setRoomDetails([data]))
        
        
    },[_id])
    return (
        <div>
          <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-5'>Room Details</h1>

          <div>
          {
            roomDetails.map(singleRoomDetail=>(<RoomDetailsCard key={singleRoomDetail._id} singleRoomDetail={singleRoomDetail}></RoomDetailsCard>))
          }
          </div>
        </div>
    );
};

export default RoomDetails;