import React from 'react';

const Logo = () => {
  const logos = [
    { src: '/logo1.png', alt: 'Zapier' },
    { src: '/logo2.png', alt: 'Pipedrive' },
    { src: '/logo3.png', alt: 'CIB Bank' },
    { src: '/logo4.png', alt: 'Burnt Toast' },
    { src: '/logo5.png', alt: 'PandaDoc' },
    { src: '/logo6.png', alt: 'Moz' },
    { src: '/logo7.png', alt: 'Moz' }, 
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 justify-center items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-auto h-auto"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
