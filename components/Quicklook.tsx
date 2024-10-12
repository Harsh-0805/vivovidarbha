import Image from "next/image";
import React, { useState } from "react";
import blue2 from "@/public/assets/ganges-blue2.jpg";
import blue1 from "@/public/assets/ganges-blue1.jpg";
import blue3 from "@/public/assets/ganges-blue3.jpg";
import blue4 from "@/public/assets/ganges-blue4.jpg";
import blue5 from "@/public/assets/ganges-blue5.jpg";
import grey1 from "@/public/assets/grey1.jpg";
import grey2 from "@/public/assets/grey2.jpg";
import grey3 from "@/public/assets/grey3.jpg";
import grey4 from "@/public/assets/grey4.jpg";
import grey5 from "@/public/assets/grey5.jpg";
import Link from "next/link";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  // Image paths as per the provided structure
  const images = {
    blue: [blue1, blue2, blue3, blue4, blue5],
    grey: [grey1, grey2, grey3, grey4, grey5],
  };

  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("8GB RAM + 256GB");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [price, setPrice] = useState(49999);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setPrice(size === "8GB RAM + 256GB" ? 49999 : 54999);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setCurrentImageIndex(0); // Reset carousel when changing color
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % images[selectedColor].length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images[selectedColor].length - 1 : prevIndex - 1
    );
  };
  // Close modal when clicking outside the modal container
  const handleOverlayClick = (event: React.MouseEvent) => {
    // Ensure the modal doesn't close when clicking inside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white max-w-4xl w-full h-auto flex rounded-lg shadow-lg relative p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side: Image carousel */}
        <div className="flex-1 flex justify-center items-center relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            onClick={handlePrevImage}
          >
            &lt;
          </button>
          <div>
            <Image
              src={images[selectedColor][currentImageIndex]}
              alt={`Product ${selectedColor}`}
              width={200}
              height={200}
              className="w-[80%] h-[80%] object-contain mx-auto rounded-lg"
            />
          </div>
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            onClick={handleNextImage}
          >
            &gt;
          </button>
          <div className="absolute bottom-4 w-full flex justify-center">
            {images[selectedColor].map((_, index) => (
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
          <h2 className="text-2xl font-vivoBold text-black text-left">
            Vivo V40 Pro 5G AI Smartphone
          </h2>
          <p className="text-xs text-black text-left">
            MRP(Inclusive of all taxes)
          </p>
          <p className="text-3xl font-vivoRegular text-black mt-2 text-left">
            ₹{price.toLocaleString()}
          </p>

          <p className="mt-4 text-black text-left text-xs">
            Color:{" "}
            <span className="font-vivoMedium capitalize">{selectedColor}</span>
          </p>
          <div className="flex mt-2">
            <button
              className={`w-8 h-8 rounded-full mr-2 ${
                selectedColor === "blue" ? "border-2 border-black" : ""
              }`}
              style={{ backgroundColor: "#8fbcd4" }}
              onClick={() => handleColorChange("blue")}
            />
            <button
              className={`w-8 h-8 rounded-full ${
                selectedColor === "grey" ? "border-2 border-black" : ""
              }`}
              style={{ backgroundColor: "#a0a0a0" }}
              onClick={() => handleColorChange("grey")}
            />
          </div>

          <p className="mt-4 text-black text-left text-xs">Size:</p>
          <div className="flex mt-2">
            <button
              className={`px-4 py-2 border rounded-lg mr-2 ${
                selectedSize === "8GB RAM + 256GB"
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-300 text-black"
              }`}
              onClick={() => handleSizeChange("8GB RAM + 256GB")}
            >
              8GB RAM+256GB
            </button>
            <button
              className={`px-4 py-2 border rounded-lg ${
                selectedSize === "12GB RAM + 512GB"
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-300 text-black"
              }`}
              onClick={() => handleSizeChange("12GB RAM + 512GB")}
            >
              12GB RAM+512GB
            </button>
          </div>

          <ul className="mt-8 space-y-1 text-sm list-disc list-inside bg-gray-100 p-4 rounded-lg h-40 overflow-auto text-black text-left">
            <li>ZEISS Multifocal Portrait</li>
            <li>ZEISS Style Portrait</li>
            <li>Ultra-Slim 3D Curved Display</li>
            <li>ZEISS Cinematic Portrait Video</li>
            <li>ZEISS Telephoto Portrait Camera</li>
            <li>India&apos;s slimmest smartphone in the 5500</li>
            <li>IP68 Dust & Water Resistance</li>
            <li>AI Eraser</li>
          </ul>

          <div className="mt-6 justify-evenly flex space-x-4">
            <Link
              href=""
              className="px-12 text-center py-2.5 border border-blue-500 text-blue-500 rounded-full hover:bg-gray-200"
            >
              Learn more
            </Link>
            <Link
              href="/address"
              className="px-12 text-center py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Book Now
            </Link>
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
