import GroupSvg from '@/components/Svg/GroupSvg';
import Image from 'next/image';
import React from 'react';
import { montserrat } from '@/utils/fonts';

const WalletAd = () => {
  return (
    <div>
      <div
        className={`hidden mmd:flex items-center justify-between bg-backgroundPrimary rounded-full  
                h-[42px] w-[264px] px-[8px] ${montserrat.className}  text-[14px] font-[600]`}
      >
        <div className="flex items-center">
          <GroupSvg className="mr-[8px]" />
          0.000 ETH
        </div>
        <div className="bg-backgroundPrimary rounded-full flex items-center h-[32px] w-[130px]">
          <div className="bg-backgroundSecondary rounded-full flex items-center justify-center w-[24px] h-[24px] mr-[8px] ml-[4px]">
            <Image
              src="/mini_logo_img.png"
              alt="Logo"
              width={19.2}
              height={19.2}
            />
          </div>
          {/* TODO 处理 地址过长 w-86px */}
          0x12...123412
        </div>
      </div>
      <div
        className={`mmd:hidden flex items-center justify-between  ${montserrat.className} text-[14px]`}
      >
        <div className="bg-backgroundPrimary rounded-full w-[36px] h-[36px] flex items-center justify-center mr-[12px]">
          <GroupSvg />
        </div>
        <div className="bg-backgroundPrimary rounded-full flex items-center h-[36px] w-[136px] mmd:mr-[12px]">
          <div className="bg-backgroundSecondary rounded-full flex items-center justify-center w-[24px] h-[24px] mr-[8px] ml-[4px]">
            <Image
              src="/mini_logo_img.png"
              alt="Logo"
              width={19.2}
              height={19.2}
            />
          </div>
          {/* TODO 处理 地址过长 w-86px */}
          0x12...123412
        </div>
      </div>
    </div>
  );
};
export default WalletAd;
