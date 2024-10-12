"use client";

import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup"; // Import the confirmation popup

interface FormData {
  fullName: string;
  mobileNumber: string;
  address: string;
  pincode: string;
  city: string;
  saveInfo: boolean;
}

const AddressForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    saveInfo: false,
  });

  const [showPopup, setShowPopup] = useState<boolean>(false); // State to control popup visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;

    // Ensure name is a key of FormData
    const fieldName = name as keyof FormData;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowPopup(true); // Show the popup after form submission
    console.log("Form Data Submitted:", formData); // Process form data here
  };

  const closePopup = (): void => {
    setShowPopup(false); // Close the popup
  };

  // Initial form data for resetting the form
  const initialFormData: FormData = {
    fullName: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    saveInfo: false,
  };

  return (
    <div className="max-w-4xl text-black mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-vivoBold text-center mb-6">
        Book Your Personalized In-Home Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-vivoMedium text-gray-700 text-left">
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
            <label className="block text-sm font-vivoMedium text-gray-700 text-left">
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
          <label className="block text-sm font-vivoMedium text-gray-700 text-left">
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
            <label className="block text-sm font-vivoMedium text-gray-700">
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
            <label className="block text-sm font-vivoMedium text-gray-700 text-left">
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
            <label className="font-vivoMedium text-gray-700">
              Save this information for next time
            </label>
          </div>
        </div>

        <div className="flex space-x-8">
          <button
            type="submit"
            className="w-1/3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Book Now
          </button>
          <button
            type="button"
            className="w-1/3 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            onClick={() => setFormData(initialFormData)} // Reset form on cancel
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

export default AddressForm;
