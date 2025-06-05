import React from 'react';
import Banner from '../Components/Banner';

import FindUs from '../Components/FindUs';
import FeaturedRooms from '../Components/FeaturedRooms';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
           <FindUs></FindUs>
           <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;