import React from 'react';
import { Link, useRouteError } from 'react-router';
import img from '../assets/error-404.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div className='flex gap-2 flex-col justify-center items-center min-h-screen'>
         <div>{error.message}</div>
         <img src={img} alt="" />
         <h2 className='text-5xl font-semibold'>Oops, page not found</h2>
         <p className='opacity-80'>The page you are looking for is not available</p>
         <Link to={'/'} className='btn bg-[#804FE8] text-white hover:scale-105 transition ease-in-out'>Go Back!</Link>
        </div>
    );
};

export default Error;