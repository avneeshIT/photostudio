import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCamera, FaUpload, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:opacity-80">
          📸 PhotoStudio
        </Link>

        {/* Hamburger icon */}
        <div className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation links */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-8 text-lg items-start md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-purple-700 md:bg-transparent z-50 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-800 md:hover:bg-transparent">
            <FaHome />
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-800 md:hover:bg-transparent">
            <FaCamera />
            <Link to="/booking" className="hover:text-yellow-300">Booking</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-800 md:hover:bg-transparent">
            <FaUpload />
            <Link to="/upload" className="hover:text-yellow-300">Upload</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-800 md:hover:bg-transparent">
            <FaInfoCircle />
            <Link to="/about" className="hover:text-yellow-300">About</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-800 md:hover:bg-transparent">
            <FaEnvelope />
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
