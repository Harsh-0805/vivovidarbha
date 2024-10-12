import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faSmile,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@/public/assets/logo_blue.png";
import image from "@/public/assets/address.png";

interface ConfirmationPopupProps {
  onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center relative">
        <button
          className="absolute scale-150 top-4 right-4 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <div>
          <Image
            src={logo}
            alt="Vivo Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-vivoMedium mb-2">
            Thank you for your interest in Vivo
          </h2>
          <p className="text-gray-600 mb-4">
            Our representative will contact you shortly
          </p>
          <Image
            src={image}
            alt="Vivo V40"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-vivoBold mb-3">VIVO V40</h3>
        </div>

        <h3 className="text-lg font-vivoMedium mb-8">Our Process</h3>

        <div className="flex justify-between items-center mb-8 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#344CCC] rounded-full text-white">
              <svg
                width="15"
                height="25"
                viewBox="0 0 28 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6663 9.25033C18.6663 11.9665 16.5307 14.0837 13.9997 14.0837V18.0837C18.8324 18.0837 22.6663 14.082 22.6663 9.25033H18.6663ZM13.9997 14.0837C11.4686 14.0837 9.33301 11.9665 9.33301 9.25033H5.33301C5.33301 14.082 9.16694 18.0837 13.9997 18.0837V14.0837ZM9.33301 9.25033C9.33301 6.53411 11.4686 4.41699 13.9997 4.41699V0.416992C9.16694 0.416992 5.33301 4.41865 5.33301 9.25033H9.33301ZM13.9997 4.41699C16.5307 4.41699 18.6663 6.53411 18.6663 9.25033H22.6663C22.6663 4.41865 18.8324 0.416992 13.9997 0.416992V4.41699ZM8.99967 23.2087H18.9997V19.2087H8.99967V23.2087ZM18.9997 32.8753H8.99967V36.8753H18.9997V32.8753ZM8.99967 32.8753C6.46861 32.8753 4.33301 30.7582 4.33301 28.042H0.333008C0.333008 32.8737 4.16694 36.8753 8.99967 36.8753V32.8753ZM23.6663 28.042C23.6663 30.7582 21.5307 32.8753 18.9997 32.8753V36.8753C23.8324 36.8753 27.6663 32.8737 27.6663 28.042H23.6663ZM18.9997 23.2087C21.5307 23.2087 23.6663 25.3258 23.6663 28.042H27.6663C27.6663 23.2103 23.8324 19.2087 18.9997 19.2087V23.2087ZM8.99967 19.2087C4.16694 19.2087 0.333008 23.2103 0.333008 28.042H4.33301C4.33301 25.3258 6.46861 23.2087 8.99967 23.2087V19.2087Z"
                  fill="#ECEFFF"
                />
              </svg>
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Enquire about the product
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECEFFF] rounded-full text-blue-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4856 13.9235V13.1693C23.4856 13.0564 23.4856 13 23.4849 12.9522C23.4332 9.34505 20.5216 6.43338 16.9144 6.38172C16.8667 6.38104 16.8102 6.38104 16.6974 6.38104H15.9431M28.1998 14.8663V13.5464C28.1998 12.4202 28.1998 11.8571 28.1573 11.3825C27.6971 6.24287 23.6239 2.16965 18.4843 1.70949C18.0097 1.66699 17.4465 1.66699 16.3204 1.66699L15.0005 1.66699M10.7041 11.2982C10.0998 12.6846 10.4057 14.2995 11.4751 15.3689L14.6708 18.5647C15.7402 19.6341 17.3552 19.9399 18.7416 19.3356C20.1279 18.7313 21.7429 19.0372 22.8123 20.1066L24.7566 22.0508C24.8508 22.145 24.8979 22.1921 24.936 22.2336C25.8735 23.2538 25.8735 24.822 24.936 25.8422C24.8979 25.8837 24.8508 25.9308 24.7566 26.025L23.5748 27.2067C22.6124 28.1691 21.225 28.5731 19.8964 28.2779C10.8436 26.2662 3.77359 19.1961 1.76186 10.1433C1.46661 8.81471 1.87062 7.42733 2.83301 6.46494L4.0148 5.28315C4.10899 5.18896 4.15609 5.14186 4.19758 5.10373C5.21779 4.1663 6.78594 4.1663 7.80614 5.10373C7.84764 5.14186 7.89473 5.18896 7.98893 5.28315L9.93319 7.22741C11.0026 8.29682 11.3084 9.9118 10.7041 11.2982Z"
                  stroke="#1D2B73"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              We will contact you
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECEFFF] rounded-full text-blue-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33366 17.667C9.22255 19.3813 11.8003 21.667 15.0003 21.667C18.2003 21.667 20.7781 19.3813 21.667 17.667M28.3337 15.0003C28.3337 22.3641 22.3641 28.3337 15.0003 28.3337C7.63653 28.3337 1.66699 22.3641 1.66699 15.0003C1.66699 7.63653 7.63653 1.66699 15.0003 1.66699C22.3641 1.66699 28.3337 7.63653 28.3337 15.0003Z"
                  stroke="#172159"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M10.8337 9.66732C10.8337 9.57527 10.9083 9.50065 11.0003 9.50065C11.0924 9.50065 11.167 9.57527 11.167 9.66732C11.167 9.75937 11.0924 9.83398 11.0003 9.83398C10.9083 9.83398 10.8337 9.75937 10.8337 9.66732ZM18.8337 9.66732C18.8337 9.57527 18.9083 9.50065 19.0003 9.50065C19.0924 9.50065 19.167 9.57527 19.167 9.66732C19.167 9.75937 19.0924 9.83398 19.0003 9.83398C18.9083 9.83398 18.8337 9.75937 18.8337 9.66732Z"
                  fill="#2D264B"
                  stroke="#172159"
                  stroke-width="3"
                />
              </svg>
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Experience at your door
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECEFFF] rounded-full text-blue-600">
              <svg
                width="15"
                height="25"
                viewBox="0 0 28 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3339 13.333V8.10992M8.6672 13.333V8.10992M8.6672 8.10992V6.66634C8.6672 3.72082 11.055 1.33301 14.0005 1.33301C16.9461 1.33301 19.3339 3.72082 19.3339 6.66634V8.10992M8.6672 8.10992C9.71615 7.99967 11.0528 7.99967 12.9177 7.99967H15.0833C16.9482 7.99967 18.2849 7.99967 19.3339 8.10992M8.6672 8.10992C7.86446 8.19428 7.23024 8.34321 6.65674 8.60612C5.49102 9.14051 4.50416 9.99978 3.81448 11.0809C3.03181 12.3078 2.80537 13.9382 2.35249 17.1989C1.77092 21.3862 1.48014 23.4798 2.11951 25.1059C2.68081 26.5334 3.7172 27.7237 5.05392 28.476C6.57655 29.333 8.69028 29.333 12.9177 29.333H15.0833C19.3108 29.333 21.4245 29.333 22.9472 28.476C24.2839 27.7237 25.3203 26.5334 25.8816 25.1059C26.5209 23.4798 26.2301 21.3862 25.6486 17.1989C25.1957 13.9382 24.9693 12.3078 24.1866 11.0809C23.4969 9.99978 22.51 9.14051 21.3443 8.60612C20.7708 8.34321 20.1366 8.19428 19.3339 8.10992"
                  stroke="#172159"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
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
