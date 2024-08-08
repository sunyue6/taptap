import React from 'react';
import IconButton from "@/components/Common/Button/IconButton";
import WorkerSvg from "@/components/Svg/WorkerSvg";
import MoreSvg from "@/components/Svg/MoreSvg";

const TabCreate = () => {
    return (
        <div className="w-full mx-auto max-w-[800px] min-w-[343px] rounded-[32px] bg-backgroundGray backdrop-blur-[16px] font-montserrat
             p-[20px] mmd:p-[32px]
             text-[16px] text-textSecondary
        ">
            <div className="flex justify-between items-center mb-[32px] font-[700]
                text-[20px] leading-[18px] text-textPrimary
            ">
                <div className="flex items-center">
                    <WorkerSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>Worker
                </div>
                <div>
                    <MoreSvg className="w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>
                </div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Term, days (1 - 100)
                </div>
                <div>
                    <input
                        defaultValue="1"
                        type="number"
                        min="1"
                        max="100"
                        className=" outline-none
                        border border-textSecondary rounded-[8px] h-[42px] p-[12px] bg-transparent w-[100px] mmd:w-[148px]"/>
                </div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Global Rank
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center  mb-[16px] mmd:mb-[20px]">
                <div>
                    Estimated TAPTAP
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Fair mint ends in
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Fair mint Fee
                </div>
                <div>
                    <input
                        defaultValue="1"
                        type="number"
                        min="1"
                        max="100"
                        className=" outline-none
                        border border-textSecondary rounded-[8px] h-[42px] p-[12px] bg-transparent w-[100px] mmd:w-[148px]"/>
                </div>
            </div>
            <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[32px] mb-[32px]"></div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Number of workers
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Worker Fee
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Total Fees
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="text-[14px] mb-[32px]">
                Worker provides batch FairMint services for smart contracts, supporting one-click Fair Mint, Claim Tap.
            </div>
           <div className="flex justify-center">
               <IconButton text="FAIR MINT" />
           </div>
        </div>
    )
}
export default TabCreate
