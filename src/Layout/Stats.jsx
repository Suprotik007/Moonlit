import React from 'react';
import StatsBox from '../Components/StatsBox';

const Stats = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-8/12 mx-auto mb-5'>Statistics</h1>
            <div>
                <StatsBox></StatsBox>
            </div>
        </div>
    );
};

export default Stats;