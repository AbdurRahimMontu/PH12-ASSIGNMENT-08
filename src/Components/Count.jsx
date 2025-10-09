import React from 'react';
import download from '../assets/icon-downloads.png'
import review from '../assets/icon-ratings.png'
import appStore from '../assets/google-play.png'

const Count = () => {
    return (
        <div className='bg-[#804FE8] text-white'>
         <div className=' w-2/3 mx-auto'>
               <div className='  py-10 text-center'>
                 <h2 className='text-4xl font-bold'>Trusted By Millions, Build For You</h2>
                 <div className='flex justify-center pt-5 gap-20'>
                    <div className='text-left'>
                        <p>Total Downloads</p>
 <h3 className='text-5xl font-bold flex justify-between gap-10 '>29.6M<img src={download} alt="" width={40} /></h3>
    <p>21% More Than Last Month</p>
                    </div>
                    <div className='text-left'>
                        <p>Total Reviews</p>
    <h3 className='text-5xl font-bold flex justify-between gap-10'>906K<img src={review} alt="" width={40} /></h3>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div  className='text-left'>
                        <p>Active Apps</p>
    <h3 className='text-5xl font-bold flex justify-between gap-10'>132+<img src={appStore} alt="" width={40} /></h3>
                        <p>31 More Will Launch</p>
                    </div>
                 </div>
            </div>
         </div>
        </div>
    );
};

export default Count;