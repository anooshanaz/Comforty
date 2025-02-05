
import CategorySec from '@/components/CategorySec'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import ProductCart from '@/components/ProductCart'
import React from 'react'

const home = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 sm:w-full">
        <br />
        <br />
        <br />
        <Hero/>
        <Logo/>
        <CategorySec/>
        <Gallery/>
        <ProductCart/>
        </div>
    </main>
  )
}

export default home
