import React from 'react';

const Count = () => {
    return (
        <div className='bg-[#804FE8] text-white'>
         <div className=' w-2/3 mx-auto'>
               <div className='  py-10 text-center'>
                 <h2 className='text-4xl font-bold'>Trusted By Millions, Build For You</h2>
                 <div className='flex justify-center pt-5 gap-20'>
                    <div>
                        <p>Total Downloads</p>
                        <h3 className='text-7xl font-bold '>29.6M</h3>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h3 className='text-7xl font-bold'>906K</h3>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h3 className='text-7xl font-bold'>132+</h3>
                        <p>31 More Will Launch</p>
                    </div>
                 </div>
            </div>
         </div>
        </div>
    );
};

export default Count;