"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const placeholders = ["Phones", "Accessories", "Deals", "Offers"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <svg
              width="120"
              height="32"
              viewBox="0 0 120 32"
              fill="none"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M106.869 26.0313H96.7536C91.067 26.0313 90.5612 21.4122 90.5612 20.0008C90.5612 18.5895 91.067 13.9704 96.7536 13.9704H106.869C112.556 13.9704 113.062 18.5895 113.062 20.0008C113.062 21.4122 112.556 26.0313 106.869 26.0313ZM106.869 8.89075H96.7536C86.2407 8.89075 85.3057 17.4007 85.3057 20.0008C85.3057 22.6011 86.2407 31.1111 96.7536 31.1111H106.869C117.382 31.1111 118.317 22.6011 118.317 20.0008C118.317 17.4007 117.382 8.89075 106.869 8.89075Z"
                fill="#242933"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M83.2762 9.41174H79.9976C78.5933 9.41174 78.304 9.64923 77.7622 10.4451C77.2207 11.2411 67.8425 25.422 67.8425 25.422C67.5435 25.858 67.2262 26.0344 66.8313 26.0344C66.4367 26.0344 66.1192 25.858 65.8202 25.422C65.8202 25.422 56.442 11.2411 55.9005 10.4451C55.3587 9.64923 55.0694 9.41174 53.6653 9.41174H50.3865C49.632 9.41174 49.2867 9.99611 49.7611 10.7097C50.2354 11.4232 60.9618 27.5551 60.9618 27.5551C62.6999 30.0874 63.9755 31.1111 66.8313 31.1111C69.6872 31.1111 70.963 30.0874 72.7013 27.5551C72.7013 27.5551 83.4273 11.4232 83.9016 10.7097C84.376 9.99611 84.0309 9.41174 83.2762 9.41174Z"
                fill="#242933"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.7295 10.7877C39.7295 9.80243 40.1237 9.41174 41.1185 9.41174H43.5967C44.5915 9.41174 44.9859 9.80243 44.9859 10.7877V29.7351C44.9859 30.7204 44.5915 31.1111 43.5967 31.1111H41.1185C40.1237 31.1111 39.7295 30.7204 39.7295 29.7351V10.7877Z"
                fill="#242933"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.3286 9.41174H31.05C29.6455 9.41174 29.3561 9.64923 28.8144 10.4451C28.2729 11.2411 18.8949 25.422 18.8949 25.422C18.5956 25.8578 18.2784 26.0344 17.8835 26.0344C17.4886 26.0344 17.1714 25.8578 16.8724 25.422C16.8724 25.422 7.49411 11.2411 6.95262 10.4451C6.41112 9.64923 6.12152 9.41174 4.7175 9.41174H1.43846C0.595908 9.41174 0.338631 9.99611 0.813224 10.7097C1.28759 11.4232 12.014 27.5551 12.014 27.5551C13.7518 30.0874 15.0276 31.1111 17.8835 31.1111C20.7396 31.1111 22.0152 30.0874 23.7535 27.5551C23.7535 27.5551 34.4796 11.4232 34.9538 10.7097C35.4284 9.99611 35.1711 9.41174 34.3286 9.41174Z"
                fill="#242933"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.5033 5.07195C38.6955 4.27212 38.6955 3.63794 39.5033 2.83788L41.2295 1.12815C42.037 0.32809 42.6775 0.32809 43.485 1.12792L45.2114 2.83788C46.0189 3.63794 46.0189 4.27212 45.2114 5.07195L43.485 6.78191C42.6775 7.58197 42.037 7.58197 41.2295 6.78191L39.5033 5.07195Z"
                fill="#242933"
              />
            </svg>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="hidden lg:flex space-x-20 text-lg font-vivoRegular text-gray-900">
              <ul className="flex space-x-8">
                <li>
                  <a href="/" className="hover:text-blue-500 nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-500 nav-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/service" className="hover:text-blue-500 nav-link">
                    Service
                  </a>
                </li>

                <li>
                  <a href="/about" className="hover:text-blue-500 nav-link">
                    About Vivo Nagpur
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* User Icon for large screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/account" className="user-logo">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http:www.w3.org/2000/svg"
              >
                <path
                  d="M8.77506 17.0041L9 17H20C23.2384 17 25.8776 19.5656 25.9959 22.7751L26 23V23.5C26 23.7761 25.7761 24 25.5 24H24.5C24.2239 24 24 23.7761 24 23.5V23C24 20.8578 22.316 19.1089 20.1996 19.0049L20 19H9C6.8578 19 5.10892 20.684 5.0049 22.8004L5 23V23.5C5 23.7761 4.77614 24 4.5 24H3.5C3.22386 24 3 23.7761 3 23.5V23C3 19.7616 5.56557 17.1224 8.77506 17.0041Z"
                  fill="#242933"
                />
                <path
                  d="M16.002 5C18.7634 5 21.002 7.23858 21.002 10C21.002 12.7614 18.7634 15 16.002 15H13.002C10.2405 15 8.00195 12.7614 8.00195 10C8.00195 7.23858 10.2405 5 13.002 5H16.002ZM16.002 7H13.002C11.3451 7 10.002 8.34315 10.002 10C10.002 11.5977 11.2509 12.9037 12.8257 12.9949L13.002 13H16.002C17.6588 13 19.002 11.6569 19.002 10C19.002 8.40232 17.753 7.09634 16.1782 7.00509L16.002 7Z"
                  fill="#242933"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="/service"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Service
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About Vivo Nagpur
            </a>
            {/* Mobile User Account Link */}
            <a
              href="/account"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
