import React from "react";
import { HiOutlineViewList } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap gap-4 justify-between items-center px-4 sm:px-6 md:px-10 py-4 bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
        My Portfolio
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg font-medium">
        <li>
          <NavLink
            className="cursor-pointer hover:text-blue-400 transition text-blue-400 font-semibold"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer hover:text-blue-400 transition text-blue-400 font-semibold"
            to="/education"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer hover:text-blue-400 transition text-blue-400 font-semibold"
            to="/certification"
          >
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer hover:text-blue-400 transition text-blue-400 font-semibold"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer hover:text-blue-400 transition text-blue-400 font-semibold"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
