'use client';

import {SessionProvider} from 'next-auth/react';
import {PropsWithChildren} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



import {QueryClient, QueryClientProvider} from 'react-query';
import {LocalizationProvider} from "@mui/x-date-pickers";

const queryClient = new QueryClient();

export const Providers = ({children}: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SessionProvider>{children}</SessionProvider>
        </LocalizationProvider>
    </QueryClientProvider>
);
