import { DetailInformation } from '@/components/DetailInformation';
import { data } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rečníci',
};

const DetailInformationPage = () => {
  return (
    <div className="bg-grey pb-5">
      <div className="lg:mx-16">
        <h1 className="text-center p-10">REČNÍCI</h1>
        {data.map((detail, index) => (
          <div key={index} id={index.toString()}>
            <DetailInformation
              className={
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailInformationPage;
