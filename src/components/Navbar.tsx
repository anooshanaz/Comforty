

'use client'
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and close icons
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-slate-100 body-font max-w-[1920px]">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center text-gray-900">
          <GiSofa className="text-cyan-600 w-8 h-8 md:w-10 md:h-10" />
          <span className="ml-2 text-lg md:text-xl font-medium">Comforty</span>
        </div>

        {/* Cart & Help */}
        <div className="hidden md:flex items-center space-x-3 bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full">
          <Link href='/cart'><CiShoppingCart className="text-lg" /></Link>
          <p className="text-sm md:text-base">Help</p>
          <FaRegCheckCircle className="text-lg" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:items-center md:justify-between ${menuOpen ? "block" : "hidden"
          } bg-white md:bg-transparent px-4 sm:px-6 lg:px-8`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center bg-white">
          <nav className="w-full md:w-auto flex flex-wrap justify-center md:justify-start space-x-4 text-gray-500">
            <Link href="/mainpage" className="hover:text-cyan-600">Home</Link>
            <Link href="/shop" className="hover:text-cyan-600">Shop</Link>
            <Link href="/product" className="hover:text-cyan-600">Product</Link>
            <Link href="/pages" className="hover:text-cyan-600">Pages</Link>
            <Link href="/about" className="hover:text-cyan-600">About</Link>
            <Link href="/contact" className="hover:text-cyan-600">Contact</Link>
          </nav>
          {/* Contact Number */}
          <p className="hidden md:block mt-4 md:mt-0 text-sm md:text-base text-gray-900 bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
            [808] 553-0111-1111
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

