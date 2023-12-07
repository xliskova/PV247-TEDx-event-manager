'use client'

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/TEDxTrencin_logo.png';
import { signIn } from 'next-auth/react';

const signInUsingDiscord = () => {
  signIn('discord')
};

export const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between px-10 border-2">
    <Image src={Logo} alt="logo" width="200" />
    <ul className="flex">
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
      <li>
        <button className="bg-red p-4 rounded" onClick={signInUsingDiscord}>Prihlásenie</button>
      </li>
    </ul>
  </nav>
);
