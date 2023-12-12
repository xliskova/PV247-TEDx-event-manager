'use client';

import { SessionProvider, useSession } from 'next-auth/react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, status } = useSession();
  if (status === 'loading') {
    return <div>loading...</div>;
  }
  if (status === 'unauthenticated') {
    return <div className="h-screen">Please log in.</div>;
  }
  if (
    data?.user.email != 'majky.macho@gmail.com' &&
    data?.user.email != 'lelenka.liskova@gmail.com' &&
    data?.user.email != 'marek.seda@gmail.com'
  ) {
    return <div>Unauthorized</div>;
  }
  return <div className="text-center m-4 lg:m-16">{children}</div>;
}
