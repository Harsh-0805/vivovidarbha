"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Modal from "@/components/Quicklook";
import { StaticImageData } from "next/image";
import Category1 from "@/public/assets/Category1.png";
import Category2 from "@/public/assets/Category2.png";
import Category3 from "@/public/assets/Category3.png";
import Category4 from "@/public/assets/Category4.png";
import Image from "next/image";
import Link from "next/link";

// Define the interfaces
interface ColorOption {
  colorName: string;
  colorCode: string; // Tailwind CSS color class (e.g., 'bg-red-500')
  imageSrc: StaticImageData;
}

interface ProductCardProps {
  name: string;
  colorOptions: ColorOption[];
  battery: string;
  price: string;
  setModalVisible: (visible: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  colorOptions,
  battery,
  price,
  setModalVisible,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const selectedColorOption = colorOptions[selectedColorIndex];

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 w-full">
      <div className="flex w-full h-[200px] justify-center items-center mb-4">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={selectedColorOption.imageSrc}
            alt={`${name} - ${selectedColorOption.colorName}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-2 mb-4">
        {colorOptions.map((option, index) => (
          <span
            key={index}
            className={`h-5 w-5 rounded-full cursor-pointer border ${
              index === selectedColorIndex
                ? "border-blue-600"
                : "border-gray-300"
            } ${option.colorCode}`}
            onClick={() => setSelectedColorIndex(index)}
          ></span>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mb-2">
        <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">
          {battery}
        </span>
      </div>
      <h3 className="text-left px-4 text-md font-vivoRegular">{name}</h3>
      <p className="text-left px-4 text-gray-700">{price}</p>
      <div className="flex justify-between px-4 space-x-4 mt-4">
        <button
          onClick={() => setModalVisible(true)}
          className="text-blue-600 flex items-center"
        >
          Quick Look
        </button>
        <Link href="../product/V40" className="text-blue-600 flex items-center">
          View
          <div className="ml-1">{/* Your SVG icon */}</div>
        </Link>
      </div>
    </div>
  );
};

interface Product {
  model: string;
  name: string;
  colorOptions: ColorOption[];
  battery: string;
  price: number;
}

interface TabContent {
  [key: string]: string;
}

const TabbedNavigationWithFilter: React.FC = () => {
  const [activeModel, setActiveModel] = useState<string>("All Models");

  // Updated products array with colorOptions
  const products: Product[] = [
    {
      model: "Z Series",
      name: "Z9 Lite 5G 6GB+128GB",
      colorOptions: [
        {
          colorName: "Red",
          colorCode: "bg-red-500",
          imageSrc: Category1,
        },
        {
          colorName: "Green",
          colorCode: "bg-green-500",
          imageSrc: Category2,
        },
        {
          colorName: "Blue",
          colorCode: "bg-blue-500",
          imageSrc: Category3,
        },
      ],
      battery: "5000 mAh battery",
      price: 11499,
    },
    {
      model: "X Series",
      name: "X70 Pro 8GB+128GB",
      colorOptions: [
        {
          colorName: "Black",
          colorCode: "bg-black",
          imageSrc: Category1,
        },
        {
          colorName: "Silver",
          colorCode: "bg-gray-300",
          imageSrc: Category2,
        },
      ],
      battery: "4500 mAh battery",
      price: 49999,
    },
    {
      model: "V Series",
      name: "V21 8GB+128GB",
      colorOptions: [
        {
          colorName: "Purple",
          colorCode: "bg-purple-500",
          imageSrc: Category1,
        },
        {
          colorName: "White",
          colorCode: "bg-white",
          imageSrc: Category2,
        },
      ],
      battery: "4000 mAh battery",
      price: 29999,
    },
    {
      model: "Series T",
      name: "T1 6GB+128GB",
      colorOptions: [
        {
          colorName: "Blue",
          colorCode: "bg-blue-500",
          imageSrc: Category1,
        },
        {
          colorName: "Black",
          colorCode: "bg-black",
          imageSrc: Category2,
        },
      ],
      battery: "5000 mAh battery",
      price: 19999,
    },
  ];

  const [selectedModel, setSelectedModel] = useState<string>("All Models");
  const [sortOption, setSortOption] = useState<string>(
    "Price (Lowest to Highest)"
  );

  // Filter and sort products based on selected model and sort option
  const filteredProducts = products
    .filter((product) => {
      // Filter by selected model
      if (selectedModel !== "All Models" && product.model !== selectedModel) {
        return false;
      }
      // Additional filters (e.g., Price, Camera) can be added here
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "Price (Lowest to Highest)") {
        return a.price - b.price;
      } else if (sortOption === "Price (Highest to Lowest)") {
        return b.price - a.price;
      }
      return 0;
    });

  // Define the content for each tab
  const tabContent: TabContent = {
    "All Models": "Detailed content for All Models...",
    "X Series": "Content for X Series",
    "V Series": "Content for V Series",
    "Y Series": "Content for Y Series",
    "Series T": "Content for Series T",
    Accessories: "Content for Accessories",
    Compare: "Compare models",
  };

  // State for controlling the expanded/collapsed sections of the filter
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    Models: false, // Added "Models" here
    Price: false,
    Camera: false,
    RAM: false,
    Storage: false,
    Battery: false,
  });

  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  const [selectedRAM, setSelectedRAM] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [selectedBattery, setSelectedBattery] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile filter toggle

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedPrice(e.target.value);
  const handleCameraChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedCamera(e.target.value);
  const handleRAMChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedRAM(e.target.value);
  const handleStorageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedStorage(e.target.value);
  const handleBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedBattery(e.target.value);

  const toggleSection = (section: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-50 w-full text-black">
        {/* Tabs Section */}
        <nav className="hidden sm:flex justify-center flex-wrap space-x-4 sm:space-x-6 lg:space-x-20 py-4 bg-[#E9EAEB]">
          {Object.keys(tabContent).map((model) => (
            <button
              key={model}
              className={`pb-2 border-b-[1px] transition-colors duration-300 ${
                activeModel === model
                  ? "border-blue-500 text-blue-500 font-vivoRegular"
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

        {/* Main Layout: Filter Section and Content */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Filter Section */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden"
            } lg:block lg:w-1/4 py-4 border-r bg-white lg:bg-transparent z-10 lg:z-auto absolute lg:relative w-full`}
          >
            <h3 className="text-lg flex px-4 font-vivoBold mb-4">Filter</h3>
            <div className="space-y-4 px-4">
              {/* Models Filter */}
              <div className="border-b sm:hidden border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Models")}
                >
                  <span className="font-vivoBold">Models</span>
                  <span>
                    {isOpen["Models"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* Models Filter Options */}
                {isOpen["Models"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {[
                        "All Models",
                        "X Series",
                        "V Series",
                        "Y Series",
                        "Series T",
                        "Accessories",
                      ].map((model) => (
                        <div key={model}>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="model"
                              value={model}
                              checked={selectedModel === model}
                              onChange={(e) => setSelectedModel(e.target.value)}
                              className="form-radio h-4 w-4 text-blue-500"
                            />
                            <span className="ml-2">{model}</span>
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                )}
              </div>
              {/* Price Filter */}
              <div className="border-b border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Price")}
                >
                  <span className="font-vivoBold">Price</span>
                  <span>
                    {isOpen["Price"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* Price Filter Options */}
                {isOpen["Price"] && (
                  <div className="mt-2">
                    <form className="space-y-2">
                      {[
                        "Upto ₹10,000",
                        "₹10,000 to ₹20,000",
                        "₹20,000 to ₹30,000",
                        "₹30,000 to ₹40,000",
                        "₹40,000 to ₹50,000",
                        "Above ₹50,000",
                      ].map((priceRange) => (
                        <div key={priceRange}>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="price"
                              value={priceRange}
                              checked={selectedPrice === priceRange}
                              onChange={handlePriceChange}
                              className="form-radio h-4 w-4 text-blue-500"
                            />
                            <span className="ml-2">{priceRange}</span>
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                )}
              </div>

              {/* Camera Filter */}
              <div className="border-b border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Camera")}
                >
                  <span className="font-vivoBold">Camera</span>
                  <span>
                    {isOpen["Camera"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* Camera Filter Options */}
                {isOpen["Camera"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {[
                        "Basic Camera (Up to 12 MP)",
                        "Standard Camera (13 MP - 32 MP)",
                        "High-Resolution Camera (33 MP - 50 MP)",
                        "Pro Camera (Above 50 MP)",
                      ].map((camera) => (
                        <div key={camera}>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="camera"
                              value={camera}
                              checked={selectedCamera === camera}
                              onChange={handleCameraChange}
                              className="form-radio h-4 w-4 text-blue-500"
                            />
                            <span className="ml-2">{camera}</span>
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                )}
              </div>

              {/* RAM Filter */}
              <div className="border-b w-full border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("RAM")}
                >
                  <span className="font-vivoBold">RAM</span>
                  <span>
                    {isOpen["RAM"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* RAM Filter Options */}
                {isOpen["RAM"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {["4 GB", "6 GB", "8 GB", "12 GB"].map((ram) => (
                        <div key={ram}>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="ram"
                              value={ram}
                              checked={selectedRAM === ram}
                              onChange={handleRAMChange}
                              className="form-radio h-4 w-4 text-blue-500"
                            />
                            <span className="ml-2">{ram}</span>
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                )}
              </div>

              {/* Storage Filter */}
              <div className="border-b border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Storage")}
                >
                  <span className="font-vivoBold">Storage Capacity</span>
                  <span>
                    {isOpen["Storage"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* Storage Filter Options */}
                {isOpen["Storage"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {["64 GB", "128 GB", "256 GB", "512 GB"].map(
                        (storage) => (
                          <div key={storage}>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="storage"
                                value={storage}
                                checked={selectedStorage === storage}
                                onChange={handleStorageChange}
                                className="form-radio h-4 w-4 text-blue-500"
                              />
                              <span className="ml-2">{storage}</span>
                            </label>
                          </div>
                        )
                      )}
                    </form>
                  </div>
                )}
              </div>

              {/* Battery Filter */}
              <div>
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Battery")}
                >
                  <span className="font-vivoBold">Battery</span>
                  <span>
                    {isOpen["Battery"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {/* Battery Filter Options */}
                {isOpen["Battery"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {["3000 mAh", "4000 mAh", "5000 mAh", "6000 mAh"].map(
                        (battery) => (
                          <div key={battery}>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="battery"
                                value={battery}
                                checked={selectedBattery === battery}
                                onChange={handleBatteryChange}
                                className="form-radio h-4 w-4 text-blue-500"
                              />
                              <span className="ml-2">{battery}</span>
                            </label>
                          </div>
                        )
                      )}
                    </form>
                  </div>
                )}
              </div>

              {/* Apply Filters Button for Mobile */}
              <div className="lg:hidden mt-4">
                <button
                  onClick={toggleFilter}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Overlay for Mobile Filter */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 lg:hidden"
              onClick={toggleFilter}
            ></div>
          )}

          {/* Content Section */}
          <div className="flex-1 p-4">
            {/* Sort by dropdown */}
            <div className="flex justify-between items-center mb-4">
              {/* Show Filter Toggle on Mobile within content area */}
              <button
                onClick={toggleFilter}
                className="flex items-center text-blue-600 lg:hidden"
              >
                {/* Filter Icon */}
                <span className="mr-2">Filter</span>
                {/* Your SVG icon */}
              </button>

              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2">
                  Rank By
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="p-2 border rounded-lg"
                >
                  <option value="Price (Lowest to Highest)">
                    Price (Lowest to Highest)
                  </option>
                  <option value="Price (Highest to Lowest)">
                    Price (Highest to Lowest)
                  </option>
                </select>
              </div>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    colorOptions={product.colorOptions}
                    battery={product.battery}
                    price={`₹${product.price}`}
                    setModalVisible={setModalVisible}
                  />
                ))
              ) : (
                <p>No products available for this model.</p>
              )}
            </div>
            {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabbedNavigationWithFilter;
