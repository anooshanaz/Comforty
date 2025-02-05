import Image from 'next/image';
export default function AboutHero() {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="bg-teal-700 text-white p-6 rounded-lg h-[480px]">
          <h2 className="text-2xl font-semibold mb-4 mt-20">About Us - Comforty</h2>
          <p className="text-sm md:text-base">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. 
            Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs 
            that seamlessly blend style with functionality.
          </p>
          <button className="mt-32 px-6 py-2 bg-teal-800 hover:bg-teal-900 text-white text-sm rounded-md">
            View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/p1.jpg"
            alt="Chair image"
            width={619}
            height={478}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
