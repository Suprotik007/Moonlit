import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyBookingsList = ({bookings}) => {
    const {user} =useContext(AuthContext)
    
    return (
        <div className='mb-5'>
          <ul className="list border-2 border-gray-800  rounded-box shadow-lg">
  

  
  <li className=" list-row ">
    <div><img className="w-50 rounded-box" src={bookings.Image}/></div>
    <div>
      <div className='card-title text-gray-800 text-2xl'>{bookings.Title}</div>
      <br />
      <div className="text-sm card-title uppercase font-semibold text-gray-600">Booked For : {bookings.Booked_For}      <button className=' badge badge-outline  border-2 text-gray-800 hover:bg-gray-800 hover:text-gray-300'>Update Date</button></div>
      <br />
 <button className='btn lg:hidden sm:block    btn-outline hover:bg-gray-800 hover:text-gray-300  border-2 card-title rounded-full'>Post Review</button>
    </div>
 <div className='flex gap-3 py-8'>
    <button className='btn text-sm hidden sm:hidden lg:block btn-outline hover:bg-gray-800 hover:text-gray-300  border-2 card-title rounded-full'>Post Review</button>
    <button className="btn btn-outline border-2 hover:bg-red-500  hover:text-white rounded-full btn-ghost">
    Cancel Booking</button>
 </div>
  </li>
  
  
</ul>
        </div>
    );
};

export default MyBookingsList;