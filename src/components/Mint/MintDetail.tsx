import Tabs from "@/components/Tabs";
import ProgressBar from "@/components/ProgressBar";
import PaperSvg from "@/components/Svg/PaperSvg";
import MoreSvg from "@/components/Svg/MoreSvg";
import {useEffect, useRef, useState} from "react";
import DropdownMenu from "@/components/DropdownMenu";
import TabClaim from "@/components/Mint/TabClaim";
import TabShare from "@/components/Mint/TabShare";
import TabStake from "@/components/Mint/TabStake";
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
        <div className="z-50 mx-auto font-montserrat max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[32px] text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div className="flex justify-between items-center text-[20px] font-[700] mb-[32px] text-textPrimary">
                <div className="flex justify-between items-center">
                    <PaperSvg className="mr-[8px]"/>
                    Mint Details</div>
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
                <div>cRank</div>
                <div>111</div>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
                <div>AMP</div>
                <div>111</div>
            </div>
            <div  className="flex justify-between items-center mb-[20px]">
                <div>EAA</div>
                <div>111</div>
            </div>
            <div  className="flex justify-between items-center mb-[20px]">
                <div>Term,days</div>
                <div>111</div>
            </div>
            <div  className="flex justify-between items-center mb-[20px]">
                <div>Estimated TAPTAP</div>
                <div>111</div>
            </div>
            <div  className="flex justify-between items-center mb-[32px]">
                <div className="w-full mr-[80px]">
                    {/*ProgressBar*/}
                    <ProgressBar progress={progress} height="10px" color="bg-primary" />
                </div>
                <div>0/1</div>
            </div>
            {/*Tabs*/}
            <div>
                <Tabs tabs={tabData} />
            </div>
        </div>
    )
}
export default MintDetail
