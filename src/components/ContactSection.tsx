import React from 'react'
import { ImLocation } from 'react-icons/im'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-[1440px]">
      <h2 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h2>
      <p className="text-center text-gray-600 mb-12">
        For more information about our products & services, please feel free to drop us an email. 
        Our staff is always there to help you out. Do not hesitate!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start">
            <ImLocation className="text-black text-2xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start">
          <AiOutlinePhone className="text-black text-2xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-600">Mobile: +1(84) 546-6789<br />Hotline: +1(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start">
          <BiTimeFive className="text-black text-2xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold">Working Time</h4>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 border p-4"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 border p-4"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 border p-4"
                placeholder="This is optional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 border p-4"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[237px] bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
