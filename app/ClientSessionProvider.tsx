'use client'; // This ensures that it's a client-side component

import { SessionProvider } from 'next-auth/react';

export default function ClientSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
