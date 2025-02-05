
import CategorySec from "@/components/CategorySec";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import ProductCart from "@/components/ProductCart";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Logo/>
    <CategorySec/>
    <Gallery/>
    <ProductCart/>
    <Reviews/>
   </main>
  );
}
