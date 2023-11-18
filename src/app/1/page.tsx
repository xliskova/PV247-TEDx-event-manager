import { DetailInformation } from '@/components/DetailInformation';
import { data } from '@/data';
const DetailInformationPage = () => {
  return (
    <>
      <div className="lg:m-16">
        <h1 className="text-center p-10">REČNÍCI</h1>
        {data.map((detail, index) => (
          <DetailInformation
            key={index}
            className={index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}
          />
        ))}
      </div>
    </>
  );
};
export default DetailInformationPage;
