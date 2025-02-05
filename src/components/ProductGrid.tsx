
// 'use client';
// import Link from 'next/link';
// import { addToCart } from '@/app/actions/action';
// import { simpleProduct } from '@/interface';
// import Swal from 'sweetalert2';

// const ProductGrid = ({ data }: { data: simpleProduct[] }) => {
//   const handleAddToCart = (e: React.MouseEvent, product: simpleProduct) => {
//     e.preventDefault();
//     Swal.fire({
//         position:'top-right',
//         icon:'success',
//         title: `${product.title} added to cart`,
//         showConfirmButton:false,
//         timer: 1000
//     })

//     addToCart(product);
    
//   };
 
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {data.map((product) => (
//         <div
//           key={product._id}
//           className="bg-white shadow-md rounded-lg overflow-hidden"
//         >
//           <img
//             src={product.imageUrl}
//             alt={product.title}
//             className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
//           />
//           <div className="p-4">
//             <Link href={`/product2/${product.slug}`}>
//               <h2 className="text-lg hover:text-cyan-600 text-gray-800">
//                 {product.title}
//               </h2>
//             </Link>
//             <div className="flex justify-between items-center">
//               <p className="text-sm text-gray-600 font-bold">${product.price}</p>
//             </div>
//             <button
//               className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full font-semibold mt-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
//               onClick={(e) => handleAddToCart(e, product)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;
 
'use client';
import Link from 'next/link';
import { addToCart } from '@/app/actions/action';
import { simpleProduct } from '@/interface';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ProductGrid = ({ data }: { data: simpleProduct[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: simpleProduct) => {
    e.preventDefault();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  // Filter and Search Logic
  const filteredProducts = data
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (filterCriteria === 'all') return true;
      if (filterCriteria === 'under50' && product.price < 50) return true;
      if (filterCriteria === '50to100' && product.price >= 50 && product.price <= 100) return true;
      if (filterCriteria === 'above100' && product.price > 100) return true;
      return false;
    });

  return (
    <div className="p-4 sm:p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Filter Dropdown */}
        <select
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="all">All Products</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <div className="w-full h-48 sm:h-60 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <Link href={`/product2/${product.slug}`}>
                <h2 className="text-lg font-semibold hover:text-cyan-600 text-gray-800">
                  {product.title}
                </h2>
              </Link>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-600 font-bold">${product.price}</p>
              </div>
              <button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full font-semibold mt-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;