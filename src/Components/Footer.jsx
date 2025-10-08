import React from 'react';
import logo from '../assets/logo.png'
import twitter from '../assets/Twitter (2).png'
import linkIdn from '../assets/LinkIdn.png'
import facebook from '../assets/Facebook (2).png'
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div className='bg-[#001931] text-white '>
         <div className='flex justify-between items-center w-7xl mx-auto py-5'>
           
        <div className="flex justify-between items-center">
        <Link to={"/"} className="flex items-center ">
          <img src={logo} width={30} alt="" />
          <span className="font-bold text-[#804FE8]">HERO.IO</span>
        </Link>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>Social Links</h3>
                <div className='flex gap-5 pt-5'>
                    <img className='border p-1 bg-white rounded-full' src= {twitter} alt="" />
                    <img className='border p-1 bg-white rounded-full' src= {linkIdn} alt="" />
                    <img className='border p-1 bg-white rounded-full' src= {facebook} alt="" />
                </div>
            </div>
         </div>
         <hr />
         <div className=" text-center py-5 p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Hero.Io</p>
  </aside>
</div>
        </div>
    );
};

export default Footer;