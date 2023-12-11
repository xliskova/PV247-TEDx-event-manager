'use client';

import Link from 'next/link';
import Image from 'next/image';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Logo from '../images/TEDxTrencin_logo.png';
import { useSession } from 'next-auth/react';
import NavbarEditDropdown from '@/components/NavbarEditDropdown';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export const Navbar = () => {
  const { data, status } = useSession();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 md:px-16 py-4 bg-gray-800">
      <Link href="/">
        <Image src={Logo} alt="logo" width="200" />
      </Link>
      <div className="sm:hidden px-5">
        <IconButton aria-label="menu">
          <DensityMediumIcon onClick={() => setOpen(!open)} />
        </IconButton>
      </div>
      {open && (<div>
      <ul className="flex text-base md:ml-auto">
        <li>
          <Link className="mr-6 flex-shrink-0" href="/">
            <span className="md:text-2xl font-semibold tracking-tight">
              Program
            </span>
          </Link>
        </li>
        <li>
          <Link className="mr-6 flex-shrink-0" href="/speakers">
            <span className="md:text-2xl font-semibold tracking-tight">
              Rečníci
            </span>
          </Link>
        </li>
        <li>
          <Link className="mr-6 flex-shrink-0" href="/slido">
            <span className="md:text-2xl font-semibold tracking-tight">Slido</span>
          </Link>
        </li>
        {status === 'authenticated' && (
          <li>
            <NavbarEditDropdown />
          </li>
        )}
      </ul>
      </div>)}
    </nav>
  );
};
