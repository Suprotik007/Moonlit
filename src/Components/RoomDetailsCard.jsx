
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router';
import {useLocation} from 'react-router'
import moment from 'moment';
import Swal from 'sweetalert2';
    
const RoomDetailsCard = ({ singleRoomDetail }) => {
  const navigate = useNavigate();
  const {user} =useContext(AuthContext)

    const [bookingDate, setBookingDate] = useState('');
  const [bookingData,setBookingData]=useState(singleRoomDetail.available)

  const[available,setAvailable]=useState(true)
const location=useLocation()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

   const [reviews, setReviews] = useState([]);
    useEffect(() => {
    fetch(`https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/reviews/${singleRoomDetail.title}`)
      .then(res => res.json())
      .then(data => setReviews(data.reviews || []))
      
  
  }, [singleRoomDetail.title]);
  
  
  useEffect(() => {
  const checkIfRoomBooked = async () => {
    try {
      const res = await fetch(`http://localhost:3000/bookedRooms/${singleRoomDetail._id}`);
      const data = await res.json();
      if (data.isBooked) {
        setAvailable(false); 
      }
    } catch (error) {
      console.error('Error checking booking status:', error);
    }
  };

  checkIfRoomBooked();
}, [singleRoomDetail._id]);

function canBookDate(canBookDate) {
  const bookingDate = moment(canBookDate, 'YYYY-MM-DD').startOf('day');
  const today = moment().startOf('day');
  
  return bookingDate.isSameOrAfter(today);
}

  const handleConfirmBooking=(e)=>{
        e.preventDefault()
        const dateOnly = bookingDate.split('T')[0];
    
        if (!canBookDate(dateOnly)) {
            Swal.fire({
              icon: 'error',
              title: 'Booking Not Allowed',
              text: 'You can not time travel to past.Please check the date',
            });
            return;
          }

                closeModal();
 const confirmedBookingData = {
      ...bookingData,
       roomId: singleRoomDetail._id,
      Name: user?.displayName || '',
      email: user?.email || '',
      title: singleRoomDetail.title,
      Image: singleRoomDetail.image,
      Size: singleRoomDetail.size,
      Price: singleRoomDetail.price,
      Booked_For:dateOnly
    
    };

    fetch(`https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/bookedRooms/${singleRoomDetail._id}`,{
        method:"POST",
        headers:{ 
            'Content-Type':'application/json'
        },
        body: JSON.stringify(confirmedBookingData)
    })
        .then(res=>res.json())
    .then(data=>
      console.log('adding data to db'))
    // console.log('Submitting booking:', confirmedBookingData);
       setAvailable(false)
    toast.success('Booked successfully!')
 
  }

  const handleBookNowClick = () => {
  
    if (!user) {
        navigate('/login', { state: { from: location.pathname } });
      return;
    }
    openModal();
  };

  return (
    <div className='my-10'>
  
      <div className='mt-10 w-11/12 sm:w-9/12 mx-auto'>
        <div  className="p-3 rounded-2xl border-3 border-gray-600 bg-amber-20 shadow-sm flex flex-col sm:flex-row">
          <figure className="sm:w-1/2">
            <img 
              src={singleRoomDetail.image}
              alt={singleRoomDetail.title}
              className="rounded-xl object-cover w-full h-full"
            />
          </figure>
          <div className="card-body text-gray-700 text-left sm:w-1/2">
            <h2 className="text-2xl font-bold">{singleRoomDetail.title}</h2>
            <p className="font-bold text-lg">{singleRoomDetail.short_description}</p>
            <p className="text-lg font-bold">Size : {singleRoomDetail.size}</p>
            <p className="text-lg font-bold">Price : {singleRoomDetail.price}</p>
            <p className="text-lg font-bold">
              Facilities : <span className='font-bold text-fuchsia-600'>{singleRoomDetail.facilities.join(', ')}</span>
            </p>
  
   
   <p className="text-lg font-bold">Reviews:</p>
<div >
  <ul>
  {reviews.length === 0 && <li>No reviews yet.</li>}
  {reviews.map((review) => (
    <li key={review._id} className="mb-2 border-2 rounded-xl font-bold border-gray-600 p-2">
      <span className="font-bold text-amber-800 ">{review.userName}:</span> {review.description} ||
      
      <span className="ml-2 font-bold text-blue-600">Rating: {review.rating}</span> 
    
    </li>
  ))}
</ul>
</div>

            <div className="card-actions justify-end mt-4">
           
         <button
              disabled={!available}
              className={`btn btn-outline rounded-4xl hover:bg-gray-600 hover:text-white ${!available ? 'bg-gray-900 cursor-not-allowed' : ''}`}
              onClick={handleBookNowClick}
            >
              {available ? 'Book Now' : 'Not available'}
            </button>
           

            </div>
          </div>
        </div>
      </div>


     {isModalOpen && (
  <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
    <form
      onSubmit={handleConfirmBooking}
      className="bg-gray-900 p-7 text-gray-300 rounded-xl w-11/12 max-w-md shadow-lg relative"
    >
      <button 
        type="button"
        className="absolute top-2 right-2 text-gray-200 hover:text-amber-300 text-2xl font-bold"
        onClick={closeModal}
        aria-label="Close modal"
      >
        &times;
      </button>
       <figure className="pb-1 sm:max-w-xs w-3/4 mx-auto">
            <img 
              src={singleRoomDetail.image}
              alt={singleRoomDetail.title}
              className="rounded-xl object-cover w-full h-full"
            />
          </figure>
      <h3 className="text-xl  font-semibold mb-4">{singleRoomDetail.title}</h3>
      <p className="text-lg font-bold">Size : {singleRoomDetail.size}</p> <br />
      <p className="text-lg font-bold">Price : {singleRoomDetail.price}</p> <br />
      <p className="text-lg font-bold">
        Facilities : <span className='font-bold text-amber-600'>{singleRoomDetail.facilities.join(', ')}</span>
      </p> <br />
      <p className="text-lg pb-2 font-bold">Pick the booking date :</p> 
      <input type="datetime-local"  value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="input" required />
      <button 
        type='submit'
        className="btn btn-outline border-2 mt-5 rounded-4xl"
      >
        Confirm Booking
      </button>
    </form>
  </div>
)}

    </div>
  );
};

export default RoomDetailsCard;
