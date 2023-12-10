'use client';

import { SessionProvider, useSession } from 'next-auth/react';

export default function AdminLayout({
  children
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
  if (data?.user.email != 'lelenka.liskova@gmail.com') { 
    return <div>Unauthorized</div>;
  }
  return (
    <div className='h-screen text-center m-16'>{children}</div>
  );
}
