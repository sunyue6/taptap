import ChangeSvg from "@/components/Svg/ChangeSvg";
import GasStationSvg from "@/components/Svg/GasStationSvg";
import Image from "next/image";
import React from "react";
import DownArrowSvg from "@/components/Svg/DownArrowSvg";
import GlobalRankSvg from "@/components/Svg/GlobalRankSvg";
import TextButton from "@/components/Common/Button/TextButton";
import BaseButton from "@/components/Common/Button/BaseButton";





const SwapInfo = () => {
    return (
        <div
            className="z-10 mx-auto w-full font-montserrat h-[444px] rounded-[32px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[16px] text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div className="flex justify-start items-center text-[20px] font-[700] mb-[16px] text-textPrimary">
                <div
                    className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.20)] flex justify-center items-center mr-[8px]">
                    <ChangeSvg/>
                </div>
                Swap
            </div>
            <div
                className="rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[16px] font-[500] text-[12px] mb-[4px] relative">
                <div className="mb-[4px]">Sell</div>
                <div className="flex justify-between items-center mb-[6px]">
                    {/*<div className="text-[32px] font-[600]">122312</div>*/}
                    <input
                        className="w-[186px] rounded-[8px] bg-transparent outline-none placeholder:text-textPrimary text-[32px] font-[600] text-textPrimary"
                        placeholder="122312"
                    />
                    <div>
                        <div
                            className="bg-backgroundPrimary rounded-full flex items-center justify-center h-[40px] leading-[40px] pl-[8px] pr-[12px] text-[20px]">
                            <Image src="/logo_circle.png" alt="Logo" width={24} height={24}
                                   className="mr-[4px] w-[24px] h-[24px]"/>
                            TAP
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        $267,536.17
                    </div>
                    <div>
                        Balance:1.234 <span className="text-success text-[14px] ml-[8px]">MAX</span>
                    </div>
                </div>
                <DownArrowSvg className="absolute left-1/2 transform -translate-x-1/2"/>

            </div>
            <div
                className="rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[16px] font-[500] text-[12px]">
                <div className="mb-[4px]">Sell</div>
                <div className="flex justify-between items-center mb-[6px]">
                    <div className="text-[32px] font-[600]">0</div>
                    <div>
                        <div
                            className="bg-backgroundPrimary rounded-full flex items-center justify-center h-[40px] leading-[40px] pl-[8px] pr-[12px] text-[20px]">
                            <Image src="/eth_img.png" alt="Logo" width={24} height={24} className="mr-[4px]"/>
                            ETH
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        $267,536.17
                    </div>
                    <div>
                        Balance:1.234
                    </div>
                </div>
            </div>
            <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[16px] mb-[16px]"></div>

            <div className="flex justify-between items-center text-[12px] mb-[16px]">
                <div>
                    1 TAP = 0.00000006312 ETH
                   <span className="text-backgroundThird ml-[10px]">
                        ($1.00)
                   </span>
                </div>
                <div className="flex items-center">
                    <GasStationSvg className="mr-[4px]"/>
                    $6.97
                </div>
            </div>
            <BaseButton text="SWAP" width="100%" height="60px" fontSize="24px" />

        </div>
    )
}
export default SwapInfo
