import React from 'react';
import { coveredByYourGrace } from '@/utils/fonts';

interface TitlePageProps {
  value: string; // 假设 value 是一个字符串
}
const TitlePage: React.FC<TitlePageProps> = ({ value }) => {
  return (
    <div
      className={` w-full flex items-center justify-center text-textPrimary ${coveredByYourGrace.className} leading-[104px]
        text-[64px]      mt-[24px]     mb-[24px]     h-[104px]
        mmd:text-[128px] mmd:mt-[80px] mmd:mb-[80px]
        `}
    >
      {value}
    </div>
  );
};
export default TitlePage;
