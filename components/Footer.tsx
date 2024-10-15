import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          {/* Popular Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  T3 5G
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  T3 Lite 5G
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  T3X 5G
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Y58 5G
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Y18
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Y28 5G
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Enterprise sales
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Service Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Warranty Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Important Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Warranty Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Return & Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Office Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">vivo pune</h3>
            <p className="text-sm">
              Corporate Office
              <br />
              HISOA Electronic Pvt Ltd. Suyog Platinum Tower 1, Naylor Rd,
              Sangamvadi, Pune,
              <br />
              Maharashtra 411001
            </p>
            <p className="mt-4 text-sm">Email Us (Reply in 24h)</p>
            <a href="mailto:info@vivopune.com" className="hover:text-blue-500">
              info@vivopune.com
            </a>

            <p className="mt-4 text-sm">Call Us</p>
            <p className="text-sm">+91 86249 09496</p>
            <p className="text-sm">Monday – Friday (10am – 5pm)</p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-facebook"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-youtube"></i> {/* YouTube Icon */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <p>
            © 2024 HISOA Electronic Pvt Ltd (A division of vivo). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
