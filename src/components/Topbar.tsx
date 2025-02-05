import Link from 'next/link';
import React from 'react'
import { IoHelpCircleOutline } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="bg-slate-700 w-full h-[45px] flex items-center justify-between px-4 md:px-8">
      {/* Left Section: Language Selector */}
      <div className="flex items-center space-x-4 justify-between ">

      <div className="flex items-center space-x-4 justify-between">
        <label htmlFor="language" className="text-gray-300 text-sm  sm:block hidden">
          Free Shipping All Orders Over $50
        </label>
      </div>
      </div>

      {/* Right Section: Links */}
      <div className="flex items-center space-x-6">
      <select
          id="language"
          name="language"
          className="bg-slate-700 text-gray-300 text-sm rounded-md px-2 py-1 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
        <Link href="/faq" className="text-gray-300 text-sm hover:underline">
          FAQ
        </Link>
        <IoHelpCircleOutline className='text-gray-300'/>
        <Link href="#help" className="text-gray-300 text-sm hover:underline">
          Help
        </Link>
      </div>
    </div>
  )
}

export default Topbar
