// app/layout.tsx
import './globals.css';
import ClientSessionProvider from './ClientSessionProvider';
import Script from 'next/script';

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
        <ClientSessionProvider>{children}</ClientSessionProvider> {/* Wrap children */}
      </body>
    </html>
  );
}
