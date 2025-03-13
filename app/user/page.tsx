"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import axios from "axios"; // For API requests

const AccountSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState("details");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  interface Transaction {
    productName: string;
    product_price: number;
    color: string;
    size: string;
    convertedOrNot: string;
    createdAt: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]); // State to store transactions
  const [loadingTransactions, setLoadingTransactions] = useState(false); // Loading state for transactions
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check if the user is logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  // Fetch user profile details (mobile number and address)
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session?.user?.email) {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://vivo-backend.vercel.app/getUserProfile",
            {
              params: { email: session.user.email },
            }
          );
          setMobile(response.data.phoneNumber || "");
          setAddress(response.data.address || "");
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, [session]);

  // Fetch transactions when "My Bookings" is clicked
  const fetchTransactions = async () => {
    if (session?.user?.name && session?.user?.email) {
      setLoadingTransactions(true);
      try {
        const response = await axios.get(
          "https://vivo-backend.vercel.app/showTransactions",
          {
            params: {
              username: session.user.name,
              email: session.user.email,
            },
          }
        );
        setTransactions(response.data); // Set the transactions from the API
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoadingTransactions(false);
      }
    }
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500"; // Completed status in green
      case "cancelled":
        return "text-red-500"; // Cancelled status in red
      default:
        return "text-yellow-500"; // In progress status in yellow
    }
  };

  // Trigger fetching transactions when the section is switched to "bookings"
  useEffect(() => {
    if (activeSection === "bookings") {
      fetchTransactions();
    }
  }, [activeSection]);

  // Handle form submission for updating user profile
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://vivo-backend.vercel.app/updateUserProfile",
        {
          email: session?.user?.email,
          phoneNumber: mobile,
          address,
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (status === "loading" || loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-black min-h-screen px-4 md:px-12">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row min-h-full">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-5 bg-white rounded shadow-lg min-h-full mb-6 md:mb-0">
              <div className="text-center mb-8">
                <div
                  className="h-24 w-24 bg-cover bg-center rounded-full mx-auto"
                  style={{
                    backgroundImage: `url('${
                      session?.user?.image || "/assets/user.jpg"
                    }')`,
                  }}
                ></div>
                <h3 className="mt-4 text-lg font-semibold">
                  {session?.user?.name || "User Name"}
                </h3>
                <p className="text-gray-500">
                  {session?.user?.email || "Email"}
                </p>
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
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-indigo-500 font-semibold"
                >
                  Logout &#8594;
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 p-5 bg-white rounded shadow-lg min-h-full md:ml-6">
              {activeSection === "details" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My details</h2>
                  <form onSubmit={handleSave}>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
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
                          placeholder="Full Name"
                          value={session?.user?.name || ""}
                          readOnly
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
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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

              {/* My Bookings Section */}
              {activeSection === "bookings" && (
                <div className="bg-white p-1">
                  <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
                  {loadingTransactions ? (
                    <p>Loading transactions...</p>
                  ) : transactions.length > 0 ? (
                    <ul>
                      {transactions.map((transaction, index) => (
                        <li key={index} className="mb-4 p-4 border rounded-lg">
                          <p>
                            <strong>Product:</strong> {transaction.productName}
                          </p>
                          <p>
                            <strong>Price:</strong> ₹{transaction.product_price}
                          </p>
                          <p>
                            <strong>Color:</strong> {transaction.color}
                          </p>
                          <p>
                            <strong>Size:</strong> {transaction.size}
                          </p>
                          <p
                            className={getStatusClass(
                              transaction.convertedOrNot
                            )}
                          >
                            <strong>Status:</strong>{" "}
                            {transaction.convertedOrNot === "in progress"
                              ? "In Progress"
                              : transaction.convertedOrNot === "completed"
                              ? "Completed"
                              : "Cancelled"}
                          </p>

                          <p>
                            <strong>Transaction Date:</strong>{" "}
                            {new Date(transaction.createdAt).toLocaleString()}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No bookings available.</p>
                  )}
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
