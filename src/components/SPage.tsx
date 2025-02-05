import React from 'react';

const SPage = () => {
  // Array of product images
  const products = [
    '/c2.jpg',
    '/c1.jpg',
    '/p2.jpg',
    '/p1.jpg',
    '/p1.jpg',
    '/c3.png',
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto max-w-[1324px] px-4">
        {/* Newsletter Section */}
        <div className="w-full max-w-sm bg-gray-200  rounded-lg p-6 mx-auto mb-10">
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Or Subscribe to the Newsletter
          </h1>
          <div className="flex justify-between">
            <input
              type="email"
              placeholder="Email Address..."
              className="px-2 py-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-2 py-2 bg-cyan-600 text-white uppercase font-medium hover:bg-cyan-700">
              Submit
            </button>
          </div>
        </div>

        {/* Instagram Follow Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Follow Products and Discounts on Instagram
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((img, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SPage;
