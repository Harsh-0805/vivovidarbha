"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Category1 from "@/public/assets/Category1.png";
import ProductCard from "@/components/ProductCard";

interface Product {
  name: string;
  imageSrc: StaticImageData;
  battery: string;
  price: string;
}

const products: Product[] = [
  {
    name: "Z9 Lite 5G 6GB+128GB | Dimensity 6300",
    imageSrc: Category1,
    battery: "5000 mAh battery",
    price: "₹11,499.00",
  },
  {
    name: "Z9 Lite 5G 6GB+128GB | Dimensity 6300",
    imageSrc: Category1,
    battery: "5000 mAh battery",
    price: "₹11,499.00",
  },
  {
    name: "Z9 Lite 5G 6GB+128GB | Dimensity 6300",
    imageSrc: Category1,
    battery: "5000 mAh battery",
    price: "₹11,499.00",
  },
];

const MustHaveProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Best Sellers" | "Latest Products"
  >("Best Sellers");

  return (
    <section className="py-12 text-black bg-gray-50">
      <h2 className="text-left pl-6 sm:pl-20 text-3xl font-normal mb-8">
        Must-Have Products
      </h2>
      <div className="flex pl-6 sm:pl-20 justify-start space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("Best Sellers")}
          className={`px-4 py-2 rounded-xl max-w-[176px] ${
            activeTab === "Best Sellers"
              ? "bg-[#C4CDFF] text-[#344CCC]"
              : " text-black"
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
      <div className="flex justify-evenly space-x-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow w-auto h-auto rounded-3xl hover:shadow-lg"
          >
            <ProductCard
              name={product.name}
              imageSrc={product.imageSrc}
              battery={product.battery}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MustHaveProducts;
