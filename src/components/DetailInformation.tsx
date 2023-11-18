import Image from 'next/image';
import tedxImage from '@/images/tedxImage1.jpg';
import { Tags } from '@/components/Tags';

interface DetailInformationProps {
  className?: string;
}

export const DetailInformation = ({ className }: DetailInformationProps) => {
  return (
    <div
      className={`flex lg:flex-row flex-col lg:p-16 mb-8 rounded-2xl shadow-md bg-white ${className}`}
    >
      <div className="flex justify-center lg:w-full">
        <Image
          src={tedxImage}
          alt="image"
          className="w-1/2 p-5 md:object-contain lg:w-5/6"
        />
      </div>
      <div className="px-6 text-justify">
        <div className="flex justify-between">
          <h1>Martin Spano</h1>
          <Tags />
        </div>
        <span>
          Martin Spano je počítačový vedec, futurista, spisovateľ a člen
          expertného tímu pre stratégiu rozvoja umelej inteligencie na
          Slovensku. Jeho kniha The Artificial Intelligence in a Nutshell, ktorá
          vyšla aj v slovenčine, sa stala v USA bestsellerom. Venuje sa vedeckej
          osvete, jeho cieľom je širokej verejnosti objasňovať častokrát
          kontroverzné vedecké objavy, aby nedošlo k ich nesprávnej
          interpretácii. Zastáva názor, že vyspelá technológia ako umelá
          inteligencia pomôže vyriešiť pálčivé problémy ľudstva (globálne
          otepľovanie, chudoba, rakovina).
        </span>
        <h2 className="pt-10">Prečo práve Martin:</h2>
        <span>
          Okrem toho, že Martin sa venuje témam technologického pokroku a umelej
          inteligencie, má veľmi blízky vzťah k prírode a zaujíma sa o
          klimatické zmeny. V dnešnej dobe, kedy sú najväčšie svetové pralesy
          zmietané požiarmi a neustále sa objavujú nové klimatické problémy, je
          viac než potrebné hľadať netradičné riešenia. Ako dokážeme použiť
          umelú inteligenciu pri zachraňovaní planéty? To sa dozviete z jeho
          talku. (Patrik, koordinátor rečníkov)
        </span>
        <h2 className="text-darkGrey pt-5">Prednáška: Nazov prednášky</h2>
      </div>
    </div>
  );
};
