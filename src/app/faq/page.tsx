import React from 'react'

const fag = () => {
  return (
    <div className='mt-20'>
    <section className="bg-gray-50 py-12 flex justify-center items-center">
      <div className="max-w-[1320px] w-full h-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Questions Looks Here
          </h2>
          <p className="text-gray-600 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            standard dummy text.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              What types of chairs do you offer?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
          {/* Repeat for more cards */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              How can we get in touch with you?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              Do your chairs come with a warranty?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              What will be delivered? And when?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              Can I try a chair before purchasing?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              How do I clean and maintain my Comforty chair?
              <span className="text-gray-500 text-xl font-bold">+</span>
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
              veritatis enim reiciendis.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default fag
