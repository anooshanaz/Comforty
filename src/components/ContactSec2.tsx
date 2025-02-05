import React from 'react'

const ContactSec2 = () => {
  return (
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto max-w-[1320px] px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="text-4xl text-black">🏆</div>
                <div>
                  <h4 className="text-lg font-semibold">High Quality</h4>
                  <p className="text-gray-600 text-sm">Crafted from top materials</p>
                </div>
              </div>
    
              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="text-4xl text-teal-600">✅</div>
                <div>
                  <h4 className="text-lg font-semibold">Warranty Protection</h4>
                  <p className="text-gray-600 text-sm">Over 2 years</p>
                </div>
              </div>
    
              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="text-4xl text-teal-600">🎧</div>
                <div>
                  <h4 className="text-lg font-semibold">24 / 7 Support</h4>
                  <p className="text-gray-600 text-sm">Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactSec2
