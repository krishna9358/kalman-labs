"use client"; // Ensures this is a client-side component

import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

export default function CustomNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4 lg:px-24 flex items-center justify-between relative">
      {/* Logo and Site Name */}
      <div className="flex items-center">
        <Image 
          src="/images/Ellipse 181@2x.png" 
          alt="Logo" 
          width={32} 
          height={32} 
          className="mr-2 w-auto h-auto" // Reduced space
        />
        <h1 className="text-xl font-bold">kalman-labs</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:ml-auto">
        <ul className="flex space-x-8">
          <li className="hover:text-gray-700">
            <a href="#chapters" className="text-gray-600">About Us</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="#team" className="text-gray-600">Ongoing Research</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="#collaborate" className="text-gray-600">Collaborate</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Button for mobile view */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
          {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 bg-white shadow-md p-4 mt-2 w-48 z-10">
          <ul className="space-y-4 text-right">
            <li className="hover:text-gray-700">
              <a href="#chapters" className="text-gray-600">Chapters</a>
            </li>
            <li className="hover:text-gray-700">
              <a href="#team" className="text-gray-600">Meet The Team</a>
            </li>
            <li className="hover:text-gray-700">
              <a href="#collaborate" className="text-gray-600">Collaborate</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
