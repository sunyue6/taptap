import Image from "next/image";
import React, { useState } from 'react';
import CopyTwoSvg from "@/components/Svg/CopyTwoSvg";
import KLineChart from "@/components/SWAP/KLineChart";
import GlobalRankSvg from "@/components/Svg/GlobalRankSvg";
import DownSvg from "@/components/Svg/DownSvg";
import UpSvg from "@/components/Svg/UpSvg";
import CheckMarkSvg from "@/components/Svg/CheckMarkSvg";
import UpArrowSvg from "@/components/Svg/UpArrowSvg";




const SwapChat = () => {
    const textToCopy = "0xbea...b8a3";
    const [copied, setCopied] = useState(true);

    const [isDown, setIsDown] = useState(true);

    const handleToggle = () => {
        setIsDown(!isDown);
    };

    const handleCopy = () => {
        setCopied(!copied);
    };

    const data = {
        dates: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
        values: [
            [2320.26, 2320.26, 2287.3, 2362.94],
            [2300, 2291.3, 2288.26, 2308.38],
            [2295.35, 2346.5, 2295.35, 2346.92],
            [2347.22, 2358.98, 2337.35, 2363.8],
            [2360.75, 2382.48, 2347.89, 2383.76],
        ],
    };

    return (
        <div className=" mx-auto font-montserrat w-full min-w-[343px] mmd:min-w-[556px]  rounded-[32px] bg-backgroundSecondary backdrop-blur-[16px] p-[16px] mmd:p-[32px] text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div className="flex justify-between mb-[15px]">
                <div className="flex items-center text-[24px]">
                    <Image src="/logo_circle.png" alt="Logo" width={35} height={35} className="mr-[8px] w-[35px] h-[35px]" />
                    <span className="text-textPrimary">TAP</span> / ETH
                </div>
                <div className="flex items-center">
                    <span className="mr-[4px]">{textToCopy}</span>
                    {copied ? (
                        <div onClick={handleCopy}>
                            <CopyTwoSvg className="w-[16px] h-[16px] ml-[4px]"/>
                        </div>
                    ) : (
                        <div onClick={handleCopy}>
                            <CheckMarkSvg className="w-[16px] h-[16px] ml-[4px]"/>
                        </div>
                    )}

                </div>
            </div>
            <div className="flex items-center text-textPrimary text-[32px] mb-[4px] h-[39px] leading-[39px]">
                <span className="mr-[4px]">$0.0001647</span>
                <UpArrowSvg/>
                <span className="text-[16px] text-success">3.18%</span>
            </div>
            <div className="flex justify-between text-backgroundThird font-[400] mb-[16px]">
            <div>
                   0.00000006312 ETH
               </div>
                <div className="block mmd:hidden">
                    <div className="flex">
                        <GlobalRankSvg/>
                        {isDown ? (
                            <div onClick={handleToggle}>
                                <DownSvg className="w-[16px] h-[16px] cursor-pointer"  />
                            </div>
                        ) : (
                            <div onClick={handleToggle}>
                                <UpSvg className="w-[16px] h-[16px] cursor-pointer" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {
                isDown && (<div className="h-[255px]">
                    {/*<KLineChart data={data}/>*/}
                    <iframe height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed"
                            src="https://www.geckoterminal.com/taiko/pools/0x29263dcedbc27644ccfc51819c6c4bed127859c9?embed=1&info=0&swaps=0"
                            frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
                </div>)
            }
        </div>
    );
};

export default SwapChat;
