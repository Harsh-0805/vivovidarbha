"use client";

import Image from "next/image";
import React, { useState } from "react";
import service from "@/public/assets/service.png";
import Navbar from "@/components/Navbar";

interface Store {
  name: string;
  address: string;
  phone: string;
  timings: string;
  location: string;
}

const storesData: Record<string, Store[]> = {
  Akola: [
    {
      name: "Akola Service Center",
      address:
        "Shop Block No.205, 2nd Floor, Icon Height Tower Road, Kedia Plots, Akola-444001",
      phone: "+91 9028004978",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/aZbMDMHTLgTwpxrt8",
    },
  ],
  Amravati: [
    {
      name: "Amravati Service Center",
      address:
        "Jaistambha Square, Ground Floor, Shop No 29, Gulshan Tower, Amravati-444601",
      phone: "+91 9028004980",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/AdK5oEBzB9ds5odB7",
    },
  ],
  Bhandara: [
    {
      name: "Bhandara Service Center",
      address:
        "Shop No.9,Vaishnavi Turaskar Complex, Post Office Square Bada Bazar Bhandara-441904",
      phone: "+91 8956364974",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/dykYjk4VvssobE1eA",
    },
  ],
  Buldhana: [
    {
      name: "Buldhana Service Center",
      address:
        "Shop No.10, Jeejamata Sports & Commercial Complex, Buldhana-443001",
      phone: "+91 9028004984",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/NxBewQVBiraTYuKt9",
    },
  ],
  Chandrapur: [
    {
      name: "Chandrapur Service Center",
      address: "1st Floor, Tandon Tower, Gandhi Chowk, Chandrapur-442401",
      phone: "+91 9028004982",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/yB52SSjTn8SUjas59",
    },
  ],
  Gondia: [
    {
      name: "Gondia Service Center",
      address:
        "Shop No 1 & 2, First Floor, Shreejee Complex, Near Head Post Office, Shree Talkiz Road, Gondia-441601",
      phone: "+91 9028004986",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/k7n99ez8xiYqob1F6",
    },
  ],
  Nagpur: [
    {
      name: "Nagpur Sadar Service Center",
      address:
        "Shop Block No.113, 1st Floor, Shriram Shyam Towers, Kingsway, Sadar, Nagpur - 440001",
      phone: "+91 9028004979",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/bxKyiCtqaiDVJRTAA",
    },
    {
      name: "Nagpur Medical Service Center",
      address:
        "Plot No.193, 1st Floor, Agrawal Building, Industrial Area Scheme Of Nit Dahipura & Untkhana Layout, Survey No.314, Medical Square, Nagpur - 440009",
      phone: "+91 9028004986",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/MdhSqnW3vjwoX6Ld7",
    },
  ],
  Wardha: [
    {
      name: "Wardha Service Center",
      address:
        "Ward No. 34, Ground Floor Bachelor Road, Near Santoshi Mata Mandir, Shastri Chowk, Wardha C 442001",
      phone: "+91 8956364979",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/PeAob9E3U5rnYxGXA",
    },
  ],
  Washim: [
    {
      name: "Washim Service Center",
      address: "Shop No.38, B-Wing, Patni Commercial Complex Washim-444505",
      phone: "+91 9028004987",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/cXi3hiUwg98wvuEZ9",
    },
  ],
  Yavatmal: [
    {
      name: "Yavatmal Service Center",
      address:
        "Shop No.10, 1St Floor, Inorbit Complex, Maa Durga Dawa Bazar, Yerawar Chowk, Near Azad Maidan, Yavatmal-445001",
      phone: "+91 9028004988",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/raRxeu4zvpA3x9Et6",
    },
  ],
  Pusad: [
    {
      name: "Pusad Service Center",
      address:
        "1st floor, Satyam Complex, Opp Balaji Sweet Mart Near Bus Stop, Pusad, Yawatmal- 445204",
      phone: "+91 9028004989",
      timings: "10:00 AM TO 07:00 PM",
      location: "https://maps.app.goo.gl/DWgjXqeNGUR7DF9F6",
    },
  ],
};

