'use client';
import { useSpeakers } from '@/app/api/api';
import { DetailInformation } from '@/components/DetailInformation';

const ListOfDetailInformationPage = () => {
  const { data: speakers, isLoading } = useSpeakers();

  return (
    <div className="bg-grey pb-5">
      <div className="lg:mx-16">
        <h1 className="text-center p-10">REČNÍCI</h1>
        {isLoading && <p>Loading...</p>}
        {speakers?.map((speaker, index) => (
          <div key={speaker.id}>
            <DetailInformation
              className={
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }
              speaker={speaker}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListOfDetailInformationPage;
