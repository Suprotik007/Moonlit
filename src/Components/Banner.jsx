
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import img1 from '../assets/img11.jpeg';
import img2 from '../assets/img22.jpeg';
import img3 from '../assets/img33.jpeg';

const Banner = () => {
  return (
    <div className=" text-center justify-around p-3 w-11/12 mx-auto">
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-box h-[70vh] max-h-[600px]" 
      >

        <SwiperSlide className="relative">
          <img
            src={img1}
            className="w-full h-full object-cover rounded-box"
            alt="Community gardening"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Unwind in Luxury</h2>
            <p className="text-xl mb-6 max-w-md">Enjoy world-class amenities, breathtaking views, and personalized service for a truly memorable getaway.</p>
            <button className="btn btn-outline  btn-lg">Visit now</button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src={img2}
            className="w-full h-full object-cover rounded-box"
            alt="Urban balcony garden"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Book Now, Save More</h2>
            <p className="text-xl mb-6 max-w-md">Take advantage of exclusive offers and flexible booking options—your dream vacation is just a click away!</p>
            <button className="btn btn-outline btn-lg">Find more</button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src={img3}
            className="w-full h-full object-cover rounded-box"
            alt="Person planting seeds"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Discover Your Perfect Stay</h2>
            <p className="text-xl mb-6 max-w-md">Experience comfort and elegance in our beautifully designed rooms, tailored for relaxation and convenience</p>
            <button className="btn btn-outline btn-lg">View rooms</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;