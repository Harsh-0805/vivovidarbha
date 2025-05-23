import React from "react";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/Carousel";
import { ShopByCategory } from "@/components/Category";
import { WhyVivoNagpur } from "@/components/WhyVivoNagpur";
import MustHaveProducts from "@/components/MustHave";
import DiscoverSection from "@/components/Discover";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivo Nagpur | Official Authorized Vivo Smartphone Dealer in Vidarbha",
  description:
    "Buy latest Vivo smartphones in Nagpur & Vidarbha region. Explore X series, V series, Y series phones with best prices, service & support from UNIMAY Electronic Pvt Ltd.",
};

const Home: React.FC = () => {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vivo Nagpur",
            "alternateName": "UNIMAY Electronic Pvt Ltd",
            "url": "https://www.vivonagpur.com",
            "logo": "https://www.vivonagpur.com/assets/vivo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9028004978",
              "contactType": "customer service",
              "areaServed": "Vidarbha",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6th Floor, Riaan House, LIC Square, Kingsway Rd",
              "addressLocality": "Nagpur",
              "postalCode": "440001",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/vivonagpur",
              "https://www.instagram.com/vivonagpur"
            ]
          }
        `}
      </Script>
      <main>
        <h1 className="sr-only">
          Vivo Nagpur - Official Authorized Vivo Smartphone Dealer in Vidarbha
          Region
        </h1>
        <Navbar />
        <HeroSection />
        <MustHaveProducts />
        <DiscoverSection />
        <WhyVivoNagpur />
        <Footer />
      </main>
    </>
  );
};

export default Home;
