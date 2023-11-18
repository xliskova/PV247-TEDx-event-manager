import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/TEDxTrencin_logo.png';
export const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between px-10 border-2">
    <Image src={Logo} alt="logo" width="200" />
    <div className="flex">
      <Link
        className="mr-6 flex flex-shrink-0 items-center text-white"
        href="/"
      >
        <span className="text-xl font-semibold tracking-tight">Program</span>
      </Link>
      <Link
        className="mr-6 flex flex-shrink-0 items-center text-white"
        href="/1"
      >
        <span className="text-xl font-semibold tracking-tight">Rečníci</span>
      </Link>
      <button className="bg-red p-4 rounded">Prihlásenie</button>
    </div>
  </nav>
);
