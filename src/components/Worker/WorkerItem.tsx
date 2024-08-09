import React, { useState } from 'react';
import DownSvg from "@/components/Svg/DownSvg";
import WorkerSvg from "@/components/Svg/WorkerSvg";
import UpSvg from "@/components/Svg/UpSvg";
import TapTable from "@/components/Common/TapTable/TapTable";
import Image from "next/image";
import ProgressBar from "@/components/Common/ProgressBar";
import IconButton from "@/components/Common/Button/IconButton";
import TextButton from "@/components/Common/Button/TextButton";
const WorkerItem = () => {
    const [isUpSvg, setIsUpSvg] = useState(true);

    // Toggle between UpSvg and CopySvg
    const handleToggle = () => {
        setIsUpSvg(prevState => !prevState);
    };
    const headers = ['Worker', 'cRank', 'Reward'];
    const rows = [
        { Worker: (<div
                className="w-[105px] flex items-center rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] font-[500]">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: '#315,739,255', Reward: '4,722 TAP'
        },
        {Worker: (<div
                className="w-[105px] flex items-center rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] font-[500]">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: '#315,739,255', Reward: '4,722 TAP'},
        {Worker: (<div
                className="w-[105px] flex items-center rounded-[100px] bg-backgroundPrimary py-[4px] px-[6px] text-[16px] font-[500]">
                <Image src="/worker_img.png" alt="Logo" width={20} height={20} className="mr-[8px]"/>
                #00004
            </div>), cRank: '#315,739,255', Reward: '4,722 TAP'},
    ];
    const progress = 2; // Example progress value

    return (
        <div className="w-full mx-auto max-w-[800px] min-w-[343px] rounded-[32px] bg-backgroundGray backdrop-blur-[16px] font-montserrat font-[700]
             p-[20px] mmd:p-[32px]
             text-[16px] text-textSecondary
        ">
            <div className="flex justify-between items-center
                text-[20px] leading-[18px] text-textPrimary
            ">
                <div className="flex items-center h-auto leading-auto mmd:h-[24px] mmd:leading-[24px]">
                    <WorkerSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>Worker #0004
                </div>
                <div onClick={handleToggle} className="cursor-pointer">
                    {isUpSvg ? <UpSvg className="w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/> : <DownSvg className="w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]"/>}
                </div>
            </div>
            {
                isUpSvg && (
                    <div className="mt-[32px]">
                        <TapTable headers={headers} rows={rows}/>
                        <div className="h-[1px]  max-w-[736px] min-w-[303px] bg-backgroundThird mt-[32px] mb-[32px]"></div>
                        <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                            <div>
                                Number of workers
                            </div>
                            <div className="text-textPrimary">111</div>
                        </div>
                        <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                            <div>
                                Term, days
                            </div>
                            <div className="text-textPrimary">111</div>
                        </div>
                        <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                            <div>
                                Total Estimated TAPTAP
                            </div>
                            <div className="text-textPrimary">111</div>
                        </div>
                        <div className="flex justify-between items-center mb-[16px] mmd:mb-[20px]">
                            <div className="w-full mr-[80px]">
                                <ProgressBar progress={progress} height="10px" color="bg-primary"/>
                            </div>
                            <div className="text-textPrimary">111</div>
                        </div>
                        <div className="flex justify-center">
                            <IconButton text="CLAIM"/>
                            {/* TODO 展示逻辑 */}
                            {/*<TextButton text="CLAIM IN LESS THAN 1 DAY" />*/}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default WorkerItem
