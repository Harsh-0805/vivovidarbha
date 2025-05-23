"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import Culture from "@/public/assets/Culture.webp";
import Vission from "@/public/assets/MissionVission.webp";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import Head from "next/head";

const AboutVivoNagpur = () => {
  const images = [
    // "/assets/aboutvivo1.jpg",
    "/assets/aboutvivo2.jpg",
    "/assets/aboutvivo3.jpg",
    "/assets/aboutvivo4.jpg",
    "/assets/aboutvivo5.jpg",
  ];

  return (
    <>
      <Head>
        <title>
          About Vivo Nagpur | Official Vivo Distributor in Vidarbha Region
        </title>
        <meta
          name="description"
          content="UNIMAY Electronic Pvt Ltd is the official distributor of Vivo smartphones in Nagpur and Vidarbha region. Learn about our mission, vision, and commitment to customer service."
        />
        <meta
          name="keywords"
          content="Vivo Nagpur, UNIMAY Electronic, Vivo distributor Vidarbha, Vivo authorized dealer Nagpur, Vivo smartphones Nagpur"
        />
      </Head>

      <Script id="about-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Vivo Nagpur - UNIMAY Electronic Pvt Ltd",
              "description": "Vivo Nagpur is a leading technology distributor, providing and promoting Vivo smartphones and accessories across the Vidarbha region.",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "UNIMAY Electronic Management"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6th Floor, Riaan House, LIC Square, Kingsway Rd",
                "addressLocality": "Nagpur",
                "postalCode": "440001",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "url": "https://www.vivonagpur.com",
              "sameAs": [
                "https://www.facebook.com/vivonagpur",
                "https://www.instagram.com/vivonagpur"
              ]
            }
          }
        `}
      </Script>
      <Navbar />
      <main className="w-full">
        <h1 className="sr-only">
          About Vivo Nagpur - Official Vivo Distributor in Vidarbha Region
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[400px] md:h-[500px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* About Section */}
        <div className="p-6 md:p-12 text-left bg-white">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            About VIVO Nagpur
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-gray-900">
            <li>
              Vivo Nagpur is a leading technology distributor, providing and
              promoting Vivo smartphones and accessories across the Vidarbha
              region.
            </li>
            <li>
              We are driven by innovation and customer-centric values, aiming to
              deliver cutting-edge smart devices and intelligent services to
              enhance user experiences.
            </li>
            <li>
              <strong>Official Website:</strong>{" "}
              <a
                href="https://www.vivonagpur.com"
                className="text-blue-500 underline"
              >
                www.vivonagpur.com
              </a>{" "}
              — in association with Vivo India.
            </li>
            <li>
              Registered Entity:{" "}
              <strong>Unimay Electronic Private Limited</strong>.
            </li>
            <li>
              Strong offline presence across Vidarbha, including Nagpur,
              Amravati, Akola, Wardha, Yavatmal, Bhandara, Gondia, Chandrapur,
              and Gadchiroli.
            </li>
            <li>
              We bring premium Vivo products closer to customers through an
              extensive network of retailers and service centers.
            </li>
            <li>
              Explore the latest Vivo smartphones, exclusive offers, and
              exceptional customer support with Vivo Nagpur – your trusted Vivo
              partner in Vidarbha!
            </li>
          </ul>
        </div>

        {/* Brochure Images */}
        <div className="flex flex-col gap-4 p-6 ">
          <div className="relative w-full h-[600px]">
            <Image src={Culture} alt="Brochure 2" fill className="rounded-lg" />
          </div>
          <div className="relative w-full h-[600px]">
            <Image src={Vission} alt="Brochure 2" fill className="rounded-lg" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutVivoNagpur;
