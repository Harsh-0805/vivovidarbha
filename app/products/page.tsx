"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Quicklook";
import Image from "next/image";
import Link from "next/link";
import ContentLoader from "react-content-loader";

// Define the interfaces
// Update the ColorOption interface
interface ColorOption {
  colorName: string; // From "color" in backend data
  colorCode: string; // From "hexcode" in backend data
  imageUrls: string[]; // Array of image URLs from "pictures"
}

// Add a new interface for RAM and Price options
interface RamPriceOption {
  ram: string; // From "ram" in backend data
  price: number; // From "price" in backend data
  mrp: number; // From "price" in backend data
}

type CompareInfo = {
  price: string;
  screenSize: string;
  rearCamera: string;
  frontCamera: string;
  ramRom: string;
  processor: string;
  battery: string;
  fastCharging: string;
  fiveg: string;
};

// Update the Product interface
export interface Product {
  _id: string;
  id: string;
  name: string;
  series: string;
  specialFeature: string;
  model: string;
  ramPriceOptions: RamPriceOption[];
  colorOptions: ColorOption[];
  details: string[];
  compare: CompareInfo[];
}

interface ProductCardProps {
  product: Product;
  onQuickLook: (product: Product) => void;
}

// Skeleton Loader for Product Card
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-3xl shadow-md p-4 w-auto">
    <ContentLoader
      speed={2}
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
      <rect x="160" y="15" rx="5" ry="5" width="150" height="20" />
      <rect x="160" y="50" rx="5" ry="5" width="150" height="20" />
      <rect x="160" y="80" rx="5" ry="5" width="80" height="20" />
    </ContentLoader>
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickLook }) => {
  const { name, colorOptions, ramPriceOptions, specialFeature } = product || {};
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedRamPriceIndex, setSelectedRamPriceIndex] = useState(0);

  const selectedColorOption = colorOptions?.[selectedColorIndex] || {};
  const selectedRamPriceOption = ramPriceOptions?.[selectedRamPriceIndex] || {};

  // State to manage loading status
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false); // Wishlist state

  useEffect(() => {
    // Simulate loading with a timeout (replace this with actual API call)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Add to wishlist function
  const toggleWishlist = () => {
    setIsWishlisted((prevState) => !prevState); // Toggle wishlist status
    // You could make an API call here to persist the wishlist status if needed
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 w-full">
      {!loading && (
        <>
          <div className="relative bg-white p-4 w-full">
            {/* Image and Wishlist Icon */}
            <div className="flex w-full h-[200px] justify-center items-center mb-4">
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={
                    selectedColorOption.imageUrls?.[0] || "/fallback-image.jpg"
                  }
                  alt={`${name} - ${selectedColorOption.colorName}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Wishlist Icon */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={toggleWishlist}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isWishlisted ? "red" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3115 4.46071C17.9773 2.08032 15.2743 3.08425 13.6007 4.14593C12.655 4.74582 11.345 4.74582 10.3993 4.14593C8.72564 3.08427 6.02272 2.08035 3.68853 4.46072C-1.85249 10.1114 7.64988 21 12 21C16.3502 21 25.8525 10.1114 20.3115 4.46071Z"
                    stroke="red"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Color Options */}
          <div className="flex justify-center space-x-2 mb-4">
            {colorOptions?.map((option, index) => (
              <span
                key={index}
                className={`h-5 w-5 rounded-full cursor-pointer border ${
                  index === selectedColorIndex
                    ? "border-blue-600"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: option.colorCode }}
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
            <p className="text-left text-xl text-[#f10313] font-vivoMedium">
              ₹{selectedRamPriceOption.price}
            </p>
            <p className="text-gray-500">
              MRP (incl.of all taxes): <del>₹{selectedRamPriceOption.mrp}</del>
            </p>
          </div>

          {/* Wishlist and Book Now Buttons */}
          <div className="flex justify-end items-center mt-2">
            <div className="text-blue-600 flex items-center">
              <button
                onClick={() => onQuickLook(product)}
                className="text-blue-600 flex items-center"
              >
                Book now
              </button>
              <div className="ml-1">
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

interface TabContent {
  [key: string]: string;
}

const TabbedNavigationWithFilter: React.FC = () => {
  const [activeModel, setActiveModel] = useState<string>("All Models");
  const [selectedModel, setSelectedModel] = useState<string>("All Models");
  const [sortOption, setSortOption] = useState<string>(
    "Price (Lowest to Highest)"
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://vivo-project-backend.vercel.app/products"
        );
        const data = await response.json();

        // Map backend data to match your interfaces
        const mappedProducts = data.map((product: any) => {
          // Handle missing 'ramPriceOptions'
          const ramPriceOptions = product.ramPriceOptions || [];

          // Handle missing 'colorPictureOptions'
          const colorOptionsData = product.colorPictureOptions || [];

          const colorOptions = colorOptionsData.map((colorOption: any) => ({
            colorName: colorOption.color,
            colorCode: colorOption.hexcode,
            imageUrls: colorOption.pictures.map((picture: any) => picture.url),
          }));

          return {
            ...product,
            ramPriceOptions,
            colorOptions,
          };
        });

        setProducts(mappedProducts);
        setLoading(false);
        console.log(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Define the content for each tab
  const tabContent: TabContent = {
    "All Models": "Detailed content for All Models...",
    "X Series": "Content for X Series",
    "V Series": "Content for V Series",
    "Y Series": "Content for Y Series",
    Accessories: "Content for Accessories",
    Compare: "Compare models",
  };

  // State for controlling the expanded/collapsed sections of the filter
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    Models: false,
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

  const resetFilters = () => {
    setSelectedPrice("");
    setSelectedCamera("");
    setSelectedRAM("");
    setSelectedStorage("");
    setSelectedBattery("");
    setSelectedModel("All Models"); // If you want to reset the model as well
    setIsFilterOpen(!isFilterOpen);
  };

  // const [modalVisible, setModalVisible] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile filter toggle

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

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Adjusted sorting function in your code
  const filteredProducts = products
    .filter((product) => {
      // **Model Filter**
      if (selectedModel !== "All Models" && product.series !== selectedModel) {
        return false;
      }

      // **Price Filter**
      if (selectedPrice) {
        const priceRanges: { [key: string]: [number, number] } = {
          "Upto ₹10,000": [0, 10000],
          "₹10,000 to ₹20,000": [10000, 20000],
          "₹20,000 to ₹30,000": [20000, 30000],
          "₹30,000 to ₹40,000": [30000, 40000],
          "₹40,000 to ₹50,000": [40000, 50000],
          "Above ₹50,000": [50000, Infinity],
        };
        const [minPrice, maxPrice] = priceRanges[selectedPrice];

        // Check if any of the product's price options fall within the selected price range
        const hasPriceInRange = product.ramPriceOptions.some(
          (option) => option.price >= minPrice && option.price <= maxPrice
        );
        if (!hasPriceInRange) {
          return false;
        }
      }

      // **RAM Filter**
      if (selectedRAM) {
        // Extract numeric value from RAM string (e.g., "4 GB" -> 4)
        const selectedRAMValue = parseInt(selectedRAM);
        const hasSelectedRAM = product.ramPriceOptions.some((option) => {
          const ramValue = parseInt(option.ram);
          return ramValue === selectedRAMValue;
        });
        if (!hasSelectedRAM) {
          return false;
        }
      }

      // **Storage Filter**
      if (selectedStorage) {
        const selectedStorageValue = parseInt(selectedStorage);
        const hasSelectedStorage = product.ramPriceOptions.some((option) => {
          const storageMatch = option.ram.match(/\+(\d+)/);
          if (storageMatch) {
            const storageValue = parseInt(storageMatch[1]);
            return storageValue === selectedStorageValue;
          }
          return false;
        });
        if (!hasSelectedStorage) {
          return false;
        }
      }

      // **Battery Filter**
      if (selectedBattery) {
        // Assuming battery information is in `details`
        // We'll need to parse `details` to find battery capacity
        const selectedBatteryValue = parseInt(selectedBattery);
        const hasSelectedBattery = product.details.some((detail) => {
          const batteryMatch = detail.match(/(\d+)\s*mAh/i);
          if (batteryMatch) {
            const batteryValue = parseInt(batteryMatch[1]);
            return batteryValue === selectedBatteryValue;
          }
          return false;
        });
        if (!hasSelectedBattery) {
          return false;
        }
      }

      // **Camera Filter**
      if (selectedCamera) {
        // Define camera ranges
        const cameraRanges: { [key: string]: [number, number] } = {
          "Basic Camera (Up to 12 MP)": [0, 12],
          "Standard Camera (13 MP - 32 MP)": [13, 32],
          "High-Resolution Camera (33 MP - 50 MP)": [33, 50],
          "Pro Camera (Above 50 MP)": [51, Infinity],
        };
        const [minMP, maxMP] = cameraRanges[selectedCamera];

        const hasCameraInRange = product.details.some((detail) => {
          const cameraMatches = detail.match(/(\d+)\s*MP/i);
          if (cameraMatches) {
            const cameraMP = parseInt(cameraMatches[1]);
            return cameraMP >= minMP && cameraMP <= maxMP;
          }
          return false;
        });
        if (!hasCameraInRange) {
          return false;
        }
      }

      // If all filters pass
      return true;
    })
    .sort((a, b) => {
      let priceA = 0;
      let priceB = 0;

      if (a.ramPriceOptions && a.ramPriceOptions.length > 0) {
        // Clean the price string by removing commas and converting to a number
        priceA = Number(a.ramPriceOptions[0].price.replace(/,/g, ""));
      }

      if (b.ramPriceOptions && b.ramPriceOptions.length > 0) {
        // Clean the price string by removing commas and converting to a number
        priceB = Number(b.ramPriceOptions[0].price.replace(/,/g, ""));
      }

      // Perform sorting based on the selected option
      if (sortOption === "Price (Lowest to Highest)") {
        return priceA - priceB;
      } else if (sortOption === "Price (Highest to Lowest)") {
        return priceB - priceA;
      }
      return 0;
    });

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-50 w-full text-black">
        {/* Tabs Section */}
        <nav className="hidden sm:flex justify-center flex-wrap space-x-4 sm:space-x-6 lg:space-x-20 py-4 bg-[#E9EAEB]">
          {Object.keys(tabContent).map((model) =>
            model === "Compare" ? (
              <Link href="/compare" key={model}>
                <p className="pb-2 border-b-[1px] transition-colors duration-300 border-transparent text-black hover:text-blue-500">
                  Compare
                </p>
              </Link>
            ) : (
              <button
                key={model}
                className={`pb-2 border-b-[1px] transition-colors duration-300 ${
                  activeModel === model
                    ? "border-blue-500 text-blue-500 font-vivoRegular"
                    : "border-transparent text-black hover:text-blue-500"
                }`}
                onClick={() => {
                  setSelectedModel(model), setActiveModel(model);
                }}
              >
                {model}
              </button>
            )
          )}
        </nav>

        {/* Main Layout: Filter Section and Content */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Filter Section */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden"
            } lg:block lg:w-1/4 py-4 border-r bg-white lg:bg-transparent z-10 lg:z-auto absolute lg:relative w-full`}
          >
            <h3 className="text-lg flex px-4 font-vivoBold mb-4">Filter</h3>
            <div className="space-y-4 px-4">
              {/* Models Filter */}
              <div className="border-b sm:hidden border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Models")}
                >
                  <span className="font-vivoBold">Models</span>
                  <span>
                    {isOpen["Models"] ? (
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
                {/* Models Filter Options */}
                {isOpen["Models"] && (
                  <div className="mt-2 px-2">
                    <form className="space-y-2">
                      {[
                        "All Models",
                        "X Series",
                        "V Series",
                        "Y Series",
                        "Series T",
                        "Accessories",
                      ].map((model) => (
                        <div key={model}>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="model"
                              value={model}
                              checked={selectedModel === model}
                              onChange={(e) => setSelectedModel(e.target.value)}
                              className="form-radio h-4 w-4 text-blue-500"
                            />
                            <span className="ml-2">{model}</span>
                          </label>
                        </div>
                      ))}
                      {/* Compare Option as a Link */}
                      <div>
                        <Link href="/compare">
                          <a className="flex items-center text-blue-500 hover:underline">
                            Compare
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              {/* Price Filter */}
              <div className="border-b border-gray-300 pb-2">
                <div
                  className="flex justify-between px-2 items-center cursor-pointer"
                  onClick={() => toggleSection("Price")}
                >
                  <span className="font-vivoBold">Price</span>
                  <span>
                    {isOpen["Price"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
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
                        xmlns="http:www.w3.org/2000/svg"
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
                  <div className="mt-2">
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
                  <span className="font-vivoBold">Camera</span>
                  <span>
                    {isOpen["Camera"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
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
                        xmlns="http:www.w3.org/2000/svg"
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
                  <span className="font-vivoBold">RAM</span>
                  <span>
                    {isOpen["RAM"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
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
                        xmlns="http:www.w3.org/2000/svg"
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
                  <span className="font-vivoBold">Storage Capacity</span>
                  <span>
                    {isOpen["Storage"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
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
                        xmlns="http:www.w3.org/2000/svg"
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
                  <span className="font-vivoBold">Battery</span>
                  <span>
                    {isOpen["Battery"] ? (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
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
                        xmlns="http:www.w3.org/2000/svg"
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

              <div className="mt-4 flex flex-col space-y-2">
                {/* Apply Filters Button for Mobile */}
                <button
                  onClick={toggleFilter}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg lg:hidden"
                >
                  Apply Filters
                </button>

                {/* Reset Filters Button */}
                <button
                  onClick={resetFilters}
                  className="w-full bg-gray-200 text-black py-2 rounded-lg"
                >
                  Reset Filters
                </button>
              </div>

              {/* {isFilterOpen && (
                <div
                  className="fixed inset-0 bg-black opacity-50 lg:hidden"
                  onClick={toggleFilter}
                ></div>
              )} */}
            </div>
          </div>
          {/* Content Section */}
          <div className="flex-1 p-4">
            {/* Sort by dropdown */}
            <div className="flex justify-between items-center mb-4">
              {/* Show Filter Toggle on Mobile within content area */}
              <button
                onClick={toggleFilter}
                className="flex items-center text-blue-600 lg:hidden"
              >
                {/* Filter Icon */}
                <span className="mr-2">Filter</span>
                {/* Your SVG icon */}
              </button>

              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2">
                  Rank By
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="p-2 border rounded-lg w-auto"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {loading ? (
                // Show skeleton loaders while loading
                <>
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                </>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  if (
                    !product.ramPriceOptions ||
                    product.ramPriceOptions.length === 0 ||
                    !product.colorOptions ||
                    product.colorOptions.length === 0
                  ) {
                    // Optionally display a message or skip rendering this product
                    return null;
                  }

                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onQuickLook={(product) => {
                        setSelectedProduct(product);
                        setModalVisible(true);
                      }}
                    />
                  );
                })
              ) : (
                <p>No products available for this model.</p>
              )}
            </div>

            {modalVisible && selectedProduct && (
              <Modal
                product={selectedProduct}
                onClose={() => setModalVisible(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabbedNavigationWithFilter;
