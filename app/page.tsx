import React from "react";
import { Navbar } from "@/components/Navbar"; // Importing Navbar component
import { HeroSection } from "@/components/Carousel"; // Importing Carousel component
import { ShopByCategory } from "@/components/Category";
import { WhyVivoNagpur } from "@/components/WhyVivoNagpur";
import MustHaveProducts from "@/components/MustHave";
import DiscoverSection from "@/components/Discover";
import Chatbot from "@/components/Chatbot";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <MustHaveProducts />
      <DiscoverSection />
      <WhyVivoNagpur />
      <Chatbot />
    </div>
  );
};

export default Home;
