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
    <footer className="bg-footerGrey px-5 text-grey text-md text-center">
      <div className="md:flex justify-between">
        <div className="md:flex md:w-3/4 items-center">
          <Image
            src={tedxImageLogo}
            alt={'tedxImageLogo'}
            className="px-16 md:w-1/3"
          />
          <div className="text-justify">
            <p>
              Formát TEDx vznikol v duchu motta „myšlienky hodné šírenia&quot; ako
              program lokálnych, samostatne organizovaných podujatí, ktoré
              umožňujú ľuďom stretnúť sa kdekoľvek na svete a zažiť atmosféru
              svetovej konferencie na vlastnej koži.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-2 lg:pr-16">
          <IconButton
            aria-label="Facebook"
            color="error"
            component="a"
            href={'https://www.facebook.com/tedxtrencin?fref=ts'}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            color="error"
            component="a"
            href={'https://www.instagram.com/tedxtrencin/'}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            color="error"
            component="a"
            href={'https://twitter.com/tedxtrencin'}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <hr className="border-dashed py-3" />
      <div>
        <div>
          © {new Date().getFullYear()} TEDXTRENČÍN. THIS INDEPENDENT TEDX EVENT
          IS OPERATED UNDER LICENSE FROM TED.
        </div>
        <div>
          <button
            className="my-3 p-2 border border-red"
            onClick={signInUsingDiscord}
          >
            PRIHLÁSIŤ
          </button>
        </div>
      </div>
    </footer>
  );
};
