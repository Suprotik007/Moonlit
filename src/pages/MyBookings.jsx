import React, { useContext, useEffect, useState } from 'react';
import MyBookingsList from '../Components/MyBookingsList';
import { AuthContext } from '../provider/AuthProvider';


const MyBookings = () => {
    const {user} =useContext(AuthContext)
//     //  const [loading, setLoading] = useState(true);
    const [myBookings,setMyBookings]=useState([])
        useEffect(() => {
  if (user && user.email) { 
     
    fetch(`http://localhost:3000/bookedRooms?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyBookings(data))
      .catch(err => console.error(err));
  }
}, [user]);

    return (
        <div>
             <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-5'>Booking History</h1>

             <div>
               {
                myBookings.map(bookings=>(<MyBookingsList key={bookings.roomId} bookings={bookings}></MyBookingsList>))
               }
             </div>
        </div>
    );
};

export default MyBookings;