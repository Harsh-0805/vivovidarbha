import React from "react";
import Image, { StaticImageData } from "next/image";
import ServiceIcon from "@/public/assets/24service.png";
import SupportIcon from "@/public/assets/person.png";
import DiscountIcon from "@/public/assets/discount.png";

interface Feature {
  icon: StaticImageData;
  title: string;
}

const features: Feature[] = [
  {
    icon: ServiceIcon,
    title: "Personalized In-Home Service",
  },
  {
    icon: SupportIcon,
    title: "24/7 Service Support",
  },
  {
    icon: DiscountIcon,
    title: "Exclusive Discounts",
  },
];

export const WhyVivoNagpur: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl text-center font-normal text-black mb-8">
        Why vivo Nagpur
      </h2>
      <div className="mx-auto text-center px-6 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-[10rem] gap-8 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-normal text-black">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
