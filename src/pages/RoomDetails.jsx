import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RoomDetailsCard from '../Components/RoomDetailsCard';
import useAxiosSecure from '../provider/useAxiosSecure';

const RoomDetails = () => {
    const { _id } = useParams();
    const [roomDetails,setRoomDetails]=useState([])
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
<<<<<<< HEAD
        axiosSecure.get(`/allRooms/${_id}`)
        .then(res=>setRoomDetails([res.data]))
        .catch(error => console.error('Error fetching room details:', error));
    },[_id, axiosSecure])
=======
        fetch(`https://cozy-room-server.vercel.app/allRooms/${_id}`)
        .then(res=>res.json())
        .then(data=>setRoomDetails([data]))
        
        
    },[_id])
>>>>>>> 376cc610c0f4400e9b388d48eb9f01e8badde159
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