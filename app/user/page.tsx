"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import user from "@/public/assets/user.jpg";

const AccountSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState("details");

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-black min-h-screen px-4 md:px-12">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row min-h-full">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-5 bg-white rounded shadow-lg min-h-full mb-6 md:mb-0">
              {" "}
              {/* Adjusted for responsiveness */}
              <div className="text-center mb-8">
                <div
                  className="h-24 w-24 bg-cover bg-center rounded-full mx-auto"
                  style={{
                    backgroundImage: `url('/assets/user.jpg')`,
                  }}
                ></div>
                <h3 className="mt-4 text-lg font-semibold">Devesh Khilnani</h3>
                <p className="text-gray-500">abc@gmail.com</p>
              </div>
              <ul>
                <li
                  className={`py-3 px-5 mb-3 cursor-pointer rounded-lg ${
                    activeSection === "details"
                      ? "bg-indigo-100 text-indigo-600 font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveSection("details")}
                >
                  My details
                </li>
                <li
                  className={`py-3 px-5 mb-3 cursor-pointer rounded-lg ${
                    activeSection === "bookings"
                      ? "bg-indigo-100 text-indigo-600 font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveSection("bookings")}
                >
                  My Bookings
                </li>
                <li
                  className={`py-3 px-5 cursor-pointer rounded-lg ${
                    activeSection === "wishlist"
                      ? "bg-indigo-100 text-indigo-600 font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveSection("wishlist")}
                >
                  Wishlist
                </li>
              </ul>
              <div className="mt-10 flex justify-center">
                <a href="#" className="text-indigo-500 font-semibold">
                  Logout &#8594;
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 p-5 bg-white rounded shadow-lg min-h-full md:ml-6">
              {" "}
              {/* Adjusted for responsiveness */}
              {activeSection === "details" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My details</h2>
                  <form>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                      {" "}
                      {/* Adjusted for responsiveness */}
                      <div className="w-full md:w-1/2">
                        <label
                          className="block text-gray-700 text-sm font-medium mb-2"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
                          type="text"
                          id="fullName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label
                          className="block text-gray-700 text-sm font-medium mb-2"
                          htmlFor="mobile"
                        >
                          Mobile Number
                        </label>
                        <input
                          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
                          type="text"
                          id="mobile"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="address"
                      >
                        Complete Address
                      </label>
                      <input
                        className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="address"
                        placeholder="Complete Address"
                      />
                    </div>

                    <button
                      className="bg-[#415fff] text-white py-2 px-10 rounded-lg hover:bg-indigo-700 transition duration-300 mt-4"
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                </div>
              )}
              {activeSection === "bookings" && (
                <div className="bg-white p-1">
                  <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
                  <p>No bookings available.</p>
                </div>
              )}
              {activeSection === "wishlist" && (
                <div className="bg-white p-1">
                  <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
                  <p>Your wishlist is empty.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSection;
