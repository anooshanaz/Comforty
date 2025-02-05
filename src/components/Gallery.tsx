
import React from 'react';

const Gallary = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Large Image */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[648px]">
            <img
              src="/t1.jpg"
              alt="Large Chair"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Grid - 4 Small Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Small Image 1 */}
            <div className="w-full h-[150px] sm:h-[200px] lg:h-[312px]">
              <img
                src="/t2.jpg"
                alt="Chair 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Small Image 2 */}
            <div className="w-full h-[150px] sm:h-[200px] lg:h-[312px]">
              <img
                src="/t5.jpg"
                alt="Chair 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Small Image 3 */}
            <div className="w-full h-[150px] sm:h-[200px] lg:h-[312px]">
              <img
                src="/t4.jpg"
                alt="Chair 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Small Image 4 */}
            <div className="w-full h-[150px] sm:h-[200px] lg:h-[312px]">
              <img
                src="/t3.jpg"
                alt="Chair 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;