const ServiceLocator: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false); // Close dropdown after selecting a city
  };

  return (
    <div className="bg-[#FDFBF8]">
      {/* Header Section */}
      <Navbar />
      <div className="relative h-auto">
        <Image
          src={service}
          alt="Vivo Store"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
        />
      </div>

      {/* Store Locator Section */}
      <div className="py-8 md:py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-vivoRegular text-black mb-8">
          Store Locator
        </h2>

        {/* City Dropdown */}
        <div className="relative bg-white rounded-lg shadow-md max-w-xl mx-auto">
          {/* Dropdown Trigger */}
          <button
            className="bg-gray-200 w-full flex justify-between items-center px-4 py-3 text-lg font-vivoMedium text-gray-600 rounded-t-lg"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCity ? selectedCity : "Choose a City"}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                d="M22.6673 13.3333L20.3376 15.6839C18.4796 17.5585 17.5507 18.4958 16.4184 18.6401C16.141 18.6755 15.8603 18.6755 15.5829 18.6401C14.4506 18.4958 13.5217 17.5585 11.6637 15.6839L9.33398 13.3333"
                stroke="#2D264B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute left-0 w-full bg-white shadow-lg rounded-b-lg z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
                {Object.keys(storesData).map((city) => (
                  <button
                    key={city}
                    className={`text-gray-700 text-lg font-vivoMedium hover:text-blue-500 ${
                      selectedCity === city ? "text-blue-600" : ""
                    }`}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Store Cards */}
        {selectedCity && (
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storesData[selectedCity].map((store, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <h3 className="text-lg font-vivoRegular text-black mb-2">
                    {store.name}
                  </h3>

                  {/* Store Information */}
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-start">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7808 19.7845L14.1906 19.3217L14.7808 19.7845ZM9.21921 19.7845L8.62903 20.2473L9.21921 19.7845ZM12 22.0895V21.3395V22.0895ZM19.25 9.69268C19.25 10.9192 18.6104 12.5604 17.6037 14.34C16.6137 16.0903 15.3342 17.8633 14.1906 19.3217L15.371 20.2473C16.5371 18.7602 17.8672 16.9209 18.9094 15.0785C19.9349 13.2654 20.75 11.3334 20.75 9.69268H19.25ZM9.80938 19.3217C8.66578 17.8633 7.38628 16.0903 6.39625 14.34C5.38962 12.5604 4.75 10.9192 4.75 9.69268H3.25C3.25 11.3334 4.06511 13.2654 5.09064 15.0785C6.13277 16.9209 7.46288 18.7602 8.62903 20.2473L9.80938 19.3217ZM4.75 9.69268C4.75 5.2997 8.04678 1.83398 12 1.83398V0.333984C7.11666 0.333984 3.25 4.57676 3.25 9.69268H4.75ZM12 1.83398C15.9532 1.83398 19.25 5.2997 19.25 9.69268H20.75C20.75 4.57676 16.8833 0.333984 12 0.333984V1.83398ZM14.1906 19.3217C13.5717 20.111 13.1641 20.6266 12.7992 20.9581C12.4664 21.2604 12.2442 21.3395 12 21.3395V22.8395C12.7291 22.8395 13.2948 22.5344 13.8078 22.0684C14.2886 21.6315 14.7849 20.9946 15.371 20.2473L14.1906 19.3217ZM8.62903 20.2473C9.21511 20.9946 9.71136 21.6315 10.1922 22.0684C10.7052 22.5344 11.2709 22.8395 12 22.8395V21.3395C11.7558 21.3395 11.5336 21.2604 11.2008 20.9581C10.8359 20.6266 10.4283 20.111 9.80938 19.3217L8.62903 20.2473ZM8.25 10.084C8.25 12.1551 9.92893 13.834 12 13.834V12.334C10.7574 12.334 9.75 11.3266 9.75 10.084H8.25ZM12 13.834C14.0711 13.834 15.75 12.1551 15.75 10.084H14.25C14.25 11.3266 13.2426 12.334 12 12.334V13.834ZM15.75 10.084C15.75 8.01292 14.0711 6.33398 12 6.33398V7.83398C13.2426 7.83398 14.25 8.84134 14.25 10.084H15.75ZM12 6.33398C9.92893 6.33398 8.25 8.01292 8.25 10.084H9.75C9.75 8.84134 10.7574 7.83398 12 7.83398V6.33398Z"
                          fill="#2D264B"
                        />
                      </svg>
                      <p className="px-2">{store.address}</p>
                    </div>

                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76085 3.66187C4.8315 3.59123 4.86682 3.5559 4.89794 3.52731C5.6631 2.82423 6.83921 2.82423 7.60436 3.52731C7.63548 3.5559 7.67081 3.59123 7.74145 3.66187L9.19965 5.12007C10.0017 5.92212 10.2311 7.13336 9.77785 8.17314C9.32461 9.21293 9.554 10.4242 10.356 11.2262L12.7529 13.623C13.5549 14.4251 14.7661 14.6545 15.8059 14.2012C16.8457 13.748 18.057 13.9774 18.859 14.7794L20.3172 16.2376C20.3878 16.3083 20.4232 16.3436 20.4518 16.3747C21.1548 17.1399 21.1548 18.316 20.4518 19.0811C20.4232 19.1123 20.3878 19.1476 20.3172 19.2182L19.4309 20.1046C18.7091 20.8264 17.6685 21.1294 16.6721 20.9079C9.88248 19.3991 4.57995 14.0966 3.07115 7.307C2.84971 6.31054 3.15272 5.27001 3.87451 4.54821L4.76085 3.66187Z"
                          stroke="#2D264B"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <p className="px-2">{store.phone}</p>
                    </div>

                    <div className="flex items-center">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 11C17 13.8003 17 15.2004 16.455 16.27C15.9757 17.2108 15.2108 17.9757 14.27 18.455C13.2004 19 11.8003 19 9 19C6.19974 19 4.79961 19 3.73005 18.455C2.78924 17.9757 2.02433 17.2108 1.54497 16.27C1 15.2004 1 13.8003 1 11C1 8.19974 1 6.79961 1.54497 5.73005C2.02433 4.78924 2.78924 4.02433 3.73005 3.54497C4.79961 3 6.19974 3 9 3C11.8003 3 13.2004 3 14.27 3.54497C15.2108 4.02433 15.9757 4.78924 16.455 5.73005C17 6.79961 17 8.19974 17 11ZM17 11H19M9 7V10.5C9 11.3284 9.67158 12 10.5 12V12H12M5 1H13M5 21H13"
                          stroke="#2D264B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="px-2">{store.timings}</p>
                    </div>
                  </div>

                  {/* Directions Link */}
                  <div className="mt-4 flex justify-end">
                    <a
                      href={store.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 flex items-center"
                    >
                      Directions
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 3V3.75V3ZM15 3V2.25V3ZM21 9H21.75H21ZM21 15H20.25H21ZM15 21V21.75V21ZM14 21V20.25V21ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.6648 20.1977L16.7822 20.9384ZM16.7822 3.06156L16.8995 2.32079L16.8995 2.32079L16.7822 3.06156ZM20.9384 7.21783L21.6792 7.1005V7.1005L20.9384 7.21783ZM10.5496 3.39996C10.2184 3.64873 10.1516 4.11888 10.4003 4.45007C10.6491 4.78126 11.1192 4.84808 11.4504 4.59931L10.5496 3.39996ZM11.4504 19.4007C11.1192 19.1519 10.6491 19.2187 10.4003 19.5499C10.1516 19.8811 10.2184 20.3513 10.5496 20.6L11.4504 19.4007ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75L3 11.25ZM16 12V11.25V12ZM12.534 15.4123C12.2095 15.6697 12.155 16.1414 12.4123 16.466C12.6697 16.7905 13.1414 16.845 13.466 16.5877L12.534 15.4123ZM14.763 14.6022L14.297 14.0145L14.763 14.6022ZM14.763 9.39785L14.297 9.98553L14.763 9.39785ZM13.466 7.41232C13.1414 7.15497 12.6697 7.20946 12.4123 7.53403C12.155 7.8586 12.2095 8.33034 12.534 8.58768L13.466 7.41232ZM16.9801 12.2507L17.7208 12.3687L17.7208 12.3687L16.9801 12.2507ZM16.9801 11.7493L17.7208 11.6313L17.7208 11.6313L16.9801 11.7493ZM14 3.75L15 3.75V2.25L14 2.25V3.75ZM20.25 9V15H21.75V9H20.25ZM15 20.25H14V21.75H15V20.25ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM15 3.75C15.9577 3.75 16.3492 3.75233 16.6648 3.80232L16.8995 2.32079C16.4378 2.24767 15.9003 2.25 15 2.25V3.75ZM21.75 9C21.75 8.09965 21.7523 7.56216 21.6792 7.1005L20.1977 7.33515C20.2477 7.65082 20.25 8.04233 20.25 9H21.75ZM16.6648 3.80232C18.4834 4.09035 19.9096 5.51661 20.1977 7.33515L21.6792 7.1005C21.2895 4.64012 19.3599 2.71048 16.8995 2.32079L16.6648 3.80232ZM14 2.25C12.7064 2.25 11.5106 2.67806 10.5496 3.39996L11.4504 4.59931C12.1607 4.06583 13.0424 3.75 14 3.75V2.25ZM14 20.25C13.0424 20.25 12.1607 19.9342 11.4504 19.4007L10.5496 20.6C11.5106 21.3219 12.7064 21.75 14 21.75V20.25ZM3 12.75L16 12.75V11.25L3 11.25L3 12.75ZM13.466 16.5877L15.2289 15.1898L14.297 14.0145L12.534 15.4123L13.466 16.5877ZM15.2289 8.81016L13.466 7.41232L12.534 8.58768L14.297 9.98553L15.2289 8.81016ZM15.2289 15.1898C15.9176 14.6438 16.4852 14.1953 16.8875 13.7945C17.2932 13.3904 17.6294 12.9418 17.7208 12.3687L16.2395 12.1327C16.2225 12.2388 16.1532 12.4087 15.8289 12.7318C15.5012 13.0582 15.0143 13.4457 14.297 14.0145L15.2289 15.1898ZM14.297 9.98553C15.0143 10.5543 15.5012 10.9418 15.8289 11.2682C16.1532 11.5913 16.2225 11.7612 16.2395 11.8673L17.7208 11.6313C17.6294 11.0582 17.2932 10.6096 16.8875 10.2055C16.4852 9.80475 15.9175 9.35616 15.2289 8.81016L14.297 9.98553ZM17.7208 12.3687C17.7402 12.2466 17.75 12.1234 17.75 12H16.25C16.25 12.0441 16.2465 12.0883 16.2395 12.1327L17.7208 12.3687ZM17.75 12C17.75 11.8766 17.7402 11.7534 17.7208 11.6313L16.2395 11.8673C16.2465 11.9117 16.25 11.9559 16.25 12H17.75ZM16 12.75H17V11.25H16V12.75Z"
                          fill="#415fff"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceLocator;
