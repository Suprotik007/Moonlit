import React from 'react';
import Banner from '../Components/Banner';

import FindUs from '../Layout/FindUs';
import FeaturedRooms from '../Layout/FeaturedRooms';
import ReviewContainer from '../Layout/ReviewContainer';
import FaqContainer from '../Layout/FaqContainer';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
           <FindUs></FindUs>
           <FeaturedRooms></FeaturedRooms>
           <ReviewContainer></ReviewContainer>
           <FaqContainer></FaqContainer>
        </div>
    );
};

export default Home;