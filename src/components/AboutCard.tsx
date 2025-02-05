import React from 'react'
import Image from 'next/image'

const AboutCard = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-2 ml-4">
          <h1 className="text-3xl font-semibold text-black">Feature Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="p-4 rounded-lg">
            <Image
              src="/a1.jpg"
              alt="The Poplar suede sofa"
              width={630}
              height={462}
              className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-semibold mt-4 text-left">The Poplar suede sofa</h3>
            <p className="text-gray-600 mt-2 text-left">$99.00</p>
          </div>

          {/* Product 2 */}
          <div className="p-4 rounded-lg">
            <Image
              src="/a2.jpg"
              alt="The Dandy chair"
              width={305}
              height={462}
              className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-semibold mt-4 text-left">The Dandy chair</h3>
            <p className="text-gray-600 mt-2 text-left">$99.00</p>
          </div>

          {/* Product 3 */}
          <div className="p-4 rounded-lg">
            <Image
              src="/a3.jpg"
              alt="The Dandy chair"
              width={305}
              height={462}
              className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-semibold mt-4 text-left">The Dandy chair</h3>
            <p className="text-gray-600 mt-2 text-left">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
