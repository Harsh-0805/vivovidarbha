import Image from "next/image";
import React from "react";
import Category1 from "@/public/assets/Category1.png";
import Category2 from "@/public/assets/Category2.png";
import Category3 from "@/public/assets/Category3.png";
import Category4 from "@/public/assets/Category4.png";

interface Category {
  name: string;
  imageSrc: string;
}

const categories: Category[] = [
  { name: "Smartphones", imageSrc: Category1.src },
  { name: "IQOO", imageSrc: Category2.src },
  { name: "Audio", imageSrc: Category3.src },
  { name: "Accessories", imageSrc: Category4.src },
];

export const ShopByCategory: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-left pl-6 sm:pl-20 text-black text-3xl font-normal mb-8">
        Shop By Category
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 px-6 sm:px-20">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] text-black rounded-[40px] shadow hover:shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={category.imageSrc}
              alt={category.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain mb-4"
              width={96}
              height={112}
            />
            <p className="text-center p-4 text-lg font-normal">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
