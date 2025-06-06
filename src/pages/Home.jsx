import React from 'react';
import Banner from '../Components/Banner';

import FindUs from '../Layout/FindUs';
import FeaturedRooms from '../Layout/FeaturedRooms';
import ReviewContainer from '../Layout/ReviewContainer';
import FaqContainer from '../Layout/FaqContainer';
import NewsLetterContainer from '../Layout/NewsLetterContainer';
import Stats from '../Layout/Stats';

const Home = () => {
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
        </div>
    );
};

export default Home;