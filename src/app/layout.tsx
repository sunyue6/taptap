import type { Metadata } from 'next';
import { inter } from '@/utils/fonts';
import './globals.css';
import OverlayBackground from '@/components/OverlayBackground';
import Navbar from '@/components/Navbar/Navbar';
import PositionIcon from '@/components/PositionIcon';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'TapTap',
  description: 'TapTap crypto'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen flex flex-col bg-backgroundSecondary relative overflow-hidden">
          {/*<img src="/bg_img.png" alt="" className="w-full h-auto absolute left-0 top-0"/>*/}
          <Image
            src="/bg_img.png"
            alt=""
            width={1874}
            height={1071}
            layout="responsive"
            objectFit="cover"
            className="w-full h-auto absolute left-0 top-0"
          />
          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)'
            }}
          ></div>
          <div className="pointer-events-none">
            <OverlayBackground />
          </div>
          <div>
            <Navbar />
          </div>
          <div
            className={`z-10 container max-w-[1232px] min-w-[375px] mx-auto flex-grow px-[16px] mt-[76px]  mmd:mt-[90px]`}
          >
            {children}
          </div>
          <div className="h-auto mmd:h-[108px] mt-0 mmd:mt-[120px]"></div>
          <PositionIcon />
          <Footer />
        </div>
      </body>
    </html>
  );
}
