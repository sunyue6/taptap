import {useEffect, useRef, useState} from "react";
import QuestionSvg from "@/components/Svg/QuestionSvg";
import TitleIcSvg from "@/components/Svg/TitleIcSvg";
import MoreSvg from "@/components/Svg/MoreSvg";
import ChevronRightSvg from "@/components/Svg/ChevronRightSvg";
import Tooltip from "@/components/Tooltip";
import ShareSvg from "@/components/Svg/ShareSvg";
import AddSvg from "@/components/Svg/AddSvg";
import DropdownMenu from "@/components/DropdownMenu";
const FairMintTapTap = () => {
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
        <div className="z-50 text-white mx-auto font-montserrat max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[32px] text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div className="flex justify-between items-center text-[20px] font-[700] mb-[32px] text-textPrimary">
                <div className="flex justify-between items-center">
                    <TitleIcSvg className="mr-[8px]"/>
                    Fair Mint TAPTAP</div>
                <div className="relative" ref={dropdownRef}>
                    <div onClick={toggleDropdown} className="cursor-pointer">
                        <MoreSvg />
                    </div>
                    {isDropdownOpen && (
                        <DropdownMenu onClose={() => setIsDropdownOpen(false)} />
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
                <div>Term,days(1-100)</div>
                <input
                    defaultValue="1"
                    type="number"
                    min="1"
                    max="100"
                    className="border border-textSecondary rounded-[8px] w-[148px] p-[12px] bg-transparent"/>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
                <div>Global Rank</div>
                <div>111</div>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
                <div>Estimated TAPTAP</div>
                <div>111</div>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
                <div className="flex items-center">Fair mint ends in
                    <Tooltip content="TapTap fair mint starts with a timer that counts down from 72 hours. Each fair mint resets the timer. When the timer reaches zero, the fair mint ends." position="top">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div>111</div>
            </div>
            <div  className="flex justify-between items-center mb-[32px]">
                <div className="flex items-center">Fair mint Fee
                    <Tooltip content="The fee to participate in the fair mint is used as follows: 90% for TAPTAP buyback and 10% for Vault rewards." position="top">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div>111</div>
            </div>
            <div className="flex justify-center mb-[32px]">
                <button
                    className="flex items-center font-hanalei bg-primary text-textPrimary rounded-[40px] hover:bg-primaryHover whitespace-nowrap text-[24px] px-[52px] h-[60px]"
                >
                   FAIR MINT <ChevronRightSvg className="ml-[8px]"/>
                </button>
            </div>
            <div className="flex justify-center">
                <button className="font-hanalei text-[24px]">BATCH MINT</button>
            </div>
        </div>
    )
}
export default FairMintTapTap;
