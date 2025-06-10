import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
const MyBookingsList = ({bookings,onDelete}) => {
const [deleting,setDeleting]=useState(false)
const [isModalOpen, setIsModalOpen] = useState(false);

// const[calender,setCalender]=useState()
const[isCalenderOpen,setIsCalenderOpen]=useState(false)
const openCalender=()=>setIsCalenderOpen(true)
const closeCalender=()=>setIsCalenderOpen(false)

const[newDate, setNewDate]=useState()
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const {user} =useContext(AuthContext)
   const [formData, setFormData] = useState({
    
   name :'',
    description: '',
    rating: '',
    date: '',
    roomId:''
  });
  const [formData2,setFormData2]=useState({
    newDate:''
  })

   const handleCancel=(_id)=>{
       Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am !"
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
                title: "Cancelled!",
                text: "Your booking has been cancelled.",
                icon: "success"
               });
                onDelete(_id)
            }
          })
      }
    })
  }
const handleReview=()=>{ 
  openModal()
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

const handlePost = (e) => {
  e.preventDefault();
  
 
  const reviewData = {
  
title:bookings.title,
    description: formData.description,
    rating: formData.rating,
    userName: user?.displayName || '',
    userEmail: user?.email || '',
    roomId: bookings._id,
    date:formData.date
  };

  fetch('http://localhost:3000/reviews', { 
    method: "POST",
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reviewData)
  })
  .then(res => {
    
    return res.json();
  })
  .then(data => {
    toast.success('Review posted successfully!'); 
    setFormData({
      description: '',
      rating: '',
      roomId:''
    });
    closeModal();
  })
  
};
   const handleUpdateDate=(e)=>{
e.preventDefault()
openCalender()

    }

   const handleSetDate = (e) => {
  e.preventDefault();

  // const newDate = { date: formData.date };

  fetch(`http://localhost:3000/bookedRooms/${bookings._id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newDate:formData.date})
  })
    .then(res => res.json())
    .then(data => {
      
        toast.success('Date updated!');
        
        setFormData(prev => ({ ...prev, date: '' }));
        closeCalender();
      
    })
    .catch(() => toast.error('Error updating date.'));
};

  
    return (
        <div className='mb-5'>
          <ul className="list border-2 border-gray-800  rounded-box shadow-lg">

  <li className=" list-row ">
    <div><img className="w-50 rounded-box" src={bookings.Image}/></div>
    <div>
      <div className='card-title text-gray-800 text-2xl'>{bookings.title}</div>
      <br />
      <div className="text-sm card-title uppercase font-semibold text-gray-600">Booked For : {bookings.Booked_For}   

           <button onClick={handleUpdateDate} className=' badge badge-outline  border-2 text-gray-800 hover:bg-gray-800 hover:text-gray-300'>Update Date</button></div>
      <br />
 <button className='btn lg:hidden sm:block    btn-outline hover:bg-gray-800 hover:text-gray-300  border-2 card-title rounded-full'>Post Review</button>
    </div>
 <div className='flex gap-3 py-8'>
    <button onClick={()=>handleReview(bookings._id)} className='btn text-sm hidden sm:hidden text-green-600 lg:block btn-outline hover:bg-green-600 hover:text-white  border-2 card-title rounded-full'>Post Review</button>
    <button  onClick={() => handleCancel(bookings._id)} className="btn btn-outline border-2 text-red-600 hover:bg-red-600  hover:text-white rounded-full btn-ghost">
    Cancel Booking</button>
 </div>
  </li>
  
  
</ul>
{isModalOpen && (
  <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
    <form
      onSubmit={handlePost}
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

   {/* reviewData */}
      <h3 className="text-xl font-semibold mb-4">{bookings.title}</h3>
   {/* name */}
<div className='flex items-center card-title'>
  <label className=" mb-1">Name :</label>
  <p className="ml-2 mb-1">{user?.displayName || ''}</p>
</div>
{/* rating */}
<label className="gap-5 card-title mb-2">
  <span className="">Rating : </span>
  <select  name="rating" 
    value={formData.rating}
    onChange={handleChange} 
    className='bg-gray-300 rounded-full text-black'>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    
  </select>
</label>
{/* comment */}
         <div>
 <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Write your review..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 rounded px-3 py-2 "
            required
          />
        </div>
  {/* date */}
        <div type='date' id='date' name='date' value={formData.date} className='card-title '>
         Date :  {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
          </div>
      <button 
        type='submit'
        className="btn btn-outline border-2 mt-5 rounded-4xl"
      >
        Post
      </button>
    </form>
  </div>
)}

{/*calender  */}
{isCalenderOpen && (
  <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
    <form className="bg-gray-900 p-7 rounded-xl w-11/12 max-w-md shadow-lg relative">
      <button onClick={closeCalender} className="absolute top-2 right-2 text-gray-200 text-2xl">&times;</button>
      <h3 className="text-xl font-semibold mb-4">Update Date</h3>
      <input
        type="datetime-local"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="input"
      />
      <button 
      onClick={handleSetDate}
        type='submit'
        className="btn btn-outline border-2 text-white hover:text-black mt-5 rounded-4xl"
      >
        Set date
      </button>
    </form>
  </div>
)}


        </div>
        
    );
};

export default MyBookingsList;