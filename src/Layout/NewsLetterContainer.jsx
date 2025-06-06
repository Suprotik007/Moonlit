import React from 'react';
import NewsLetterBox from '../Components/NewsLetterBox';

const NewsLetterContainer = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-10/12 mx-auto mb-5'>Join Our Newsletter</h1>
            <p className='text-gray-600  pb-5'> By joining, you’ll receive regular updates, exclusive content, and special offers straight to your inbox. Sign up today and become part of us. </p>
            <div>
                <NewsLetterBox></NewsLetterBox>
            </div>
        </div>
    );
};

export default NewsLetterContainer;