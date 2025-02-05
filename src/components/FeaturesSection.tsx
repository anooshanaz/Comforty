// components/FeaturesSection.js
export default function FeaturesSection() {
    return (   
      <div className="w-full flex justify-center mb-40">
         <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">What Make Our Brand Different</h1>
        
        <div className="max-w-[1320px] w-full lg:h-[24px] md:h-[24px] h-screen  bg-white grid  md:grid-cols-2 lg:grid-cols-4  sm:grid-cols-2 gap-6 p-4 ">
          <div className="flex flex-col items-start text-center md:text-left bg-gray-100 p-10">
            <div className="text-2xl text-cyan-600 mb-2">🚚</div>
            <h3 className="text-lg font-semibold text-cyan-600">Next day as standard</h3>
            <p className="text-cyan-600 text-sm">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
  
          <div className="flex flex-col items-start text-center md:text-left bg-gray-100 p-10">
            <div className="text-2xl text-cyan-600 mb-2">✔️</div>
            <h3 className="text-lg font-semibold text-cyan-600">Made by true artisans</h3>
            <p className="text-cyan-600 text-sm">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
  
          <div className="flex flex-col items-start text-center md:text-left bg-gray-100 p-10">
            <div className="text-2xl text-cyan-600 mb-2">💳</div>
            <h3 className="text-lg font-semibold text-cyan-600">Unbeatable prices</h3>
            <p className="text-cyan-600 text-sm">
              For our materials and quality, you won&apos;t find better prices anywhere.
            </p>
          </div>
  
          <div className="flex flex-col items-start text-center md:text-left bg-gray-100 p-10">
            <div className="text-2xl text-cyan-600 mb-2">♻️</div>
            <h3 className="text-lg font-semibold text-cyan-600">Recycled packaging</h3>
            <p className=" text-sm text-cyan-600">
              We use 100% recycled packaging to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
  