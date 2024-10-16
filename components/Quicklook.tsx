"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Ensure you import `useRouter` properly
import { Product } from "@/app/products/page"; // Import the appropriate product interface

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const { name, colorOptions, ramPriceOptions, details } = product;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedRamPriceIndex, setSelectedRamPriceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedColorOption = colorOptions[selectedColorIndex];
  const selectedRamPriceOption = ramPriceOptions[selectedRamPriceIndex];
  const images = selectedColorOption.imageUrls;

  const router = useRouter(); // Call the useRouter hook here, which ensures client-side usage

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0); // Reset image index when color changes
  };

  const handleSizeChange = (index: number) => {
    setSelectedRamPriceIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Close modal when clicking outside the modal container
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const checkUserAuthentication = () => {
    // Example: Check if a token exists in localStorage
    const token = localStorage.getItem("authToken");
    return !!token; // Returns true if token exists
  };

  const handleBookNow = () => {
    // Check if the user is logged in
    const isLoggedIn = checkUserAuthentication();

    if (!isLoggedIn) {
      // Redirect to login page
      router.push("/auth");
    } else {
      // Store selected product data in sessionStorage
      const selectedProductData = {
        productId: product.id,
        name: product.name,
        price: selectedRamPriceOption.price, // Selected price based on RAM
        color: selectedColorOption.colorName,
        size: selectedRamPriceOption.ram, // Selected RAM option
        imageUrl: selectedColorOption.imageUrls[0], // First image
      };

      sessionStorage.setItem(
        "selectedProduct",
        JSON.stringify(selectedProductData)
      );

      // Redirect to the address page
      router.push("/address");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 px-2 md:px-4 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div
        className="mx-auto my-8 bg-white max-w-4xl w-full h-auto flex flex-col lg:flex-row rounded-lg shadow-lg relative p-4 md:p-5 max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side: Image carousel */}
        <div className="flex-1 flex justify-center items-center relative mb-4 lg:mb-0">
          {/* Previous Button */}
          <button
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            onClick={handlePrevImage}
          >
            &lt;
          </button>

          {/* Current Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src={images[currentImageIndex]}
              alt={`${name} - ${selectedColorOption.colorName}`}
              width={400}
              height={400}
              className="w-full object-contain mx-auto rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            onClick={handleNextImage}
          >
            &gt;
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentImageIndex ? "bg-black" : "bg-gray-400"
                } cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right side: Product info */}
        <div className="flex-1 pb-2">
          <h2 className="text-xl md:text-2xl font-vivoBold text-black text-left">
            {name}
          </h2>
          {/* MRP and Price */}
          <div className=" text-left">
            <p className="text-left text-xl text-[#f10313] font-vivoMedium">
              ₹{selectedRamPriceOption.price}
            </p>
            <p className="text-gray-500">
              MRP (incl.of all taxes): <del>₹{selectedRamPriceOption.mrp}</del>
            </p>
          </div>

          {/* Color Options */}
          <p className="mt-4 text-black text-left text-xs">
            Color:{" "}
            <span className="font-vivoMedium capitalize">
              {selectedColorOption.colorName}
            </span>
          </p>
          <div className="flex mt-2">
            {colorOptions.map((option, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full mr-2 ${
                  selectedColorIndex === index ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: option.colorCode }}
                onClick={() => handleColorChange(index)}
              />
            ))}
          </div>

          {/* Size Options */}
          <p className="mt-4 text-black text-left text-xs">Size:</p>
          <div className="flex mt-2 flex-wrap">
            {ramPriceOptions.map((option, index) => (
              <button
                key={index}
                className={`px-2 py-1 border rounded-lg mr-2 mb-2 ${
                  selectedRamPriceIndex === index
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-black"
                }`}
                onClick={() => handleSizeChange(index)}
              >
                {option.ram}
              </button>
            ))}
          </div>

          {/* Product Details */}
          <ul className="mt-4 md:mt-8 space-y-1 text-sm list-disc list-inside bg-gray-100 p-4 rounded-lg h-32 md:h-40 overflow-auto text-black text-left">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-center md:justify-start items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link
              href="javascript:void(0)"
              className="px-6 md:px-12 text-center py-2.5 border border-blue-500 text-blue-500 rounded-full hover:bg-gray-200"
            >
              Learn more
            </Link>
            <button
              onClick={handleBookNow}
              className="px-6 md:px-12 text-center py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
