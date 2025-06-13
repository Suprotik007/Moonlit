import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FindUs from '../Layout/FindUs';
import FeaturedRooms from '../Layout/FeaturedRooms';
import ReviewContainer from '../Layout/ReviewContainer';
import FaqContainer from '../Layout/FaqContainer';
import NewsLetterContainer from '../Layout/NewsLetterContainer';
import Stats from '../Layout/Stats';


const Home = () => {
    const [offers, setOffers] = useState([]);
const [showModal, setShowModal] = useState(false)

useEffect(()=>{
fetch ('https://cozy-room-server-4kz4t7qtu-suprotiks-projects.vercel.app/specialOffers')
.then(res=>res.json())
.then(data=>{setOffers(data)
    setShowModal(true)
})
},[])
    return (
        <div>
            
            <Banner></Banner>
           <FindUs></FindUs>
           <FeaturedRooms></FeaturedRooms>
           <ReviewContainer></ReviewContainer>
           <FaqContainer></FaqContainer>
           <div className='grid justify-between sm:w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2 '>
            <NewsLetterContainer></NewsLetterContainer>
            <Stats></Stats>
           </div>
           {showModal && (
  <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 p-4">
    <div className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-lg">
      <button
        className="absolute top-2 right-2 text-white text-4xl font-bold z-50"
        onClick={() => setShowModal(false)}
        aria-label="Close modal"
      >
        &times;
      </button>

      {offers.map(offer => (
        <div key={offer._id} className="relative">
          <img
            src={offer.image}
        
            className="w-full h-auto opacity-100  object-cover"
          />
        
          <div className="absolute inset-0 gap-8 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-7xl font-extrabold text-white mb-2 drop-shadow-lg">
              {offer.title}
            </h3>
            <p className="text-2xl text-white ">
              {offer.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>
    );
};

export default Home;