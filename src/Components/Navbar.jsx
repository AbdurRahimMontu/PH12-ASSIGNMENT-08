import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import gitHub from '../assets/github-icon.png'

const Navbar = () => {
  return (
    <div className="bg-white py-5 shadow-sm ">
      <div className="flex justify-between items-center w-7xl mx-auto">
        <Link to={"/"} className="flex items-center ">
          <img src={logo} width={30} alt="" />
          <span className="font-bold text-[#804FE8]">HERO.IO</span>
        </Link>

        <ul className="space-x-3 font-semibold">
      <NavLink
            to="/"
            className={({ isActive })  => (isActive ? "text-[#804FE8] border-b-2 border-[#804FE8]" : "text-black")}>
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) => (isActive ? "text-[#804FE8] border-b-2 border-[#804FE8]" :"text-black")}>
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? "text-[#804FE8] border-b-2 border-[#804FE8]" : "text-black")}>
            Installation
          </NavLink>
        </ul>
        <div>
          <button className="btn  text-white bg-[#804FE8]">
           
            <a href="https://github.com/AbdurRahimMontu" className="flex gap-2" target="_blank" rel="noopener noreferrer">  
            <img src={gitHub} alt="" width={20} className="rounded-full" />
             <span>Contribute</span> 
             </a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
