import React, {useEffect, useRef, useState} from 'react';
import IconButton from "@/components/Common/Button/IconButton";
import WorkerSvg from "@/components/Svg/WorkerSvg";
import MoreSvg from "@/components/Svg/MoreSvg";
import PaperSvg from "@/components/Svg/PaperSvg";
import QuestionSvg from "@/components/Svg/QuestionSvg";
import DropdownMenu from "@/components/DropdownMenu";
import Tooltip from "@/components/Common/Tooltip";

const TabCreate = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="w-full mx-auto max-w-[800px] min-w-[343px] rounded-[32px] bg-backgroundGray backdrop-blur-[16px] font-montserrat
             p-[20px] mmd:p-[32px]
             text-[16px] text-textSecondary
        ">
            <div className="flex justify-between items-center mb-[32px] font-[700]
                text-[20px] leading-[18px] text-textPrimary
            ">
                <div className="flex items-center h-auto leading-auto mmd:h-[24px] mmd:leading-[24px]">
                    <div
                        className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.20)] flex justify-center items-center mr-[8px]">
                        <WorkerSvg/>
                    </div>
                    {/*<WorkerSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>*/}
                    Worker
                </div>
                <div className="relative" ref={dropdownRef}>
                    <div onClick={toggleDropdown} className="cursor-pointer">
                        <MoreSvg className="w-[24px] h-[24px]"/>
                    </div>
                    {isDropdownOpen && (
                        <DropdownMenu onClose={() => setIsDropdownOpen(false)}/>
                    )}
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
                <div className="flex items-center">
                    Fair mint ends in
                    <Tooltip
                        content="TapTap fair mint starts with a timer that counts down from 72 hours. Each fair mint resets the timer. When the timer reaches zero, the fair mint ends."
                        position="bottom">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div className="text-textPrimary">111</div>
            </div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div className="flex items-center">
                    Fair mint Fee
                    <Tooltip
                        content="The fee to participate in the fair mint is used as follows: 90% for TAPTAP buyback and 10% for Vault rewards."
                        position="bottom">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div className="text-textPrimary">
                    111
                </div>
            </div>
            <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[32px] mb-[32px]"></div>
            <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                <div>
                    Number of workers
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
