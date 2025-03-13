import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faSmile,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "../Assets/logo_blue.png";
// import phone from "../Assets/370a92f0be2ea0d41d198ab9ba298ee7.png";
import Image from "next/image";

interface ConfirmationPopupProps {
  onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 text-black bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center relative">
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <div>
          {/* <Image
            src=""
            alt="Vivo Logo"
            className="mx-auto mb-4"
            style={{ width: "100px" }}
          /> */}
          <h2 className="text-xl font-semibold mb-2">
            Thank you for your interest in Vivo
          </h2>
          <p className="text-gray-600 mb-4">
            Our representative will contact you shortly
          </p>
          {/* <Image
            src=""
            alt="Vivo V40"
            className="mx-auto mb-4"
            style={{ width: "100px" }}
          /> */}
          {/* <h3 className="text-lg font-bold mb-3">VIVO V40</h3> */}
        </div>

        <h3 className="text-lg font-semibold mb-8">Our Process</h3>

        <div className="flex justify-between items-center mb-8 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Enquire about the product
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full text-blue-600">
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              We will contact you
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full text-blue-600">
              <FontAwesomeIcon icon={faSmile} size="lg" />
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Experience at your door
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full text-blue-600">
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Purchase your product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
