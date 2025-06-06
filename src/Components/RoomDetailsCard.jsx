

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const RoomDetailsCard = ({ singleRoomDetail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='my-10'>
  
      <div className='mt-10 w-11/12 sm:w-9/12 mx-auto'>
        <div className="p-3 rounded-2xl border-3 border-gray-600 bg-amber-20 shadow-sm flex flex-col sm:flex-row">
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
              Facilities : <span className='font-bold'>{singleRoomDetail.facilities.join(', ')}</span>
            </p>

            <div className="card-actions justify-end mt-4">
              <button 
                className="btn btn-outline rounded-4xl hover:bg-gray-600 hover:text-white"
                onClick={openModal}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-7 text-gray-300 rounded-xl  w-11/12 max-w-md shadow-lg relative">
            <button 
              className="absolute top-2 right-2 text-gray-200 hover:text-amber-300 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Book {singleRoomDetail.title}</h3>
            <p className="text-lg font-bold">Size : {singleRoomDetail.size}</p> <br />
            <p className="text-lg font-bold">Price : {singleRoomDetail.price}</p> <br />
            <p className="text-lg font-bold">
              Facilities : <span className='font-bold text-amber-600'>{singleRoomDetail.facilities.join(', ')}</span>
            </p> <br />
           <input type="datetime-local" className="input " />
            <button 
              className="btn btn-outline border-2 mt-5 rounded-4xl"
              onClick={() => {
        
                      toast.success('Booking confirmed!')
                closeModal();
              }}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetailsCard;
