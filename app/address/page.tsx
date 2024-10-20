"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ConfirmationPopup from "./ConfirmationPopup";
import axios from "axios"; // Axios for making API requests
import { useSession } from "next-auth/react"; // Import the NextAuth session hook

// Address Form Component
const AddressForm = () => {
  const { data: session, status } = useSession(); // Get session data from NextAuth
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    saveInfo: false,
    promoCode: "", // Promo Code (optional)
  });

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  interface Product {
    name: string;
    price: number;
    color: string;
    size: string;
  }

  const [product, setProduct] = useState<Product | null>(null); // Product data from session

  useEffect(() => {
    // Retrieve product data from sessionStorage
    const storedProductData = sessionStorage.getItem("selectedProduct");
    if (storedProductData) {
      setProduct(JSON.parse(storedProductData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure product is available before submitting
    if (!product) {
      alert("Product information is missing.");
      return;
    }

    if (!session) {
      alert("User not authenticated. Please log in.");
      return;
    }

    try {
      // Remove commas from product price and convert to a number
      const cleanedProductPrice = parseFloat(
        product.price.toString().replace(/,/g, "")
      );

      // Prepare data to send to the API
      const requestData = {
        username: session?.user?.name, // Get name from NextAuth session
        email: session?.user?.email, // Get email from NextAuth session
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        address: formData.address,
        pincode: formData.pincode,
        city: formData.city,
        productName: product.name,
        product_price: cleanedProductPrice, // Send cleaned product price
        color: product.color,
        size: product.size,
        promoCodeUsed: formData.promoCode || "N/A", // Optional promo code
      };

      // Send POST request to the API
      const response = await axios.post(
        "http://localhost:9000/createTransaction",
        requestData
      );

      if (response.status === 200) {
        setShowPopup(true); // Show confirmation popup if successful
        console.log("Transaction Created Successfully");
      }
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("There was an issue creating the transaction.");
    }
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
        {/* Form inputs for user details */}
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
                promoCode: "",
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>

      {showPopup && <ConfirmationPopup onClose={closePopup} />}
    </div>
  );
};

// Product Info Component
const ProductInfo = () => {
  interface Product {
    name: string;
    price: string; // Price is a string from backend, e.g., "25,999"
    color: string;
    size: string;
    imageUrl: string;
  }

  const [product, setProduct] = useState<Product | null>(null);
  const [promoCode, setPromoCode] = useState<string>(""); // State to track entered promo code
  const [discount, setDiscount] = useState<number>(0); // State to track applied discount
  const [isPromoValid, setIsPromoValid] = useState<boolean | null>(null); // Track if promo code is valid

  // Define a list of valid promo codes with corresponding discount percentages
  const promoCodes: Record<string, number> = {
    VIVO20: 20, // 20% discount
    SAVE10: 10, // 10% discount
  };

  useEffect(() => {
    // Retrieve the selected product data from sessionStorage
    const storedProductData = sessionStorage.getItem("selectedProduct");
    if (storedProductData) {
      setProduct(JSON.parse(storedProductData));
    }
  }, []);

  // Function to convert string price with commas into a number
  const convertPriceToNumber = (priceString: string) => {
    const numericPrice = priceString.replace(/,/g, ""); // Remove commas
    return parseFloat(numericPrice); // Convert to number
  };

  // Function to apply promo code
  const applyPromoCode = () => {
    if (promoCodes[promoCode.toUpperCase()]) {
      // Valid promo code
      const discountPercentage = promoCodes[promoCode.toUpperCase()];
      setDiscount(discountPercentage);
      setIsPromoValid(true);
    } else {
      // Invalid promo code
      setDiscount(0);
      setIsPromoValid(false);
    }
  };

  if (!product) {
    return <div>Loading product information...</div>;
  }

  // Convert product price from string to number for calculations
  const productPrice = convertPriceToNumber(product.price) || 0;
  const discountAmount = (productPrice * discount) / 100;
  const discountedPrice = productPrice - discountAmount;

  return (
    <div className="bg-white text-black mt-8 p-8 rounded-lg shadow-md text-sm">
      <h2 className="text-lg font-bold mb-4 text-left">Product Information</h2>

      <div className="flex flex-col items-center md:flex-row mb-4">
        <Image
          src={product.imageUrl} // Use the image URL from sessionStorage
          alt={product.name}
          width={128}
          height={128}
          className="w-32 h-32 mr-0"
        />
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h3 className="text-lg font-medium leading-tight">{product.name}</h3>
          <p className="text-lg text-gray-700 mt-2">
            ₹{productPrice.toLocaleString()}{" "}
            {/* Display price as localized string */}
          </p>
          <h4 className="font-medium text-base">
            Chosen Color: {product.color}
          </h4>
          <h4 className="font-medium text-base mt-2">
            Chosen Size: {product.size}
          </h4>
        </div>
      </div>

      {/* Promo Code Input */}
      <div className="flex flex-col lg:flex-row items-center mb-4">
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)} // Update promo code state
          className="border border-gray-300 rounded px-2 py-2 mb-2 lg:mb-0 lg:mr-2 w-full"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={applyPromoCode} // Apply promo code on click
        >
          Apply
        </button>
      </div>

      {/* Promo code feedback */}
      {isPromoValid === false && (
        <p className="text-red-500">Invalid Promo Code</p>
      )}
      {isPromoValid === true && (
        <p className="text-green-500">
          Promo Code Applied! {discount}% Discount Applied
        </p>
      )}

      <div className="border-t border-gray-300 py-4">
        <div className="flex justify-between text-gray-600 mt-1">
          <span>MRP</span>
          <span>₹{productPrice.toLocaleString()}</span>{" "}
          {/* Display original price */}
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Discount</span>
          <span>
            - ₹{discountAmount.toLocaleString()} ({discount}%)
          </span>{" "}
          {/* Display discount */}
        </div>
        <div className="flex justify-between text-gray-600 mt-1">
          <span>Delivery Charges</span>
          <span>FREE</span>
        </div>
      </div>

      <div className="flex justify-between font-medium text-gray-900 mt-1">
        <span>Total</span>
        <span>₹{discountedPrice.toLocaleString()}</span>{" "}
        {/* Display total price after discount */}
      </div>
    </div>
  );
};

// Main Checkout Page
const CheckoutPage = () => {
  return (
    <div className="App bg-gray-100 h-screen">
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
