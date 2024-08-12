import React, {useEffect, useRef, useState} from "react";
import MoreSvg from "@/components/Svg/MoreSvg";
import QuestionSvg from "@/components/Svg/QuestionSvg";
import EthLogoSvg from "@/components/Svg/EthLogoSvg";
import Image from "next/image";
import TapTable from "@/components/Common/TapTable/TapTable";
import IconButton from "@/components/Common/Button/IconButton";
import KeySvg from "@/components/Svg/KeySvg";
import DropdownMenu from "@/components/DropdownMenu";
import Tooltip from "@/components/Common/Tooltip";




const Jackpot = () => {
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

    const rows = [
        { Worker: (<div
                className="flex items-center justify-start rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] mmd:text-[20px] font-[500] text-success">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: (
                <div className="text-success text-[16px] mmd:text-[24px]">#315,739,255</div>
            ), Reward: (<div className="text-success flex justify-end items-center text-[16px] mmd:text-[32px]">4,722
                <EthLogoSvg className="w-[14px] h-[22px] ml-[4px] mmd:ml-[8px]"/>
            </div>)
        },
        {Worker: (<div
                className="w-[105px] flex items-center rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] font-[500]">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: '#315,739,255', Reward: (
                <div className="flex justify-end items-center text-[16px]">
                    4,722
                    <EthLogoSvg className="w-[10px] h-[16px] ml-[4px] mmd:ml-[8px]" color="#fff"/>
                </div>
            )},
        {Worker: (<div
                className="w-[105px] flex items-center rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] font-[500]">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: '#315,739,255', Reward: (
                <div className="flex justify-end items-center text-[16px]">
                    4,722
                    <EthLogoSvg className="w-[10px] h-[16px] ml-[4px] mmd:ml-[8px]" color="#fff"/>
                </div>
            )
        },
    ];

    return (
        <div className="w-full mx-auto max-w-[800px] min-w-[343px] rounded-[32px] bg-backgroundGray backdrop-blur-[16px] font-montserrat font-[700]
             p-[20px] mmd:p-[32px]
             text-[16px] text-textSecondary
        ">
            <div className="flex justify-between items-center mb-[32px] font-[700]
                text-[20px] leading-[18px] text-textPrimary
            ">
                <div className="flex items-center h-auto leading-auto mmd:h-[24px] mmd:leading-[24px]">
                    <div
                        className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.20)] flex justify-center items-center mr-[8px]">
                        <KeySvg/>
                    </div>
                    {/*<CopySvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>*/}
                    Vualt Rewards Winner
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
            <div className="hidden mmd:block">
                <div className="flex">
                    <div className="w-1/2">
                        <div className="flex items-center">Fair mint ends in
                            <Tooltip
                                content="TapTap fair mint starts with a timer that counts down from 72 hours. Each fair mint resets the timer. When the timer reaches zero, the fair mint ends."
                                position="bottom">
                                {/*w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]*/}
                                <QuestionSvg className="ml-[4px]"/>
                            </Tooltip>
                        </div>
                        <div className="text-textPrimary text-[48px]">
                            24 :59: 59
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            Active Pot
                        </div>
                        <div className="flex items-center text-success text-[48px]">
                            0.2322<EthLogoSvg className="ml-[12px] w-[32px] h-[32px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block mmd:hidden">
                <div className="mb-[32px]">
                    <div className="flex items-center text-[14px] mb-[8px]"
                    >Fair mint ends in
                        <Tooltip
                            content="TapTap fair mint starts with a timer that counts down from 72 hours. Each fair mint resets the timer. When the timer reaches zero, the fair mint ends."
                            position="bottom">
                            {/*w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]*/}
                            <QuestionSvg className="ml-[4px]"/>
                        </Tooltip>
                    </div>
                    <div className="text-[40px] text-textPrimary">
                        24 :59: 59
                    </div>
                </div>
                <>
                    <div className="mb-[8px]">Active Pot</div>
                    <div className="flex items-center text-success text-[40px]">0.2322
                        <EthLogoSvg className="ml-[12px] w-[32px] h-[32px]"/>
                    </div>
                </>

            </div>
            <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[32px] mb-[32px]"></div>
            <TapTable rows={rows}/>
            <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[32px] mb-[32px]"></div>
            <div className="hidden mmd:block font-[600]">
                <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                    <div>Your Rank / Global Rank</div>
                    <div className="text-[20px] text-textPrimary">323,23 / 315,739,255</div>
                </div>
                <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                    <div>Your Earnings</div>
                    <div className="text-[20px] text-textPrimary">0.00 ETH</div>
                </div>
            </div>
            <div className="block mmd:hidden text-[14px] font-[600]">
                <div className="mb-[32px]">
                    <div className="mb-[12px]">Your Rank / Global Rank</div>
                    <div className="text-[20px] text-textPrimary">323,23 / 315,739,255</div>
                </div>
                <div className="mb-[32px]">
                    <div className="mb-[12px]">Your Earnings</div>
                    <div className="text-[20px] text-textPrimary">0.00 ETH</div>
                </div>
            </div>
            <div className="text-[14px] font-[400] leading-[18px] mb-[32px]">
                When the Fair mint ends, rewards from the vault are distributed to the last ten participating players as
                follows: the last player receives 50% of the vault reward, while the remaining 50% is evenly split among
                the other nine players.
            </div>
            <div className="flex justify-center">
                <IconButton text="MINT"/>
            </div>
        </div>
    )
}
export default Jackpot
