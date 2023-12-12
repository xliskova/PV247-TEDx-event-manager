'use client';
import { SpeakerGetDto } from '@/server/dto/SpeakerDto';
import { Speaker } from '@/model/Speaker';
import { CldImage } from 'next-cloudinary';

interface DetailInformationProps {
  className?: string;
  speaker: SpeakerGetDto;
}

export const DetailInformation = ({
  className,
  speaker,
}: DetailInformationProps) => {
  return (
    <div
      className={`flex lg:flex-row flex-col lg:p-16 mb-8 rounded-2xl shadow-md bg-white ${className} flex-shrink-0  w-full`}
    >
      <div className="flex justify-center lg:justify-start md:w-2/5">
        <CldImage
          alt={speaker.name}
          src={speaker.url ?? ''}
          width="300"
          height="100"
          sizes="(min-width: 768px) 100vw,
          (mix-width: 500px) 50vw,
          33vw"

        />
      </div>
      <div className="p-6 text-justify">
        <div className="flex justify-between">
          <h1>{speaker.name}</h1>
        </div>
        <h2 className="pt-5">Popis řečníka:</h2>
        <span>{speaker.description}</span>
      </div>
    </div>
  );
};
