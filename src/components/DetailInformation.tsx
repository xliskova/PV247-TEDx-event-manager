'use client';

import { Speaker } from '@/model/Speaker';
import { CldImage } from 'next-cloudinary';

interface DetailInformationProps {
  className?: string;
  speaker: Speaker;
}

export const DetailInformation = ({
  className,
  speaker,
}: DetailInformationProps) => {
  return (
    <div
      className={`flex lg:flex-row flex-col lg:p-8 mb-8 py-8 rounded-2xl shadow-md bg-white ${className} flex-shrink-0  w-full`}
    >
      <div className="flex justify-center items-center w-full md:w-1/3">
        <CldImage
          alt={speaker.name}
          src={speaker.url ?? ''}
          width="300"
          height="100"
          sizes="(min-width: 768px) 33vw,
          (mix-width: 500px) 50vw,
          100vw"
        />
      </div>
      <div className="p-6 text-left lg:w-2/3">
        <div className="flex justify-between text-red">
          <h1>{speaker.name}</h1>
        </div>
        <h2 className="pt-5">Popis řečníka:</h2>
        <span className="whitespace-pre-wrap">{speaker.description}</span>
      </div>
    </div>
  );
};
