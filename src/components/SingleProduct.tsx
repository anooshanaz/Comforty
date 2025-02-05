
import { client } from '@/sanity/lib/client';
import ProductGrid from './ProductGrid';
import { simpleProduct } from '@/interface';

async function getData() {
  const query = `
    *[_type == 'products']{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      description,
      inventory,
      tags,
      "imageUrl": image.asset->url,
      "slug":slug.current,
      category,
    }
  `;
  const data: simpleProduct[] = await client.fetch(query);
  return data;
}

const SingleProduct = async () => {
  const data = await getData();

  return (
    <section className="relative bg-white py-8 px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24">
      <div className="container mx-auto max-w-[1320px]">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Feature Products</h1>
        </div>
        <ProductGrid data={data} />
      </div>
    </section>
  );
};

export default SingleProduct;
