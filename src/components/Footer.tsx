// import React from 'react';
import { GiSofa } from 'react-icons/gi'; // Sofa icon from react-icons
import { FaCcPaypal } from "react-icons/fa"; // PayPal icon
import { RiPaypalFill } from "react-icons/ri"; // PayPal fill icon
import Link from 'next/link'; // Link component for navigation

const Footer = () => {
  return (
    <footer className="bg-white w-full h-[343px] body-font">
      {/* Main footer container */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">

          {/* Logo and About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <GiSofa className='text-cyan-600 w-[30px] h-[30px]' />
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">COMFORTY</h2>
            <p className="text-gray-500 text-sm mt-2 mb-6 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing.
              <br className="lg:block hidden" /> orelm ipsum dolor sit amet consectetur
              <br className="lg:block hidden" /> waistcoat green juice
            </p>
            {/* Social Media Icons */}
            {/* Social Media Icons */}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-500">
                {/* Facebook Icon */}
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>

              <Link href="#" className="ml-3 text-gray-500">
                {/* Twitter Icon */}
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>

              <Link href="#" className="ml-3 text-gray-500">
                {/* Instagram Icon */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>

              <Link href="#" className="ml-3 text-gray-500">
                {/* LinkedIn Icon */}
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>

          </div>

          {/* Category Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORY</h2>
            <ul className="list-none mb-10">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-black font-semibold underline hover:text-cyan-600">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
            <ul className="list-none mb-10">
              {['Help & Support', 'Terms & Conditions', 'Privacy & Policy', 'Help'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-black font-semibold hover:text-cyan-600">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWSLETTER</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Your email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded">Subscribe</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br className="lg:block hidden" /> Waistcoat green juice
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-white">
        <div className="container px-5 py-6 mx-auto flex items-center justify-between sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2021 Bogy — Designed by <b>Zakrsoft</b>
          </p>
          <div className="flex flex-wrap">
            <RiPaypalFill className="text-gray-400 font-semibold ml-2" />
            <p className="text-gray-400 font-semibold ml-2">PayPal</p>
            <FaCcPaypal className="text-gray-400 font-semibold ml-2" />
            <p className="text-gray-400 font-semibold ml-2">VISA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
