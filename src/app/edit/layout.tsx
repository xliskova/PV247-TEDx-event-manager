'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { PropsWithChildren, use } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {data, status} = useSession();
  if (status === 'loading') {
    return <div>loading...</div>;
  }
  if (status === 'unauthenticated') {
    return <div>Please log in.</div>;
  }
  if (data?.user.email != 'marek.seda@gmail.com') { 
    return <div>Unauthorized</div>;
  }
  return (
    {children}
  );
}
