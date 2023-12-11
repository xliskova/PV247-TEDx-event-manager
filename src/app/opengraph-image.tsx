import { ImageResponse } from 'next/og';
import Logo from '../images/TEDxTrencin_logo.png';
import Image from 'next/image';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function OpenGraphImage2({
  params,
}: {
  // read [repository] route slug
  params: { repository: string };
}) {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: 18,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  };

  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div>
          <div>
            <a href="https://www.tedxtrencin.sk/">TEDx Trenčín</a>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1>Tedx Trenčín</h1>
              <Image src={Logo} alt="logo" width="100" />
            </div>
            <p style={{ textAlign: 'justify' }}>
              TEDxTrenčín poskytuje platformu pre zaujimavých a inšpiratívnych
              ľudí, ktorých myšlienky, nápady a činy sú hodné zdieľania. Našou
              iniciatívou chceme posunúť ľudí vpred, otvoriť im myseľ, ukázať
              nepoznané a inšpirovať ich.
            </p>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
