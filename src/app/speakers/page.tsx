import { Metadata } from 'next';
import ListOfDetailInformationPage from '@/components/ListOfDetailInformation';

export const metadata: Metadata = {
  title: 'Rečníci',
};

const DetailInformationPage = () => {
  return (
    <>
      <ListOfDetailInformationPage />
    </>
  );
};
export default DetailInformationPage;
