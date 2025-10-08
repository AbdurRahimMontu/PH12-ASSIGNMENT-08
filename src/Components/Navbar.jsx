import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

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
            className={({ isActive })  => (isActive ? "text-red-600 border-b-2 border-red-500" : "text-black")}>
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) => (isActive ? "text-red-600 border-b-2 border-red-500" :"text-black")}>
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? "text-red-600 border-b-2 border-red-500" : "text-black")}>
            Installation
          </NavLink>
        </ul>
        <div>
          <button className="btn text-white bg-[#804FE8]">Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
