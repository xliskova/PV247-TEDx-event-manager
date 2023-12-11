import tedxImage from '@/images/tedxImage1.jpg';
import { Speaker } from '@/model/Speaker';
import { CldImage } from 'next-cloudinary';

interface DetailInformationProps {
  className?: string;
  speaker: Speaker;
}

export const DetailInformation = ({ className, speaker }: DetailInformationProps) => {
  return (
    <div
      className={`flex lg:flex-row flex-col lg:p-16 mb-8 rounded-2xl shadow-md bg-white ${className}`}
    >
      <div className="flex justify-center lg:w-full">
        <CldImage
          alt={speaker.name}
          src={speaker.url ?? ''}
          width="100"
          height="100"
        />
      </div>
      <div className="px-6 text-justify">
        <div className="flex justify-between">
          <h1>{speaker.name}</h1>
        </div>
        <h2 className="pt-10">Popis řečníka:</h2>
        <span>
          {speaker.description}
        </span>
      </div>
    </div>
  );
};
