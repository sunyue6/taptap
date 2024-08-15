import Image from 'next/image';
import { hanalei, spartan } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer
      className="z-50 fixed bottom-0 w-full bg-backgroundSecondary py-[24px] rounded-t-[20px] px-[16px]
                                                               mmd:rounded-t-[40px]"
    >
      <div
        className="mx-auto flex flex-col
                                    mmd:flex-row items-center justify-between max-w-[1200px] h-[60px]"
      >
        <div
          className="flex items-center mb-[12px]
                                                  mmd:mb-0"
        >
          <Image
            src="/logo_img.png"
            alt="Logo"
            width={44}
            height={37.29}
            className="mt-[15px] hidden mmd:block"
          />
          <Image
            src="/mo_mini_logo.png"
            alt="Logo"
            width={28}
            height={23}
            className="block mmd:hidden"
          />
          {/*font-hanalei*/}
          <div
            className={`text-textPrimary ${hanalei.className} text-[20px]   ml-[4px]
                                                                  mmd:text-[30px] mmd:ml-[12px]`}
          >
            TAPTAP
          </div>
        </div>
        <div
          className={`text-textPrimary text-[14px] ${spartan.className} font-[500] mmd:font-[400] leading-[18px]`}
        >
          © 2024 TAPTAP.meme
        </div>
      </div>
    </footer>
  );
};

export default Footer;
