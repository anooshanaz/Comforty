
import React from 'react';
import { FiArrowDownLeft, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-white body-font mt-24">
      <div className="container mx-auto flex px-5 py-16 md:py-24 bg-gray-400 flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 lg:pr-16 flex flex-col md:items-start text-center md:text-left mb-10 md:mb-0">
          <p className="text-cyan-600 text-lg font-medium mb-3">WELCOME TO CHAIRY</p>
          <h1 className="title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Best Furniture<br className="hidden lg:inline-block" />Collection For Your<br className="hidden lg:inline-block" />Interior
          </h1>
          <button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-cyan-700 rounded-lg text-lg">
            Shop Now<FiArrowRight className='text-white pl-2 text-2xl pt-2'/>
          </button>
        </div>
        {/* Image Content */}
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded mx-auto max-w-full md:max-w-lg"
            alt="hero"
            src="/hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
