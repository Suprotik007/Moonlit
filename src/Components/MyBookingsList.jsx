import React, { useState } from 'react';
import Swal from 'sweetalert2';
const MyBookingsList = ({bookings,onDelete}) => {
const [deleting,setDeleting]=useState(false)


   const handleCancel=(_id)=>{
       Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
  .then((result)=>{
if(result.isConfirmed){
  setDeleting(true)
   fetch(`http://localhost:3000/bookedRooms/${_id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
          //  setDeleting(true)
              Swal.fire({
                title: "Deleted!",
                text: "Your Tip has been deleted.",
                icon: "success"
               });
                onDelete(_id)
            }
          })
      }
    });
  }
    
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
    <button className='btn text-sm hidden sm:hidden text-green-600 lg:block btn-outline hover:bg-green-600 hover:text-white  border-2 card-title rounded-full'>Post Review</button>
    <button  onClick={() => handleCancel(bookings._id)} className="btn btn-outline border-2 text-red-600 hover:bg-red-600  hover:text-white rounded-full btn-ghost">
    Cancel Booking</button>
 </div>
  </li>
  
  
</ul>
        </div>
    );
};

export default MyBookingsList;