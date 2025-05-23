import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 pt-10"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          {/* Support Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Service Center
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutVivoNagpur"
                  className="hover:text-blue-500 transition duration-300"
                >
                  About Us
                </Link>
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
                <Link
                  href="/Terms&Conditions"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/Privacy"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Cookie Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/Return"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office Info with structured data */}
          <div
            className="w-full md:w-1/4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta
              itemProp="name"
              content="Vivo Nagpur - UNIMAY Electronic Pvt Ltd"
            />
            <h3 className="text-lg font-semibold text-white mb-4">
              vivo nagpur
            </h3>
            <p
              className="text-sm"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="name">Corporate Office</span>
              <br />
              <span itemProp="streetAddress">
                UNIMAY Electronic Pvt Ltd. 6th Floor, Riaan House, LIC Square,
                Kingsway Rd, opp. KP ground, Mohan Nagar
              </span>
              ,
              <br />
              <span itemProp="addressLocality">Nagpur</span>{" "}
              <span itemProp="postalCode">440001</span>
              <br />
              <span itemProp="addressRegion">Maharashtra</span>
            </p>
            <p className="mt-4 text-sm">Email Us (Reply in 24h)</p>
            <a
              href="mailto:info@vivonagpur.com"
              className="hover:text-blue-500"
              itemProp="email"
            >
              info@vivonagpur.com
            </a>

            <p className="mt-4 text-sm">Call Us</p>
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
            © 2024 UNIMAY Electronic Pvt Ltd (A division of vivo). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
