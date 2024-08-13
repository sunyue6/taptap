import Tabs from "@/components/Common/Tabs";
import ProgressBar from "@/components/Common/ProgressBar";
import PaperSvg from "@/components/Svg/PaperSvg";
import MoreSvg from "@/components/Svg/MoreSvg";
import {useEffect, useRef, useState} from "react";
import DropdownMenu from "@/components/DropdownMenu";
import TabClaim from "@/components/Mint/TabClaim";
import TabShare from "@/components/Mint/TabShare";
import TabStake from "@/components/Mint/TabStake";
import GlobalRankSvg from "@/components/Svg/GlobalRankSvg";
const MintDetail = () => {
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
    const tabData = [
        {
            label: 'CLAIM',
            content: <TabClaim/>,
        },
        {
            label: 'CLAIM+SHARE',
            content: <TabShare/>,
        },
        {
            label: 'CLAIM+STAKE',
            content: <TabStake/>,
        },
    ];
    const progress = 2; // Example progress value
    return (
        <div className="mx-auto w-full">
            <div
                className="mx-auto font-montserrat max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-backgroundGray backdrop-blur-[16px] p-[20px] mmd:p-[32px] text-[16px] leading-[18px] font-[600] text-textSecondary">
                <div className="flex justify-between items-center text-[20px] font-[700] mb-[32px] text-textPrimary">
                    <div
                        className="flex justify-between items-center h-auto leading-auto mmd:h-[24px] mmd:leading-[24px]">
                        <div
                            className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.20)] flex justify-center items-center mr-[8px]">
                            <PaperSvg/>
                        </div>
                        {/*<PaperSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>*/}
                        Mint Details
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
                <div className="flex justify-between items-center mb-[20px]">
                    <div>cRank</div>
                    <div className="text-textPrimary">6,522,912</div>
                </div>
                <div className="flex justify-between items-center mb-[20px]">
                    <div>AMP</div>
                    <div className="text-textPrimary">19,921</div>
                </div>
                <div className="flex justify-between items-center mb-[20px]">
                    <div>EAA</div>
                    <div className="text-textPrimary">0%</div>
                </div>
                <div className="flex justify-between items-center mb-[20px]">
                    <div>Term,days</div>
                    <div className="text-textPrimary">1</div>
                </div>
                <div className="flex justify-between items-center mb-[20px]">
                    <div>Estimated TAPTAP</div>
                    <div className="text-textPrimary">4,722</div>
                </div>
                <div className="flex justify-between items-center mb-[32px]">
                    <div className="w-full mr-[80px]">
                        {/*ProgressBar*/}
                        <ProgressBar progress={progress} height="10px" color="bg-primary"/>
                    </div>
                    <div className="text-textPrimary">0/1</div>
                </div>
                {/*Tabs*/}
                <div>
                    <Tabs tabs={tabData} borderClass={'border-b-0'}/>
                </div>
            </div>
        </div>
    )
}
export default MintDetail
