"use client"; // Add this at the top

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import T2ProImage from "@/public/assets/GameOn.jpg";
import Y75Image from "@/public/assets/AllDayBattery.jpg";
import X90Image from "@/public/assets/BestCamera.jpg";
import XFoldProImage from "@/public/assets/Flagship.png";
import Y18iImage from "@/public/assets/Budget.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DiscoverSection: React.FC = () => {
  return (
    <section className="py-12 text-black bg-gray-100">
      <h2 className="text-left pl-6 sm:pl-20 text-black text-3xl font-vivoRegular mb-8">
        Discover
      </h2>
      <div className="columns-1 sm:columns-2 gap-6 px-6 md:px-20 sm:gap-8">
        {[
          { img: T2ProImage, title: "Game On!" },
          { img: Y18iImage, title: "Budget-Friendly Choices" },
          { img: X90Image, title: "Capture Every Moment" },
          { img: Y75Image, title: "All-Day Battery" },
          { img: XFoldProImage, title: "Elite Picks" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-4 bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <a href="/products">
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-vivoRegular">{item.title}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
