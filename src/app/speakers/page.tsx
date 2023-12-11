import { Metadata } from 'next';
import ListOfDetailInformationPage from '@/components/ListOfDetailInformation';

export const metadata: Metadata = {
  title: 'Rečníci',
  description:
    'TEDxTrenčín poskytuje platformu pre zaujimavých a inšpiratívnych ľudí, ktorých myšlienky, nápady a činy sú hodné zdieľania.',
  metadataBase: new URL('https://www.tedxtrencin.sk/images/facebook.jpg'),
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxTrenčín',
    description:
      'TEDxTrenčín poskytuje platformu pre zaujimavých a inšpiratívnych ľudí, ktorých myšlienky, nápady a činy sú hodné zdieľania.',
    images: [
      {
        url: 'https://www.tedxtrencin.sk/images/facebook.jpg',
        type: 'image/jpg',
        width: 1200,
        height: 630,
        alt: 'tedx',
      },
    ],
  },
};

const DetailInformationPage = () => {
  return (
    <>
      <ListOfDetailInformationPage />
    </>
  );
};
export default DetailInformationPage;
