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
  mrp: number;
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
    id: "P127",
    name: "Y300 Plus 5G",
    series: "Y Series",
    model: "Y300 Plus 5G",
    specialFeature: "6.78' 3D curved display",
    ramPriceOptions: [
      {
        ram: "8GB+128GB",
        price: 23999,
        mrp: 29999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Silk Black",
        hexcode: "#000000",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274375/61sBSKyLxXL._SX679__cpyg4y.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274375/61jbdKeRWLL._SX679__vthjgc.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274375/418XY6ssoRL._SX679__vxtjqv.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274374/51aTToNC1tL._SX679__koxiny.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274376/71D_hKN2VmL._SX679__onfr2r.jpg",
          },
        ],
      },
      {
        color: "Silk Green",
        hexcode: " #ccdc9d",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274417/61Vv9HSxhGL._SX679__an2xjs.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274417/515mvaMstAL._SX679__cjbs5o.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274415/51VFablNHeL._SX679__os3afq.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274414/41Pa98cmbAL._SX679__rchtio.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274376/71D_hKN2VmL._SX679__onfr2r.jpg",
          },
        ],
      },
    ],
    details: [
      "Full-HD+ resolution with a smooth 120Hz refresh rate for enhanced visuals.",
      "Dual Rear Camera: 50MP + 2MP for stunning photos",
      "Front Camera: 32MP Ultra Clear Selfie",
      "All-day Power: 5000mAh battery with fast charging",
      "Ample Storage: 128GB expandable to 1TB",
      "Smooth Performance: Snapdragon 695 Oct-core processor",
      "Fast Charging: 44W for quick power-ups",
    ],
  },
  {
    id: "P126",
    name: "Y200 Pro 5G",
    series: "Y Series",
    model: "Y200 Pro 5G",
    specialFeature: "3D Curved AMOLED Display",
    ramPriceOptions: [
      {
        ram: "8GB+128GB",
        price: 24999,
        mrp: 29999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Silk Black",
        hexcode: "#000000",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484975/Y200%20Pro/Silk%20Black/kclto1uqga9hsvqwhpy9.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484975/Y200%20Pro/Silk%20Black/gamv7ffevuag1cima8qn.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484974/Y200%20Pro/Silk%20Black/hu2yn0g5gtndjj7d6sgg.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484973/Y200%20Pro/Silk%20Black/mpxvsmvpgusz3tzqvgco.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484973/Y200%20Pro/Silk%20Black/sgzmqmhomrmkbwaok47a.jpg",
          },
        ],
      },
      {
        color: "Silk Green",
        hexcode: " #ccdc9d",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484979/Y200%20Pro/Silk%20Green/od0tbqo1wxmnkbhgznuu.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484979/Y200%20Pro/Silk%20Green/q3suhpdxghlyhny6uhaj.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484978/Y200%20Pro/Silk%20Green/ic9vo48stb4aovnkzoun.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484977/Y200%20Pro/Silk%20Green/ylwn3hwguxcuddabqd2m.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728484976/Y200%20Pro/Silk%20Green/jf7e90nh54jnoxhraqpp.jpg",
          },
        ],
      },
    ],
    details: [
      'Curved AMOLED Display: 6.72" 3D Curved, 120Hz, 1300 nits brightness',
      "Dual Rear Camera: 64MP + 2MP for stunning photos",
      "All-day Power: 5000mAh battery with fast charging",
      "Ample Storage: 128GB expandable to 1TB",
      "Smooth Performance: Snapdragon 695 processor for lag-free experience",
      "Fast Charging: 44W for quick power-ups",
      "Slim Design: Thin 7.42mm build and weighs 172g",
    ],
  },
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
        mrp: 68999,
      },
      {
        ram: "16GB+512GB",
        price: 69999,
        mrp: 74999,
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
];

