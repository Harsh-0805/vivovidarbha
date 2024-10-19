import React from "react";
import Image from "next/image";
import T2ProImage from "@/public/assets/GameOn.png"; // Replace with actual image paths
import Y75Image from "@/public/assets/AllDayBattery.png";
import X90Image from "@/public/assets/BestCamera.png";
import XFoldProImage from "@/public/assets/Flagship.png";
import Y18iImage from "@/public/assets/Budget.png";

const DiscoverSection: React.FC = () => {
  return (
    <section className="py-12 text-black bg-gray-100">
      <h2 className="text-left pl-6 sm:pl-20 text-black text-3xl font-vivoRegular mb-8">
        Discover
      </h2>
      <div className="columns-1 sm:columns-2 gap-6 px-6 md:px-20 sm:gap-8">
        {/* Card 1 */}
        <div className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group">
          <a href="/products">
            <div className="overflow-hidden">
              <Image
                src={T2ProImage}
                alt="T2 Pro"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-vivoRegular">Game On!</h3>
            </div>
          </a>
        </div>

        {/* Card 2 */}
        <div className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group">
          <a href="/products">
            <div className="overflow-hidden">
              <Image
                src={Y18iImage}
                alt="Y18i"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-vivoRegular">
                Budget-Friendly Choices
              </h3>
            </div>
          </a>
        </div>

        {/* Card 3 */}
        <div className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group">
          <a href="/products">
            <div className="overflow-hidden">
              <Image
                src={X90Image}
                alt="X90"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-vivoRegular">Capture Every Moment</h3>
            </div>
          </a>
        </div>

        {/* Card 4 */}
        <div className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group">
          <a href="/products">
            <div className="overflow-hidden">
              <Image
                src={Y75Image}
                alt="Y75"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-vivoRegular">All-Day Battery</h3>
            </div>
          </a>
        </div>

        {/* Card 5 */}
        <div className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group">
          <a href="/products">
            <div className="overflow-hidden">
              <Image
                src={XFoldProImage}
                alt="X Fold 3 Pro"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-vivoRegular">Elite Picks</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
