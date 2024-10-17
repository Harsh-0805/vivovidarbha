import React, { useState, useEffect } from "react";
import "./ComparePage.css"; // Assume you will add custom CSS for styling
import Image from "next/image";

// Mock data for products (You can replace this with API data)
type Product = {
  name: string;
  color: string;
  os: string;
  androidVersion: string;
  cpuCores: string;
  cpuClockSpeed: string;
  expandableRAM: string;
  expandableROM: string;
  processNode: string;
  image: string;
};

const products: { [key: string]: Product } = {
  "Y300 Plus 5G": {
    name: "Y300 Plus 5G",
    color: "Silk Black, Silk Green",
    os: "Funtouch OS 14",
    androidVersion: "Android 14",
    cpuCores: "8",
    cpuClockSpeed: "2 × 2.2 GHz + 6 × 1.8 GHz",
    expandableRAM: "-",
    expandableROM: "1 TB",
    processNode: "6nm",
    image: "/path_to_y300_image.jpg",
  },
  V40e: {
    name: "V40e",
    color: "Royal Bronze, Lunar Gray",
    os: "Funtouch OS 14",
    androidVersion: "Android 14",
    cpuCores: "8",
    cpuClockSpeed: "4 × 2.5 GHz + 4 × 2.0 GHz",
    expandableRAM: "8 GB",
    expandableROM: "Not supported",
    processNode: "4nm",
    image: "/path_to_v40e_image.jpg",
  },
  "T3 Ultra": {
    name: "T3 Ultra",
    color: "Lunar Gray, Frost Green",
    os: "Funtouch OS 14",
    androidVersion: "Android 14",
    cpuCores: "8",
    cpuClockSpeed: "3.35 GHz * 1 + 3.0 GHz * 3 + 2.0 GHz * 4",
    expandableRAM: "8 GB / 12 GB",
    expandableROM: "Not supported",
    processNode: "4nm",
    image: "/path_to_t3ultra_image.jpg",
  },
};

const ComparePage = () => {
  const [selectedModels, setSelectedModels] = useState([
    "Y300 Plus 5G",
    "V40e",
    "T3 Ultra",
  ]);
  const [isSticky, setIsSticky] = useState(false);

  const handleModelChange = (index: number, newModel: string) => {
    const updatedModels = [...selectedModels];
    updatedModels[index] = newModel;
    setSelectedModels(updatedModels);
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="compare-page-container">
      {/* Sticky Header for Product Selection */}
      <div className={`product-selection-header ${isSticky ? "sticky" : ""}`}>
        <div className="product-selection">
          {selectedModels.map((model, index) => (
            <div key={index} className="product-item">
              <select
                value={model}
                onChange={(e) => handleModelChange(index, e.target.value)}
              >
                {Object.keys(products).map((productKey) => (
                  <option key={productKey} value={productKey}>
                    {productKey}
                  </option>
                ))}
              </select>
              <Image src={products[model].image} alt={products[model].name} />
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="comparison-table">
        {/* Color */}
        <div className="comparison-row">
          <div className="comparison-header">Color</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].color}
            </div>
          ))}
        </div>

        {/* Ingress Protection */}
        <div className="comparison-row">
          <div className="comparison-header">Process Node</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].processNode}
            </div>
          ))}
        </div>

        {/* Operating System */}
        <div className="comparison-row">
          <div className="comparison-header">Operating System</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].os}
            </div>
          ))}
        </div>

        {/* Android Version */}
        <div className="comparison-row">
          <div className="comparison-header">Android Version</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].androidVersion}
            </div>
          ))}
        </div>

        {/* CPU Cores */}
        <div className="comparison-row">
          <div className="comparison-header">CPU Core Count</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].cpuCores}
            </div>
          ))}
        </div>

        {/* CPU Clock Speed */}
        <div className="comparison-row">
          <div className="comparison-header">CPU Clock Speed</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].cpuClockSpeed}
            </div>
          ))}
        </div>

        {/* Expandable RAM */}
        <div className="comparison-row">
          <div className="comparison-header">Expandable RAM Capacity</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].expandableRAM}
            </div>
          ))}
        </div>

        {/* Expandable ROM */}
        <div className="comparison-row">
          <div className="comparison-header">Expandable ROM Capacity</div>
          {selectedModels.map((model, index) => (
            <div key={index} className="comparison-data">
              {products[model].expandableROM}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
