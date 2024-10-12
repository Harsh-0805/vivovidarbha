// pages/index.tsx
import React from "react";
import AddressForm from "./AddressForm";
import ProductInfo from "./ProductInfo";
import { Navbar } from "@/components/Navbar";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main className=" bg-gray-100 pt-8 h-screen">
        <div className="checkout-container flex justify-center space-x-2">
          <div className="w-1/2">
            <AddressForm />
          </div>
          <div className="w-1/3 pl-8">
            <ProductInfo
              productName="Z9 Lite 5G 6GB+128GB | Dimensity 6300"
              productPrice={11499.0}
              color="Ganges Blue"
              size="8GB RAM + 256GB"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
