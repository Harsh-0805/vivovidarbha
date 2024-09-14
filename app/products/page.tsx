"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Category from "@/public/assets/Category1.png";
import Image from "next/image";

interface TabContent {
  [key: string]: string;
}

const TabbedNavigationWithFilter: React.FC = () => {
  const [activeModel, setActiveModel] = useState<string>("All Models");

  const products = [
    {
      model: "Z Series",
      name: "Z9 Lite 5G 6GB+128GB",
      imageSrc: Category, // Replace with actual image path
      battery: "5000 mAh battery",
      price: 11499,
    },
    {
      model: "X Series",
      name: "X70 Pro 8GB+128GB",
      imageSrc: Category,
      battery: "4500 mAh battery",
      price: 49999,
    },
    {
      model: "V Series",
      name: "V21 8GB+128GB",
      imageSrc: Category,
      battery: "4000 mAh battery",
      price: 29999,
    },
    {
      model: "Series T",
      name: "T1 6GB+128GB",
      imageSrc: Category,
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
    .filter(
      (product) =>
        selectedModel === "All Models" || product.model === selectedModel
    )
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
  };

  // State for controlling the expanded/collapsed sections of the filter
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
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

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-50 w-full">
        {/* Tabs Section */}
        {/* <nav className="flex justify-center space-x-20 py-4 bg-[#E9EAEB]">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`pb-2 border-b-[1px] transition-colors duration-300 ${
                activeTab === tab
                  ? "border-blue-500 text-blue-500 font-normal"
                  : "border-transparent text-black hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))} */}
        <nav className="flex justify-center space-x-20 py-4 bg-[#E9EAEB]">
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

        {/* Main Layout: Filter Section and Content */}
        <div className="flex flex-col text-black lg:flex-row w-full">
          {/* Filter Section */}
          <div className="flex flex-col lg:w-1/4 py-4 border-r">
            <h3 className="text-lg flex px-2 font-semibold mb-4">
              {/* <span>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.31497C1 2.03645 2.03645 1 3.31497 1H10.7228C11.9805 1 13 2.01953 13 3.27718C13 3.94701 12.7051 4.58287 12.1937 5.01555L9.84686 7.00138C9.09836 7.63472 8.66667 8.56549 8.66667 9.546V10.7331C8.66667 11.3196 8.38601 11.8708 7.91165 12.2158L6.61747 13.157C5.94431 13.6466 5 13.1657 5 12.3333V9.46634C5 8.53198 4.60785 7.64053 3.91908 7.00916L1.75069 5.02147C1.27235 4.58299 1 3.96387 1 3.31497Z"
                    stroke="#2D264B"
                    stroke-width="1.5"
                  />
                </svg>
              </span> */}
              Filter
            </h3>
            <div className="space-y-4">
              {/* Price Filter */}
              <div className="border-b border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Price")}
                >
                  <span className="font-semibold">Price</span>
                  <span>
                    {isOpen["Price"] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
                  <div className="mt-2 px-2">
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
                  <span className="font-semibold">Camera</span>
                  <span>
                    {isOpen["Camera"] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
                  <span className="font-semibold">RAM</span>
                  <span>
                    {isOpen["RAM"] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
                  <span className="font-semibold">Storage Capacity</span>
                  <span>
                    {isOpen["Storage"] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
                  <span className="font-semibold">Battery</span>
                  <span>
                    {isOpen["Battery"] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-4">
            {/* <div className="text-lg">
              <p>{tabContent[activeTab]}</p>
            </div> */}
            {/* Model Tabs */}
            <div className="flex justify-between items-center mb-4">
              {/* Sort by dropdown */}
              <div className="relative">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div
                    className="bg-white rounded-3xl shadow-md p-4 w-auto"
                    key={index}
                  >
                    <div className="flex w-auto h-auto justify-center mb-4">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        width={96}
                        height={112}
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                    </div>
                    <div className="flex justify-center space-x-2 mb-2">
                      <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">
                        {product.battery}
                      </span>
                    </div>
                    <h3 className="text-left px-4 text-md font-normal">
                      {product.name}
                    </h3>
                    <p className="text-left px-4 text-gray-700">
                      ₹{product.price}
                    </p>
                    <div className="flex justify-end px-4">
                      <button className="text-blue-600 justify-between mt-4 flex items-center">
                        View
                        <div className="right-0">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 3V3.75V3ZM15 3V2.25V3ZM21 9H21.75H21ZM21 15H20.25H21ZM15 21V21.75V21ZM14 21V20.25V21ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.6648 20.1977L16.7822 20.9384ZM16.7822 3.06156L16.8995 2.32079L16.8995 2.32079L16.7822 3.06156ZM20.9384 7.21783L21.6792 7.1005V7.1005L20.9384 7.21783ZM10.5496 3.39996C10.2184 3.64873 10.1516 4.11888 10.4003 4.45007C10.6491 4.78126 11.1192 4.84808 11.4504 4.59931L10.5496 3.39996ZM11.4504 19.4007C11.1192 19.1519 10.6491 19.2187 10.4003 19.5499C10.1516 19.8811 10.2184 20.3513 10.5496 20.6L11.4504 19.4007ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75L3 11.25ZM16 12V11.25V12ZM12.534 15.4123C12.2095 15.6697 12.155 16.1414 12.4123 16.466C12.6697 16.7905 13.1414 16.845 13.466 16.5877L12.534 15.4123ZM14.763 14.6022L14.297 14.0145L14.763 14.6022ZM14.763 9.39785L14.297 9.98553L14.763 9.39785ZM13.466 7.41232C13.1414 7.15497 12.6697 7.20946 12.4123 7.53403C12.155 7.8586 12.2095 8.33034 12.534 8.58768L13.466 7.41232ZM16.9801 12.2507L17.7208 12.3687L17.7208 12.3687L16.9801 12.2507ZM16.9801 11.7493L17.7208 11.6313L17.7208 11.6313L16.9801 11.7493ZM14 3.75L15 3.75V2.25L14 2.25V3.75ZM20.25 9V15H21.75V9H20.25ZM15 20.25H14V21.75H15V20.25ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM15 3.75C15.9577 3.75 16.3492 3.75233 16.6648 3.80232L16.8995 2.32079C16.4378 2.24767 15.9003 2.25 15 2.25V3.75ZM21.75 9C21.75 8.09965 21.7523 7.56216 21.6792 7.1005L20.1977 7.33515C20.2477 7.65082 20.25 8.04233 20.25 9H21.75ZM16.6648 3.80232C18.4834 4.09035 19.9096 5.51661 20.1977 7.33515L21.6792 7.1005C21.2895 4.64012 19.3599 2.71048 16.8995 2.32079L16.6648 3.80232ZM14 2.25C12.7064 2.25 11.5106 2.67806 10.5496 3.39996L11.4504 4.59931C12.1607 4.06583 13.0424 3.75 14 3.75V2.25ZM14 20.25C13.0424 20.25 12.1607 19.9342 11.4504 19.4007L10.5496 20.6C11.5106 21.3219 12.7064 21.75 14 21.75V20.25ZM3 12.75L16 12.75V11.25L3 11.25L3 12.75ZM13.466 16.5877L15.2289 15.1898L14.297 14.0145L12.534 15.4123L13.466 16.5877ZM15.2289 8.81016L13.466 7.41232L12.534 8.58768L14.297 9.98553L15.2289 8.81016ZM15.2289 15.1898C15.9176 14.6438 16.4852 14.1953 16.8875 13.7945C17.2932 13.3904 17.6294 12.9418 17.7208 12.3687L16.2395 12.1327C16.2225 12.2388 16.1532 12.4087 15.8289 12.7318C15.5012 13.0582 15.0143 13.4457 14.297 14.0145L15.2289 15.1898ZM14.297 9.98553C15.0143 10.5543 15.5012 10.9418 15.8289 11.2682C16.1532 11.5913 16.2225 11.7612 16.2395 11.8673L17.7208 11.6313C17.6294 11.0582 17.2932 10.6096 16.8875 10.2055C16.4852 9.80475 15.9175 9.35616 15.2289 8.81016L14.297 9.98553ZM17.7208 12.3687C17.7402 12.2466 17.75 12.1234 17.75 12H16.25C16.25 12.0441 16.2465 12.0883 16.2395 12.1327L17.7208 12.3687ZM17.75 12C17.75 11.8766 17.7402 11.7534 17.7208 11.6313L16.2395 11.8673C16.2465 11.9117 16.25 11.9559 16.25 12H17.75ZM16 12.75H17V11.25H16V12.75Z"
                              fill="#415fff"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available for this model.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabbedNavigationWithFilter;
