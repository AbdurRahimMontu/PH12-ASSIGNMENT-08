import React from 'react';
import banner from '../assets/hero.png'
const Banner = () => {
    return (
        <div className='w-7xl mx-auto'>
      <div className=' flex justify-center mb-10'>
              <div className="banner-content space-y-4 py-5   w-3/4 ">
                 <h1 className='text-5xl text-center font-bold'>We Build <br /><span className='text-[#804FE8]'>Productive</span> Apps</h1>
                 <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                 <div className='text-center space-x-2'>
                    <button className='btn btn-outline'>Google Play</button>
                    <button className='btn btn-outline'>App Store</button>
                 </div>
    </div>
      </div>
            <div className="banner-image flex justify-center text-center  ">
                  <figure>
                     <img src={banner} alt=""  className='w-full h-[400px]'/>
                  </figure>
            </div>
    
        </div>
    );
};

export default Banner;