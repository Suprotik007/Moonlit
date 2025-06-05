import React from 'react';
import { motion } from "motion/react"
import FaqBox from '../Components/FaqBox';
import img1 from '../assets/img22.jpeg'
import img2 from '../assets/img33.jpeg'
const FaqContainer = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-7/12 mx-auto mb-5'> Frequently Asked Questions</h1>

            <section className='justify-around flex gap-5'>
<div>
               <FaqBox></FaqBox>
           </div>
                 <div className=''>
        <motion.img
         src={img1}
         animate={{x:[0,170,0]}}
         transition={{duration:8,repeat:Infinity}}
         className='max-w  rounded-tl-4xl rounded-br-4xl  ' alt="" />
    </div>



              <div className=''>
        <motion.img src={img2}
        animate={{y:[0,220,0]}}
         transition={{duration:8,repeat:Infinity}} className='max-w  rounded-tl-4xl rounded-br-4xl  ' alt="" />
    </div>
            </section>
        </div>
    );
};

export default FaqContainer;