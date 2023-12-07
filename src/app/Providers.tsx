'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';


import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
</QueryClientProvider>
);
