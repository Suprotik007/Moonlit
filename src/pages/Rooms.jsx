import React, { useEffect, useState } from 'react';
import AllRoomCard from '../Components/AllRoomCard';

const Rooms = () => {
    const [allRooms,setAllRooms]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/allRooms')
        .then(res=>res.json())
        .then(data=>{setAllRooms(data);
        })
    })
    return (
        <div>
        
             <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-15'>Choose Your Cozy room</h1>

             <div  className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto pt-8'>
{
    allRooms.map(singleRoom=>(<AllRoomCard key={singleRoom.id} singleRoom={singleRoom}></AllRoomCard>))
}
             </div>
        </div>
    );
};

export default Rooms;