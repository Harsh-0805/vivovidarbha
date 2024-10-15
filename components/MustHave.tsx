// components/MustHaveProducts.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ---------------------------
// Interfaces
// ---------------------------
interface Picture {
  url: string;
}

interface ColorPictureOption {
  color: string;
  hexcode: string;
  pictures: Picture[];
}

interface RamPriceOption {
  ram: string;
  price: number;
}

interface Product {
  id: string;
  name: string;
  series: string;
  model: string;
  specialFeature: string;
  ramPriceOptions: RamPriceOption[];
  colorPictureOptions: ColorPictureOption[];
  details: string[];
}

// ---------------------------
// Sample Products Data
// ---------------------------
const bestSellers: Product[] = [
  {
    id: "P389",
    name: "X100",
    series: "X Series",
    model: "X100",
    specialFeature: "3D Curved LTPO AMOLED",
    ramPriceOptions: [
      {
        ram: "12GB+256GB",
        price: 63999,
      },
      {
        ram: "16GB+512GB",
        price: 69999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Stargaze Blue",
        hexcode: "#85bbc9",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737267/BLUE/ws3mbhw6z4t5k6layf19.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737266/BLUE/ueg4cjwl8exvh2qacr8t.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737266/BLUE/d4sl59m0ggsjmvk9zxlf.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737266/BLUE/q5ywsqocjfkzorhir54h.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737265/BLUE/i2ltikx53bqm1poa3hjl.webp",
          },
        ],
      },
      {
        color: "Asteroid Black",
        hexcode: "#4b515c",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737252/bLACK/vzwtm5lwktbyis0v7u0x.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737250/bLACK/tkxcvyvl1hjphesbnctw.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737250/bLACK/wb5ypdwu3co7dwhts1az.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737250/bLACK/ulbe3d5ghj8e3akox4e2.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728737250/bLACK/qpqieppmpmgqa1hgz6md.webp",
          },
        ],
      },
    ],
    details: [
      "Brilliant Display: 6.78 3D Curved LTPO AMOLED with 120Hz refresh rate and 3000 nits brightness.",
      "Advanced Triple Camera: 50MP main (IMX920) + 50MP wide-angle + 64MP ZEISS telephoto with 100x digital zoom.",
      "Powerful Processor: Dimensity 9300 5G for ultra-fast performance.",
      "Massive Storage: 512GB ROM with 16GB extended RAM.",
      "Long-lasting Battery: 5000mAh with 120W fast charging for quick power-ups.",
      "Water-resistant: IP68 rating for dust and water protection.",
      "Premium Build: Slim design at 8.49mm and weighs 206g.",
    ],
  },
  // Add more Best Sellers products here if needed
];

const latestProducts: Product[] = [
  {
    id: "P390",
    name: "X100 Pro",
    series: "X Series",
    model: "X100 Pro",
    specialFeature: "Quantum Dot OLED Display",
    ramPriceOptions: [
      {
        ram: "16GB+512GB",
        price: 89999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Aesteroid Black",
        hexcode: "#4b515c",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484904/x100%20pro/gwdtno9reycw9azgbgbq.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484903/x100%20pro/t20ktmlgmzq52zvilbtz.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484902/x100%20pro/ejxqqzebscfptjtpxjtq.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484901/x100%20pro/ratrzxbuijwzlt2upuck.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484902/x100%20pro/zfrjfxzp6b9hgqc9hyfz.webp",
          },
        ],
      },
    ],
    details: [
      "High-performance Processor: Dimensity 9300 5G for seamless multitasking and gaming.",
      "Ample Storage: 512GB ROM with 16GB extended RAM.",
      "Quick Charging: 100W flash charging and 50W wireless charging.",
      "Water-resistant: IP68 rating for protection against water and dust.",
      "Sleek Design: 8.91mm thickness and weighs 225g.",
    ],
  },
  {
    id: "P149",
    name: "X Fold 3 Pro",
    series: "X Series",
    model: "X Fold 3 Pro",
    specialFeature: "8 inch Foldable AMOLED",
    ramPriceOptions: [
      {
        ram: "16GB+512GB",
        price: 159999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Celestial Black",
        hexcode: "#000000",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732396/X%20Fold3%20Pro/Black/mq3yukhimygpdw7s0bns.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732396/X%20Fold3%20Pro/Black/djs5gxyak1ddaf8ogrm2.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732395/X%20Fold3%20Pro/Black/lvecdiob1vteup4sxbnz.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732395/X%20Fold3%20Pro/Black/lomgj06rkbbbfrkx1ngk.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732394/X%20Fold3%20Pro/Black/hzaydqn0qi8nlgvwro9d.webp",
          },
        ],
      },
      {
        color: "Lunar White",
        hexcode: "#FFFFFF",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732394/X%20Fold3%20Pro/White/wmgyauwonttqtlmwlvbi.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732394/X%20Fold3%20Pro/White/jmmzzhxunx4hgtcc5dpl.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732393/X%20Fold3%20Pro/White/dq7nfsi195b9rawtk2hr.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732393/X%20Fold3%20Pro/White/pxfgxyfftgy9n6h0wpth.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728732393/X%20Fold3%20Pro/White/mebwr8fs6vsvmrdckyfv.webp",
          },
        ],
      },
    ],
    details: [
      "High-resolution Front Camera: 32MP front camera with Super Night Selfie, Aura Screen Light, and cinematic video options for perfect selfies.",
      "Massive Storage & Performance: 16GB RAM + 512GB ROM with Extended RAM 3.0 for seamless multitasking. Powered by Snapdragon 8 Gen3, delivering top-tier performance.",
      "Battery & Charging: 5700mAh battery for long-lasting power. Supports 100W Flash Charge and 50W Wireless Charging for quick and efficient charging.",
      "Durability & Design : IPX8 water resistance, ensuring protection against water exposure. Slim build with 11.2mm thickness when folded and just 5.2mm when unfolded. Weighs 236g, combining sturdiness with portability.",
    ],
  },
];

