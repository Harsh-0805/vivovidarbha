import React from "react";
import { Navbar } from "@/components/Navbar"; // Importing Navbar component
import { HeroSection } from "@/components/Carousel"; // Importing Carousel component
import { ShopByCategory } from "@/components/Category";
import { WhyVivoNagpur } from "@/components/WhyVivoNagpur";
import MustHaveProducts from "@/components/MustHave";
import DiscoverSection from "@/components/Discover";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <MustHaveProducts />
      <DiscoverSection />
      <WhyVivoNagpur />
    </div>
  );
};

export default Home;
