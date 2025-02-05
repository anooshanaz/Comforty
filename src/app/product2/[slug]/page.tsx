
import ProductDetails from '@/components/ProductDetails';
import ProductGrid from '@/components/ProductGrid';
import Reviews from '@/components/Reviews';
import { client } from '@/sanity/lib/client';
import { FaCircle } from 'react-icons/fa6';



async function getData(slug: string) {
  const query = `
    *[_type == "products" && slug.current == "${slug}"][0]{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      description,
      inventory,
      tags,
      "imageUrl": image.asset->url,
      "slug": slug.current,
      category,
      rating
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string}> }) {
  // const { slug } = use(params); // Unwrap params
  const data: any | null = await getData((await params).slug);

  if (!data) {
    return <div className="text-center py-16">Product not found.</div>;
  }

  const imageUrl = data.imageUrl || '/placeholder-image.jpg'; // Fallback image if none exists
  // const totalPrice = (data.price * quantity).toFixed(2); // Total price calculation

  return (
    <>
    <div className="bg-white mt-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Image Gallery */}
          <img
            src={data.imageUrl}
            width={400}
            height={400}
            alt={data.title}
            className="w-[600px] h-[400px] object-cover transition-transform duration-300 hover:scale-110"
          />

          {/* Right Section - Details */}
          <div>
            <h1 className="text-2xl font-bold">{data.title || 'Product Name'}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className={`text-sm flex items-center ${data.inventory > 0 ? 'text-green-600' : 'text-red-600'}`}>
                <FaCircle className="mr-1" />
                {data.inventory > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <p className="text-2xl font-bold text-red-500 mt-4 ">${data.price}</p>
            <p className="text-gray-600 mt-2">{data.description || 'No description available.'}</p>

            {/* Tags Section */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
                <div className="flex flex-wrap space-x-2 gap-2 mt-2 ">
                  {data.tags}
                </div>
              </div>
           
            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
            <button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold mt-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Add To Cart
            </button>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails/>
      <Reviews/>
    </div>
    </>
  );
};