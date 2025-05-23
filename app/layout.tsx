// app/layout.tsx
import "./globals.css";
import ClientSessionProvider from "./ClientSessionProvider";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivo Nagpur | Authorized Vivo Smartphones Dealer in Vidarbha Region",
  description:
    "Official authorized Vivo smartphones dealer in Nagpur & Vidarbha region. Explore latest Vivo X series, V series & Y series phones, accessories & service centers. UNIMAY Electronic Pvt Ltd.",
  keywords:
    "Vivo Nagpur, Vivo smartphones, Vivo Vidarbha, UNIMAY Electronic, Vivo mobiles, Vivo service center Nagpur, Vivo X series, Vivo V series, Vivo Y series, buy Vivo Nagpur",
  openGraph: {
    title:
      "Vivo Nagpur | Authorized Vivo Smartphones Dealer in Vidarbha Region",
    description:
      "Official authorized Vivo smartphones dealer in Nagpur & Vidarbha region. Explore latest models, accessories & service centers.",
    url: "https://www.vivonagpur.com",
    siteName: "Vivo Nagpur",
    images: [
      {
        url: "/assets/vivo-nagpur-og-image.jpg", // Create this image if it doesn't exist
        width: 1200,
        height: 630,
        alt: "Vivo Nagpur official store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivo Nagpur | Authorized Vivo Smartphones Dealer",
    description:
      "Official Vivo smartphones dealer in Nagpur & Vidarbha region. Explore latest models and accessories.",
    images: ["/assets/vivo-nagpur-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.vivonagpur.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script type="text/javascript" id="calrity">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ojcqjqxi1z");
        `}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N751J74C8L"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N751J74C8L');
        `}
        </Script>
      </head>
      <body>
        <ClientSessionProvider>{children}</ClientSessionProvider>{" "}
        {/* Wrap children */}
      </body>
    </html>
  );
}
