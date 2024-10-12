"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";
import v40 from "@/public/assets/v40e.jpg";
import v40pro from "@/public/assets/prod1.png";

interface TabContent {
  [key: string]: string;
}

interface Product {
  title: string;
  description: string;
  specs: string;
  image: StaticImageData;
}

const V40: React.FC = () => {
  const tabContent: TabContent = {
    Overview: "Detailed content for All Models...",
    Review: "Content for X Series",
    Camera: "Content for V Series",
    Performance: "Content for Y Series",
    Compare: "Content for Series T",
  };

  const [activeModel, setActiveModel] = useState<string>("Overview");
  const [selectedModel, setSelectedModel] = useState<string>("Overview");

  const products: Record<string, Product> = {
    "V40 Pro": {
      title: "V40 • V40 PRO",
      description: "Experience professional-grade photography",
      specs: "Multifocal Portrait | 5500mAh",
      image: v40pro,
    },
    V40: {
      title: "V40 • V40 PRO",
      description: "Capture every moment with precision",
      specs: "ZEISS Optics | 5000mAh",
      image: v40,
    },
  };

  const [selectedProduct, setSelectedProduct] = useState<"V40 Pro" | "V40">(
    "V40 Pro"
  );

  // Get the details for the current product
  const currentProduct = products[selectedProduct];

  return (
    <>
      <div className="flex flex-col bg-gray-50 w-full text-black">
        <nav className="flex justify-center flex-wrap space-x-4 sm:space-x-6 lg:space-x-20 py-4 bg-[#E9EAEB]">
          {Object.keys(tabContent).map((model) => (
            <button
              key={model}
              className={`pb-2 border-b-[1px] transition-colors duration-300 ${
                activeModel === model
                  ? "border-blue-500 text-blue-500 font-normal"
                  : "border-transparent text-black hover:text-blue-500"
              }`}
              onClick={() => {
                setSelectedModel(model), setActiveModel(model);
              }}
            >
              {model}
            </button>
          ))}
        </nav>
      </div>
      <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center">
        <div
          className="absolute inset-0 bg-white bg-opacity-50"
          style={{ backgroundImage: `url(${currentProduct.image})` }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:flex md:justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-black">
              {currentProduct.title}
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              {currentProduct.description}
            </p>
            <p className="text-md text-gray-500 mt-1">{currentProduct.specs}</p>

            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2">
                Book Now
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-full flex items-center space-x-2 text-gray-700">
                <FontAwesomeIcon icon={faHeart} className="mr-2" />
              </button>
            </div>

            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setSelectedProduct("V40 Pro")}
                className={`px-6 py-2 rounded-full ${
                  selectedProduct === "V40 Pro"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                V40 Pro
              </button>
              <button
                onClick={() => setSelectedProduct("V40")}
                className={`px-6 py-2 rounded-full ${
                  selectedProduct === "V40"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                V40
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default V40;
