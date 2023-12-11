import { Metadata } from 'next';
import Program from '@/components/Program';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Program | TEDxTrenčín',
};

export default function Home() {
  return (
    <>
      <Program />
    </>
  );
}
