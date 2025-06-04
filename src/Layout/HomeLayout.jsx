import React from 'react';
import Navbar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
           <header className='mb-8'>
             <Navbar></Navbar>
           </header>
           <main>
             <Outlet></Outlet>
           </main>
           <footer className='mt-8'>
<Footer></Footer>
           </footer>
            
        </div>
    );
};

export default HomeLayout;