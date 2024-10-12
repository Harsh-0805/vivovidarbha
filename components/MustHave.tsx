"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Category1 from "@/public/assets/Category1.png";
import ProductCard from "@/components/ProductCard";
import Modal from "./Quicklook";

interface ColorOption {
  colorName: string;
  colorCode: string;
  imageSrc: StaticImageData;
}

interface Product {
  name: string;
  colorOptions: ColorOption[];
  battery: string;
  price: string;
}

// Define products for Best Sellers
const bestSellers: Product[] = [
  {
    name: "Z9 Lite 5G 6GB+128GB | Dimensity 6300",
    colorOptions: [
      {
        colorName: "Red",
        colorCode: "bg-red-500",
        imageSrc: Category1,
      },
      {
        colorName: "Green",
        colorCode: "bg-green-500",
        imageSrc: Category1,
      },
      {
        colorName: "Blue",
        colorCode: "bg-blue-500",
        imageSrc: Category1,
      },
    ],
    battery: "5000 mAh battery",
    price: "₹11,499.00",
  },
];

// Define products for Latest Products
const latestProducts: Product[] = [
  {
    name: "Z9 Lite 5G 6GB+128GB | Dimensity 6300",
    colorOptions: [
      {
        colorName: "Red",
        colorCode: "bg-red-500",
        imageSrc: Category1,
      },
      {
        colorName: "Green",
        colorCode: "bg-green-500",
        imageSrc: Category1,
      },
      {
        colorName: "Blue",
        colorCode: "bg-blue-500",
        imageSrc: Category1,
      },
    ],
    battery: "5000 mAh battery",
    price: "₹11,499.00",
  },
  {
    name: "X7 Pro 8GB+256GB | Snapdragon 780G",
    colorOptions: [
      {
        colorName: "Silver",
        colorCode: "bg-gray-500",
        imageSrc: Category1,
      },
      {
        colorName: "Black",
        colorCode: "bg-black",
        imageSrc: Category1,
      },
    ],
    battery: "4500 mAh battery",
    price: "₹34,999.00",
  },
];

const MustHaveProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Best Sellers" | "Latest Products"
  >("Best Sellers");
  const [modalVisible, setModalVisible] = useState(false);

  // Conditionally select products based on the active tab
  const products = activeTab === "Best Sellers" ? bestSellers : latestProducts;

  return (
    <section className="py-12 text-black bg-gray-100">
      <h2 className="text-left px-6 sm:px-20 text-3xl font-vivoRegular mb-8">
        Must-Have Products
      </h2>
      <div className="flex flex-row px-6 sm:px-20 justify-start space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("Best Sellers")}
          className={`px-4 py-2 rounded-xl max-w-[176px] ${
            activeTab === "Best Sellers"
              ? "bg-[#C4CDFF] text-[#344CCC]"
              : "text-black"
          }`}
        >
          Best Sellers
        </button>
        <button
          onClick={() => setActiveTab("Latest Products")}
          className={`px-4 py-2 rounded-xl max-w-[176px] ${
            activeTab === "Latest Products"
              ? "bg-[#C4CDFF] text-[#344CCC]"
              : "text-black"
          }`}
        >
          Latest Products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow w-full max-w-[400px] h-auto rounded-3xl hover:shadow-lg"
          >
            <ProductCard
              key={index}
              name={product.name}
              colorOptions={product.colorOptions}
              battery={product.battery}
              price={product.price}
              setModalVisible={setModalVisible}
            />
            {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MustHaveProducts;
