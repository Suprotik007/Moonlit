import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyBookingsList = ({bookings}) => {
    // const {user} =useContext(AuthContext)
    
    return (
        <div>
          <ul className="list bg-base-100 rounded-box shadow-md">
  

  
  <li className="list-row">
    <div><img className="w-50 rounded-box" src={bookings.Image}/></div>
    <div>
      <div className='card-title text-gray-800 text-2xl'>{bookings.Title}</div>
      <br />
      <div className="text-xs card-title uppercase font-semibold text-gray-600">Booked For : {bookings.Booked_For}      <button className=' badge text-gray-300  bg-gray-800 hover:text-amber-500'>Update Date</button></div>
      <br />
 <button className='btn lg:hidden sm:block    btn-outline hover:bg-gray-800 hover:text-gray-300  border-2 card-title rounded-full'>Post Review</button>
    </div>
 <button className='btn text-sm hidden sm:hidden lg:block btn-outline hover:bg-gray-800 hover:text-gray-300  border-2 card-title rounded-full'>Post Review</button>
    <button className="btn btn-outline border-2 hover:bg-red-500  hover:text-white rounded-full btn-ghost">
    Cancel Booking</button>
  </li>
  
  
</ul>
        </div>
    );
};

export default MyBookingsList;