
import Product3 from '@/components/Product3';
import SearchAndFilter from '@/components/SearchAndFilter';
import SearchBar from '@/components/SearchBar';
import SPage from '@/components/SPage';
import { simpleProduct } from '@/interface';
import React from 'react'



const ProductCart = async () => {
  return (
    <div>
      {/* <SearchAndFilter data={[]} onFilter={function (filteredData: simpleProduct[]): void {
        throw new Error('Function not implemented.');
      } }/> */}
      <Product3/>
      <SPage/>
      
    </div>
  )
};

export default ProductCart
