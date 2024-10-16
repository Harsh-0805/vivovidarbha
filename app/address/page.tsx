"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ConfirmationPopup from "./ConfirmationPopup";

// Address Form Component
const AddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    saveInfo: false,
  });

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true); // Show the popup after form submission
    console.log("Form Data Submitted:", formData); // Process form data here
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white text-black shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Book Your Personalized In-Home Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Mobile Number *
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 text-left">
            Complete Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Complete Address"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pincode *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label className="font-medium text-gray-700">
              Save this information for next time
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <button
            type="submit"
            className="w-full sm:w-1/3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Book Now
          </button>
          <button
            type="button"
            className="w-full sm:w-1/3 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            onClick={() =>
              setFormData({
                fullName: "",
                mobileNumber: "",
                address: "",
                pincode: "",
                city: "",
                saveInfo: false,
              })
            } // Reset form on cancel
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Pop-up Component */}
      {showPopup && <ConfirmationPopup onClose={closePopup} />}
    </div>
  );
};

// Product Info Component
const ProductInfo = () => {
  interface Product {
    name: string;
    price: number;
    color: string;
    size: string;
    imageUrl: string;
  }

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Retrieve the selected product data from sessionStorage
    const storedProductData = sessionStorage.getItem("selectedProduct");
    if (storedProductData) {
      setProduct(JSON.parse(storedProductData));
    }
  }, []);

  if (!product) {
    return <div>Loading product information...</div>;
  }

  return (
    <div className="bg-white text-black mt-8 p-8 rounded-lg shadow-md text-sm">
      <h2 className="text-lg font-vivoBold mb-4 text-left">
        Product Information
      </h2>

      <div className="flex flex-col items-center md:flex-row mb-4">
        <Image
          src={product.imageUrl} // Use the image URL from sessionStorage
          alt={product.name}
          width={128}
          height={128}
          className="w-32 h-32 mr-0"
        />
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h3 className="text-lg font-vivoMedium leading-tight">
            {product.name}
          </h3>
          <p className="text-lg text-gray-700 mt-2">
            ₹{product.price.toLocaleString()}
          </p>
          <h4 className="font-vivoMedium text-base">
            Chosen Color: {product.color}
          </h4>
          <h4 className="font-vivoMedium text-base mt-2">
            Chosen Size: {product.size}
          </h4>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center mb-4">
        <input
          type="text"
          placeholder="VIVO 20"
          className="border border-gray-300 rounded px-2 py-2 mb-2 lg:mb-0 lg:mr-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Apply
        </button>
      </div>

      <div className="border-t border-gray-300 py-4">
        <div className="flex justify-between text-gray-600 mt-1">
          <span>MRP</span>
          <span>₹{product.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Discount</span>
          <span>- ₹2,299.80 (20%)</span>
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Delivery Charges</span>
          <span>FREE</span>
        </div>
      </div>

      <div className="flex justify-between font-vivoMedium text-gray-900 mt-1">
        <span>Total</span>
        <span>₹9,199.20</span>
      </div>
    </div>
  );
};

// Main Checkout Page
const CheckoutPage = () => {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <main className="main-content px-4">
        <div className="py-6 flex flex-col gap-4 lg:flex-row justify-center lg:space-x-2 space-y-6 lg:space-y-0">
          {/* ProductInfo Div */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <ProductInfo />
          </div>

          {/* AddressForm Div */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <AddressForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
