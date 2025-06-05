import React from 'react';
import Map from '../Components/Map';

const FindUs = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-15'>Find Us</h1>
           <div className='flex lg:flex-row justify-between'>
             <div className='space-y-12'>
<div className=''>
    <p className='font-medium text-4xl '>Location : </p>
    <br />
<p className='text-3xl text-gray-500'>3949 State 38b Rte Newark Valley, London</p>

</div>

<span >
    <p className='font-medium text-4xl'>Email :</p> <br />
<p className='text-gray-500 text-3xl mb-10'> moonlit123@gmail.com</p>
</span>

<span className=''>
    <p className='font-medium text-4xl'>Contact : </p> <br />
<p className='text-3xl text-gray-500'>+99 (0) 344 956 4050</p>
</span>
            </div>
             <Map></Map>
           </div>
           </div>
        </div>
    );
};

export default FindUs;