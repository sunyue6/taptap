import React from 'react';
interface TitlePageProps {
    value: string; // 假设 value 是一个字符串
}
const TitlePage: React.FC<TitlePageProps> = ({ value }) => {
    return (
        <div className="z-40 w-full flex items-center justify-center text-textPrimary mt-[94px] font-coveredByYourGrace text-[64px] md:text-[128px] py-[24px] md:py-[80px] leading-[104px]">
            {value}
        </div>
    )
}
export default TitlePage;
