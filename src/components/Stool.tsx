
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Stool = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-16 flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded w-full h-auto"
            alt="Library Stool"
            src="/p2.jpg"
          />
        </div>

        {/* Text and Button Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Library Stool
            <br className="hidden lg:inline-block" />
            Chair
          </h1>
          <button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 text-lg mb-6 rounded-full">
            $20.00 USD
          </button>
          <p className="mb-8 leading-relaxed text-gray-700">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg sm:mb-10">
              <CiShoppingCart
                className="text-white pr-2 text-3xl hover:text-cyan-500 cursor-pointer"
                title="Add to Cart"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stool;