// ---------------------------
// ProductCard Component
// ---------------------------
interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { name, colorPictureOptions, ramPriceOptions, specialFeature } =
    product;
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedRamPriceIndex, setSelectedRamPriceIndex] = useState(0);

  const selectedColorOption = colorPictureOptions[selectedColorIndex];
  const selectedRamPriceOption = ramPriceOptions[selectedRamPriceIndex];

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 w-full">
      <div className="flex w-full h-[200px] justify-center items-center mb-4">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={selectedColorOption.pictures[0].url} // Use the first image URL
            alt={`${name} - ${selectedColorOption.color}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Color Options */}
      <div className="flex justify-center space-x-2 mb-4">
        {colorPictureOptions.map((option, index) => (
          <span
            key={index}
            className={`h-5 w-5 rounded-full cursor-pointer border ${
              index === selectedColorIndex
                ? "border-blue-600"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: option.hexcode }}
            onClick={() => setSelectedColorIndex(index)}
          ></span>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mb-2">
        <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">
          {specialFeature}
        </span>
      </div>

      {/* Product Details */}
      <h3 className="text-left px-4 text-md font-vivoRegular">{name}</h3>
      <p className="text-left px-4 text-gray-700">
        ₹{selectedRamPriceOption.price}
      </p>
      <div className="flex justify-end px-4 space-x-4 mt-4">
        <button
          onClick={() => onOpenModal(product)}
          className="text-blue-600 flex items-center"
        >
          Book now
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3V3.75V3ZM15 3V2.25V3ZM21 9H21.75H21ZM21 15H20.25H21ZM15 21V21.75V21ZM14 21V20.25V21ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.6648 20.1977L16.7822 20.9384ZM16.7822 3.06156L16.8995 2.32079L16.8995 2.32079L16.7822 3.06156ZM20.9384 7.21783L21.6792 7.1005V7.1005L20.9384 7.21783ZM10.5496 3.39996C10.2184 3.64873 10.1516 4.11888 10.4003 4.45007C10.6491 4.78126 11.1192 4.84808 11.4504 4.59931L10.5496 3.39996ZM11.4504 19.4007C11.1192 19.1519 10.6491 19.2187 10.4003 19.5499C10.1516 19.8811 10.2184 20.3513 10.5496 20.6L11.4504 19.4007ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75L3 11.25ZM16 12V11.25V12ZM12.534 15.4123C12.2095 15.6697 12.155 16.1414 12.4123 16.466C12.6697 16.7905 13.1414 16.845 13.466 16.5877L12.534 15.4123ZM14.763 14.6022L14.297 14.0145L14.763 14.6022ZM14.763 9.39785L14.297 9.98553L14.763 9.39785ZM13.466 7.41232C13.1414 7.15497 12.6697 7.20946 12.4123 7.53403C12.155 7.8586 12.2095 8.33034 12.534 8.58768L13.466 7.41232ZM16.9801 12.2507L17.7208 12.3687L17.7208 12.3687L16.9801 12.2507ZM16.9801 11.7493L17.7208 11.6313L17.7208 11.6313L16.9801 11.7493ZM14 3.75L15 3.75V2.25L14 2.25V3.75ZM20.25 9V15H21.75V9H20.25ZM15 20.25H14V21.75H15V20.25ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM15 3.75C15.9577 3.75 16.3492 3.75233 16.6648 3.80232L16.8995 2.32079C16.4378 2.24767 15.9003 2.25 15 2.25V3.75ZM21.75 9C21.75 8.09965 21.7523 7.56216 21.6792 7.1005L20.1977 7.33515C20.2477 7.65082 20.25 8.04233 20.25 9H21.75ZM16.6648 3.80232C18.4834 4.09035 19.9096 5.51661 20.1977 7.33515L21.6792 7.1005C21.2895 4.64012 19.3599 2.71048 16.8995 2.32079L16.6648 3.80232ZM14 2.25C12.7064 2.25 11.5106 2.67806 10.5496 3.39996L11.4504 4.59931C12.1607 4.06583 13.0424 3.75 14 3.75V2.25ZM14 20.25C13.0424 20.25 12.1607 19.9342 11.4504 19.4007L10.5496 20.6C11.5106 21.3219 12.7064 21.75 14 21.75V20.25ZM3 12.75L16 12.75V11.25L3 11.25L3 12.75ZM13.466 16.5877L15.2289 15.1898L14.297 14.0145L12.534 15.4123L13.466 16.5877ZM15.2289 8.81016L13.466 7.41232L12.534 8.58768L14.297 9.98553L15.2289 8.81016ZM15.2289 15.1898C15.9176 14.6438 16.4852 14.1953 16.8875 13.7945C17.2932 13.3904 17.6294 12.9418 17.7208 12.3687L16.2395 12.1327C16.2225 12.2388 16.1532 12.4087 15.8289 12.7318C15.5012 13.0582 15.0143 13.4457 14.297 14.0145L15.2289 15.1898ZM14.297 9.98553C15.0143 10.5543 15.5012 10.9418 15.8289 11.2682C16.1532 11.5913 16.2225 11.7612 16.2395 11.8673L17.7208 11.6313C17.6294 11.0582 17.2932 10.6096 16.8875 10.2055C16.4852 9.80475 15.9175 9.35616 15.2289 8.81016L14.297 9.98553ZM17.7208 12.3687C17.7402 12.2466 17.75 12.1234 17.75 12H16.25C16.25 12.0441 16.2465 12.0883 16.2395 12.1327L17.7208 12.3687ZM17.75 12C17.75 11.8766 17.7402 11.7534 17.7208 11.6313L16.2395 11.8673C16.2465 11.9117 16.25 11.9559 16.25 12H17.75ZM16 12.75H17V11.25H16V12.75Z"
                fill="#2563eb"
              />
            </svg>
          </div>
        </button>
        {/* <Link */}
        {/* href={`../product/${product.id}`} */}
        {/* // href="./address" */}
        {/* className="text-blue-600 flex items-center" */}
        {/* > */}
        {/* Book Now */}
        {/*  */}
        {/* </Link> */}
      </div>
    </div>
  );
};

