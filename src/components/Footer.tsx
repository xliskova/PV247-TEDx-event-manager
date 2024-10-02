'use client';
import Image from 'next/image';
import tedxImageLogo from '@/images/TEDxTrencin_logo.png';
import { signIn } from 'next-auth/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';

const signInUsingDiscord = () => {
  signIn('discord');
};
export const Footer = () => {
  return (
    <footer className="bg-grey px-5 text-grey text-xs lg:text-base text-center">
      <hr className="border-grey" />
      <div className="flex justify-center items-center">
        <a
          href="https://tedx.tedxtrencin.sk/podujatia/tedx-trencin-2024-hranice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={tedxImageLogo}
            alt="TEDxTrencin Logo"
            width={200}
            height={50}
          />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <IconButton
          aria-label="facebook"
          onClick={() => {
            window.open('https://www.facebook.com/TEDxTrencin', '_blank');
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="instagram"
          onClick={() => {
            window.open('https://www.instagram.com/tedxtrencin/', '_blank');
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="twitter"
          onClick={() => {
            window.open('https://twitter.com/tedxtrencin', '_blank');
          }}
        >
          <TwitterIcon />
        </IconButton>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="my-3 p-2 border border-red text-black rounded-lg"
          onClick={signInUsingDiscord}
        >
          PRIHLÁSIŤ
        </button>
      </div>
    </footer>
  );
};
