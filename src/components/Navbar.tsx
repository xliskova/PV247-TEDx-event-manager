'use client'

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/TEDxTrencin_logo.png';

export const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between px-10">
    <Link href="/">
      <Image src={Logo} alt="logo" width="200" />
    </Link>
    <ul className="flex text-base">
      <li>
        <Link className="mr-6 flex flex-shrink-0 items-center" href="/">
          <span className="text-xl font-semibold tracking-tight">Program</span>
        </Link>
      </li>
      <li>
        <Link className="mr-6 flex flex-shrink-0 items-center" href="/speakers">
          <span className="text-xl font-semibold tracking-tight">Rečníci</span>
        </Link>
      </li>
      <li>
        <Link className="mr-6 flex flex-shrink-0 items-center" href="/tags">
          <span className="text-xl font-semibold tracking-tight">Tagy</span>
        </Link>
      </li>
    </ul>
  </nav>
);
