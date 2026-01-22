import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FindUs from '../Layout/FindUs';
import FeaturedRooms from '../Layout/FeaturedRooms';
import ReviewContainer from '../Layout/ReviewContainer';
import FaqContainer from '../Layout/FaqContainer';
import NewsLetterContainer from '../Layout/NewsLetterContainer';
import Stats from '../Layout/Stats';
import Chatbot from '../Components/Chatbot';

const Home = () => {
    const [offers, setOffers] = useState([]);
    const [showModal, setShowModal] = useState(false);

  const BACKEND_URL = 'https://cozy-room-server.vercel.app';

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/specialOffers`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setOffers(data);
                setShowModal(true);
            } catch (error) {
                console.error('Error fetching special offers:', error);
            }
        };

        fetchOffers();
    }, [BACKEND_URL]);

    return (
        <div>

            <Banner></Banner>

           <FeaturedRooms></FeaturedRooms>
           <ReviewContainer></ReviewContainer>
           <FaqContainer></FaqContainer>
           <Chatbot></Chatbot>
           <div className='grid justify-between sm:w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2 '>
            <NewsLetterContainer></NewsLetterContainer>
            <Stats></Stats>
           </div>
            <FindUs></FindUs>
           {showModal && (
  <div className="fixed inset-0  bg-opacity-30 flex justify-center items-center z-50 p-4" onClick={() => setShowModal(false)}>
    <div className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-lg" onClick={(e) => e.stopPropagation()}>
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
