"use client";

import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/assets/address.png";

interface ProductInfoProps {
  productName: string;
  productPrice: number;
  color: string;
  size: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  productName,
  productPrice,
  color,
  size,
}) => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const handleApplyCoupon = (): void => {
    if (couponCode === "VIVO20") {
      setDiscount(productPrice * 0.2);
    } else {
      setDiscount(0);
    }
  };

  const totalPrice = productPrice - discount;

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-md text-sm">
      <h2 className="text-md font-vivoBold mb-4 text-left">
        Product Information
      </h2>

      {/* Product Image and Info */}
      <div className="flex items-start mb-4">
        <Image
          src={image}
          alt="Product"
          width={128}
          height={128}
          className="w-32 h-32 mr-0"
        />
        <div>
          <h3 className="text-lg font-vivoMedium leading-tight text-left">
            {productName}
          </h3>
          <p className="text-lg text-gray-700 mt-2 text-left">
            ₹{productPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Chosen Color and Size */}
      <div className="mb-4">
        <h4 className="font-vivoMedium text-left">Chosen Color: {color}</h4>
        <h4 className="font-vivoMedium text-left mt-2">Chosen Size: {size}</h4>
      </div>

      {/* Coupon Code Section */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="VIVO20"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2 w-1/2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleApplyCoupon}
        >
          Apply
        </button>
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-gray-300 py-4">
        <div className="flex justify-between text-gray-600 mt-1">
          <span>MRP</span>
          <span>₹{productPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Discount</span>
          <span>
            - ₹{discount.toFixed(2)} (
            {((discount / productPrice) * 100).toFixed(0)}
            %)
          </span>
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Delivery Charges</span>
          <span>FREE</span>
        </div>
      </div>

      {/* Total Section */}
      <div className="flex justify-between font-vivoMedium text-gray-900 mt-1">
        <span>Total</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