// ---------------------------
// ModalComponent
// ---------------------------
interface ModalProps {
  product: Product;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ product, onClose }) => {
  const { name, colorPictureOptions, ramPriceOptions, details } = product;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedRamPriceIndex, setSelectedRamPriceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedColorOption = colorPictureOptions[selectedColorIndex];
  const selectedRamPriceOption = ramPriceOptions[selectedRamPriceIndex];

  const images = selectedColorOption.pictures;

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0); // Reset image index when color changes
  };

  const handleRamPriceChange = (index: number) => {
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
    // Ensure the modal doesn't close when clicking inside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Function to check user authentication
  const checkUserAuthentication = (): boolean => {
    const token = localStorage.getItem("authToken");
    return !!token;
  };

  const router = useRouter();

  const handleBookNow = () => {
    const isLoggedIn = checkUserAuthentication();

    // if (!isLoggedIn) {
    //   // Redirect to login page with redirect back to address page after login
    //   router.push({
    //     pathname: "/login",
    //     query: { redirect: "/address" },
    //   });
    // } else {
    // Store selected product data in sessionStorage
    const selectedProductData = {
      productId: product.id,
      name: product.name,
      price: selectedRamPriceOption.price,
      color: selectedColorOption.color,
      size: selectedRamPriceOption.ram,
    };
    sessionStorage.setItem(
      "selectedProduct",
      JSON.stringify(selectedProductData)
    );
    // Redirect to Address page
    router.push("/address");
    // }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-4 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white max-w-4xl w-full h-auto flex flex-col lg:flex-row rounded-lg shadow-lg relative p-4 md:p-5 max-h-screen overflow-y-auto"
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
              src={images[currentImageIndex].url}
              alt={`${name} - ${selectedColorOption.color}`}
              width={400}
              height={400}
              className="w-full h-auto object-contain mx-auto rounded-lg"
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
          <p className="text-xs text-black text-left">
            MRP (Inclusive of all taxes)
          </p>
          <p className="text-2xl md:text-3xl font-vivoRegular text-black mt-2 text-left">
            ₹{selectedRamPriceOption.price.toLocaleString()}
          </p>

          {/* Color Options */}
          <p className="mt-4 text-black text-left text-xs">
            Color:{" "}
            <span className="font-vivoMedium capitalize">
              {selectedColorOption.color}
            </span>
          </p>
          <div className="flex mt-2">
            {colorPictureOptions.map((option, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full mr-2 ${
                  selectedColorIndex === index ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: option.hexcode }}
                onClick={() => handleColorChange(index)}
              />
            ))}
          </div>

          {/* RAM and Price Options */}
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
                onClick={() => handleRamPriceChange(index)}
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
              href="#"
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

// ---------------------------
// MustHaveProducts Component
// ---------------------------
const MustHaveProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Best Sellers" | "Latest Products"
  >("Best Sellers");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const router = useRouter();

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Conditional select products based on the active tab
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

      <div className="sm:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow w-full max-w-[400px] h-auto rounded-3xl hover:shadow-lg"
          >
            <ProductCard product={product} onOpenModal={handleOpenModal} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ModalComponent product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MustHaveProducts;
