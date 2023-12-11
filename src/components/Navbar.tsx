'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/TEDxTrencin_logo.png';
import { useSession } from 'next-auth/react';
import NavbarEditDropdown from '@/components/NavbarEditDropdown';

export const Navbar = () => {
  const { data, status } = useSession();

  return (
    <nav className="flex flex-wrap items-center justify-between px-16">
      <Link href="/">
        <Image src={Logo} alt="logo" width="200" />
      </Link>
      <ul className="flex text-base">
        <li>
          <Link className="mr-6 flex flex-shrink-0 items-center" href="/">
            <span className="text-2xl font-semibold tracking-tight">
              Program
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="mr-6 flex flex-shrink-0 items-center"
            href="/speakers"
          >
            <span className="text-2xl font-semibold tracking-tight">
              Rečníci
            </span>
          </Link>
          <Link className="mr-6 flex flex-shrink-0 items-center" href="/slido">
              <span className="text-xl font-semibold tracking-tight">Slido</span>
          </Link>
        </li>

        {status === 'authenticated' && (
          <li>
            <NavbarEditDropdown />
          </li>
        )}
      </ul>
    </nav>
  );
};
