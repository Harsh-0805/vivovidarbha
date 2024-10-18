"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type CompareInfo = {
  price: string;
  screenSize: string;
  rearCamera: string;
  frontCamera: string;
  ramRom: string;
  processor: string;
  battery: string;
  fastCharging: string;
  fiveg: string;
};

type Product = {
  id: string;
  name: string;
  compare: CompareInfo[];
  colorPictureOptions: {
    color: string;
    hexcode: string;
    pictures: { url: string }[];
  }[];
};

const ComparePage = () => {
  const [products, setProducts] = useState<{ [key: string]: Product }>({});
  const [selectedModels, setSelectedModels] = useState([
    "Y18e 5G", // Default models for comparison
    "Y18i 5G",
    "Y18 5G",
  ]);
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle window resizing and adjust selectedModels
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 1024 && selectedModels.length > 2) {
      // For small and medium screens, keep only 2 models
      setSelectedModels((prev) => prev.slice(0, 2));
    } else if (width >= 1024 && selectedModels.length < 3) {
      // For large screens, show 3 models by default
      setSelectedModels((prev) => {
        const defaultModels = ["Y18e 5G", "Y18i 5G", "Y18 5G"];
        return prev.length < 3
          ? [...prev, ...defaultModels.slice(prev.length)]
          : prev;
      });
    }
  };

  // Fetch the products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://vivo-project-backend.vercel.app/products"
        ); // Adjust the API endpoint accordingly
        const data = await res.json();
        const formattedProducts = data.reduce((acc: any, product: Product) => {
          acc[product.name] = product;
          return acc;
        }, {});
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial load
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModelChange = (index: number, newModel: string) => {
    const updatedModels = [...selectedModels];
    updatedModels[index] = newModel;
    setSelectedModels(updatedModels);
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-200 to-white">
        <div className="mx-auto py-[100px] bg-gray-200 text-black">
          <h2 className="text-center text-4xl font-vivoMedium">
            Which phone is better for you?
          </h2>
        </div>

        {/* Product Selection Grid */}
        <div className="bg-white rounded-3xl shadow-md sm:mx-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-between max-w-[1200px] w-full mx-auto px-4 sm:px-[40px] md:px-[80px]">
            {selectedModels.map((model, index) => (
              <div
                key={index}
                className="bg-white text-center p-4 lg:p-6 w-full max-w-sm mx-auto"
              >
                {/* Dropdown for model selection */}
                <select
                  value={model}
                  onChange={(e) => handleModelChange(index, e.target.value)}
                  className="w-full mb-4 border-b-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                >
                  <option value="">Select a model</option>
                  {Object.keys(products).map((productKey) => (
                    <option key={productKey} value={productKey}>
                      {products[productKey].name}
                    </option>
                  ))}
                </select>

                {/* Product Image */}
                {model && products[model] && (
                  <div className="mb-4">
                    <Image
                      src={
                        products[model].colorPictureOptions[0].pictures[0].url
                      }
                      alt={products[model].name}
                      className="mx-auto w-48 h-48 object-contain"
                      width={192}
                      height={192}
                    />
                  </div>
                )}

                {/* Color Options */}
                {model && products[model] && (
                  <div className="text-gray-700 mb-2">Available Colors</div>
                )}
                {model && products[model] && (
                  <div className="flex justify-center space-x-2 mb-4">
                    {products[model].colorPictureOptions.map(
                      (colorOption, colorIndex) => (
                        <span
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: colorOption.hexcode }}
                        ></span>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="container my-8 max-w-[1200px] w-full sm:mx-auto px-[40px] sm:px-[80px]">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>

          {products && Object.keys(products).length > 0 ? (
            <>
              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Price
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.price
                        ? products[model].compare[0].price
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              {/* Screen Size */}
              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Screen Size
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.screenSize
                        ? products[model].compare[0].screenSize
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              {/* Battery */}
              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Rear Camera
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.rearCamera
                        ? products[model].compare[0].rearCamera
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Front Camera
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.frontCamera
                        ? products[model].compare[0].frontCamera
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Ram & Rom
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.ramRom
                        ? products[model].compare[0].ramRom
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Processor
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.processor
                        ? products[model].compare[0].processor
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Battery
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.battery
                        ? products[model].compare[0].battery
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  Fast Charging
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.fastCharging
                        ? products[model].compare[0].fastCharging
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <div className="col-span-1 text-left font-vivoMedium text-3xl mb-4 pb-4 border-b">
                  5G Support
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 font-vivoRegular text-lg">
                  {selectedModels.map((model, index) => (
                    <div
                      key={index}
                      className="col-span-1 text-left text-gray-700"
                    >
                      {model &&
                      products[model]?.compare &&
                      products[model].compare[0]?.fiveg
                        ? products[model].compare[0].fiveg
                        : "N/A"}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div>Loading specifications...</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComparePage;
