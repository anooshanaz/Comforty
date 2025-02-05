
import React from "react";

const Pages = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Bag Section */}
          <div className="flex-1 bg-white  rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Bag</h2>

            {/* Bag Item */}
            <div className="flex items-start border-b pb-4 mb-4">
              <img
                src="/t1.jpg"
                alt="Library Stool Chair"
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Asher Stool/Coast Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <div className="flex space-x-2 mt-2">
                  <button className="text-gray-400 hover:text-gray-600">❤️</button>
                  <button className="text-gray-400 hover:text-gray-600">🗑</button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">MRP: $90</p>
              </div>
            </div>

            {/* Bag Item 2 */}
            <div className="flex items-start border-b pb-4">
              <img
                src="/c1.jpg"
                alt="Library Stool Chair"
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Asher Stool/Coast Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <div className="flex space-x-2 mt-2">
                  <button className="text-gray-400 hover:text-gray-600">❤️</button>
                  <button className="text-gray-400 hover:text-gray-600">🗑</button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">MRP: $90</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 bg-white  rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-semibold">$180.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Estimated Delivery & Handling</span>
              <span className="text-sm font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-sm font-semibold">$180.00</span>
            </div>
            <button className="w-full mt-6 py-2 bg-cyan-600 text-white text-lg font-medium rounded-full hover:bg-cyan-700">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
