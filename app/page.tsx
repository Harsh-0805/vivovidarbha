import React from "react";
import Navbar from "@/components/Navbar"; // Importing Navbar component
import { HeroSection } from "@/components/Carousel"; // Importing Carousel component
import { ShopByCategory } from "@/components/Category";
import { WhyVivoNagpur } from "@/components/WhyVivoNagpur";
import MustHaveProducts from "@/components/MustHave";
import DiscoverSection from "@/components/Discover";
import Chatbot from "@/components/Chatbot";
import { Footer } from "@/components/Footer";
import working from "@/public/assets/working.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <ShopByCategory /> */}

      <MustHaveProducts />
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={working} // Make sure to match the file path
          alt="V40 & V40 Pro Banner"
          layout="fill"
          objectFit="contain"
          className="absolute pt-10 rounded-3xl" // Ensures the image is behind the content
        />
      </div>

      <DiscoverSection />
      <WhyVivoNagpur />
      {/* <Chatbot /> */}
      <Footer />
    </div>
  );
};

export default Home;
