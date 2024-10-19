// app/layout.tsx
import './globals.css';
import ClientSessionProvider from './ClientSessionProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>{children}</ClientSessionProvider> {/* Wrap children */}
      </body>
    </html>
  );
}