const latestProducts: Product[] = [
  {
    id: "P520",
    name: "V40 5G",
    series: "V Series",
    model: "V40",
    specialFeature: "Snapdragon 7 Gen 3",
    ramPriceOptions: [
      {
        ram: "8GB+128GB",
        price: 34999,
        mrp: 39999,
      },
      {
        ram: "8GB+256GB",
        price: 36999,
        mrp: 42999,
      },
      {
        ram: "12GB+512GB",
        price: 41999,
        mrp: 48999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Lotus Purple",
        hexcode: "#685677 ",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479419/V40/Lotus%20Purple/xd9fe5f7308itprvgz1i.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479418/V40/Lotus%20Purple/i5tlvdtljlus3inmywlm.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479417/V40/Lotus%20Purple/rrlkjgotva1jv3nlfuev.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479417/V40/Lotus%20Purple/zgv0sgkooxlyi3cgdp6j.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479417/V40/Lotus%20Purple/pnikrinorrb49ittpmhl.jpg",
          },
        ],
      },
      {
        color: "Ganges Blue",
        hexcode: "#96bcb8",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479422/V40/Ganges%20Blue/gmsucwblgjhi4wttczk8.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479421/V40/Ganges%20Blue/f9ndhqxovwtpghngdtg8.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479420/V40/Ganges%20Blue/vbav2nizirwraequwohu.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479420/V40/Ganges%20Blue/i9f4ey6ax1bmhudokpnz.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728479419/V40/Ganges%20Blue/o5lrca8gphif7sbhm7ql.jpg",
          },
        ],
      },
      {
        color: "Titanium Grey",
        hexcode: "#989009",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728843273/V40/Titanium%20Grey/ieakqec4ibeblczii2ft.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728843273/V40/Titanium%20Grey/ywdnt5yuhgurwzbigbw2.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728843273/V40/Titanium%20Grey/mdmdc3ghogqplbbytnxe.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728843273/V40/Titanium%20Grey/heanu7qsl8so6emqyqeq.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728843273/V40/Titanium%20Grey/asyhzd9dqcrsv7slv097.webp",
          },
        ],
      },
    ],
    details: [
      "Stunning 6.78 AMOLED Display: High-resolution FHD+ (2800 × 1260) display with capacitive multi-touch for vibrant visuals and smooth interaction.",
      "Powerful Triple Camera System: 50MP main + 50MP wide-angle (ZEISS) rear cameras and 50MP front camera for professional-quality photos and videos.",
      "Performance Boost: Qualcomm Snapdragon 7 Gen 3 processor paired with 8GB or 12GB RAM for seamless multitasking and gaming.",
      "All-day Battery: 5500mAh battery with 80W fast charging to keep you powered throughout the day.",
      "Generous Storage: Options for 128GB, 256GB, and 512GB of internal storage for all your apps, photos, and files.",
      "In-display Fingerprint Sensor: Fast, secure unlocking with an optical in-display fingerprint sensor.",
      "Elegant Colors: Available in Ganges Blue, Lotus Purple, and Titanium Grey for a sleek, stylish look.",
    ],
  },
  {
    id: "P940",
    name: "V40 Pro 5G",
    series: "V Series",
    model: "V40 Pro",
    specialFeature: "Mediatek Processor",
    ramPriceOptions: [
      {
        ram: "8GB+256GB",
        price: 49999,
        mrp: 54999,
      },
      {
        ram: "12GB+512GB",
        price: 55999,
        mrp: 60999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Titanium Grey",
        hexcode: "#6c7073",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482652/V40%20Pro/wxkrqa9th7ggus5oqner.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482652/V40%20Pro/afjxohokotovzaar7olf.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482651/V40%20Pro/baru2e4cshupgs33jxmo.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728834558/V40%20Pro/whmb6pgfaz4ryokkjsdn.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728834558/V40%20Pro/imtjvaqcpojdfqgjtqnt.webp",
          },
        ],
      },
      {
        color: "Ganges Blue",
        hexcode: "#96bcb8",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482654/V40%20Pro/ccfihznun0jremgsfp59.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482653/V40%20Pro/wmluhueqymmzvb2vm93p.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482653/V40%20Pro/djaksy4w0d3qp8dc9ety.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482650/V40%20Pro/acwkbo4y6yc8lhb7kzvs.jpg",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1728482650/V40%20Pro/rkkdz2uutljtv2ad7gwo.jpg",
          },
        ],
      },
    ],
    details: [
      "Stunning 6.78 AMOLED Display: High-resolution FHD+ (2800 × 1260) display with vibrant colors and sharp visuals.",
      "Triple ZEISS Camera System: 50MP main, 50MP wide-angle, and 50MP telephoto with OIS and up to 50x digital zoom for pro-grade photography.",
      "Powerful Performance: MediaTek Dimensity 9200+ processor with options for 8GB or 12GB RAM, ensuring fast performance.",
      "All-day Battery: 5500mAh battery with 80W fast charging for minimal downtime.",
      "Ample Storage: 256GB or 512GB of internal storage, ideal for heavy users.",
      "In-display Fingerprint Sensor: Fast and secure unlocking with an optical in-display fingerprint sensor.",
      "Elegant Design: Lightweight (192g) with a sleek glass body, available in Ganges Blue and Titanium Grey.",
    ],
  },
  {
    id: "P941",
    name: "V40e 5G",
    series: "V Series",
    model: "V40e",
    specialFeature: "4K Video Camera",
    ramPriceOptions: [
      {
        ram: "8GB+128GB",
        price: 28999,
        mrp: 33999,
      },
      {
        ram: "8GB+256GB",
        price: 30999,
        mrp: 35999,
      },
    ],
    colorPictureOptions: [
      {
        color: "Mint Green",
        hexcode: "#d5e5d9",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273388/zz146ztcykgsfxhw6xvs.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273388/guwqh9eljlewqunlgnos.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273387/hakahs266uucyyhzh2is.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273387/srb6s6bh5lxkmv7a9bit.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273387/v9qfstfnvrsap29iiveb.webp",
          },
        ],
      },
      {
        color: "Royal Bronze",
        hexcode: "#b48e81",
        pictures: [
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273919/v40e/msyehmshtwqxgwmkk6sy.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729273919/v40e/h0fdeqhdsvz56unymmtv.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274120/v40e/ulu2ojovyxptyzbhlfw9.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274120/v40e/khsgzxfzxvvsnfnftfmj.webp",
          },
          {
            url: "https://res.cloudinary.com/dgyc9r5ye/image/upload/v1729274120/v40e/hd4f6umiyokrubjrzrcx.webp",
          },
        ],
      },
    ],
    details: [
      "6.77' FHD+ AMOLED Display: Stunning visuals with 2392 x 1080 resolution and smooth multi-touch interaction.",
      "50MP Rear Camera: Sony IMX882 OIS Main Camera + 8MP Ultra Wide-Angle for clear and stable photography.",
      "50MP Selfie Camera: Ultra Wide-Angle front camera with autofocus for detailed selfies",
      "Powerful Performance: MediaTek Dimensity 7300 processor with 8GB RAM and up to 256GB storage",
      "All-day Battery: 5500mAh battery with 80W fast charging for minimal downtime",
      "In-display Fingerprint Sensor: Fast, secure optical fingerprint unlocking",
      "Elegant Colors: Available in Royal Bronze and Mint Green for a sleek look",
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
      {/* MRP and Price */}
      <div className="px-4 text-left">
        <p className="text-left text-xl text-blue-500 font-vivoMedium">
          ₹{selectedRamPriceOption.price}
        </p>
        <p className="text-gray-500">
          MRP (incl.of all taxes):{" "}
          <del className="text-[#f10313]">₹{selectedRamPriceOption.mrp}</del>
        </p>
      </div>
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
        color: selectedColorOption.color,
        size: selectedRamPriceOption.ram, // Selected RAM option
        imageUrl: selectedColorOption.pictures[0], // First image
      };

      sessionStorage.setItem(
        "selectedProduct",
        JSON.stringify(selectedProductData)
      );

      // Redirect to the address page
      router.push("/products");
    }
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
          <div className="w-full max-w-[400px] h-[400px] mx-auto">
            <Image
              src={images[currentImageIndex].url}
              alt={`${name} - ${selectedColorOption.color}`}
              width={400} // Fixed width
              height={400} // Fixed height
              objectFit="contain" // Ensure image fits within the container
              className="w-fit h-full mx-auto rounded-lg" // Enforce the image to fully fit inside the div
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
          <div className=" text-left">
            <p className="text-left text-xl text-blue-500 font-vivoMedium">
              ₹{selectedRamPriceOption.price}
            </p>
            <p className="text-gray-500">
              MRP (incl.of all taxes):{" "}
              <del className="text-[#f10313]">
                ₹{selectedRamPriceOption.mrp}
              </del>
            </p>
          </div>

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
          {/* <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4"> */}
          {/* <Link
              href="javascript:void(0)"
              className="px-6 md:px-12 text-center py-2.5 border border-blue-500 text-blue-500 rounded-full hover:bg-gray-200"
            >
              Learn more
            </Link> */}
          <button
            onClick={handleBookNow}
            className="px-[3rem] mt-4 w-full md:px-[5rem] text-center py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Book Now
          </button>
          {/* </div> */}
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

      <div className="sm:px-20 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
