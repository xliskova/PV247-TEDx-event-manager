import { DetailInformation } from '@/components/DetailInformation';
import { GetSpeakers } from '@/server/services/SpeakerService';
import { Suspense } from 'react';

const ListOfDetailInformationPage = async () => {
  const { data } = await GetSpeakers();

  return (
    <div className="bg-grey pb-5">
      <div className="lg:mx-16">
        <h1 className="text-center p-10">REČNÍCI</h1>
        <Suspense fallback={<p>Loading...</p>}>
          {data?.map((speaker, index) => (
            <div key={speaker.id}>
              <DetailInformation
                className={
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }
                speaker={speaker}
              />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};
export default ListOfDetailInformationPage;
