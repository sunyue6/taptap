"use client"
import {useState} from "react";
import Navbar from "@/components/Navbar/Navbar";
import TitlePage from "@/components/TitlePage";
import OverlayBackground from "@/components/OverlayBackground";
import PositionIcon from "@/components/PositionIcon";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard/Dashboard";
import Jackpot from "@/components/Jackpot/Jackpot";
import NoData from "@/components/NoData";
import Mint from "@/components/Mint/Mint";
import Swap from "@/components/SWAP/Swap";
import Worker from "@/components/Worker/Worker";

export default function Home() {
    const [titleValue, setTitleValue] = useState('DASHBOARD');

    const handleItemClick = (value: string) => {
        setTitleValue(value);
    };

    const renderContent = () => {
        switch (titleValue) {
            case 'DASHBOARD':
                return <Dashboard/>;
            case 'MINT':
                // TODO  MintDetail 与 FairMintTapTap展示逻辑
                return  <Mint/>
            case 'WORKER':
                return <Worker/>;
            case 'SWAP':
                return <Swap/>;
            case 'JACKPOT':
                return <Jackpot />;
            default:
                return <NoData />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden"
             style={{
                 background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('/bg_img.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}
        >
            {/* 添加蒙层 */}
            <div className="absolute inset-0">
                <svg width="100%" height="100%">
                    <defs>
                        <clipPath id="sectorClipPath">
                            <path d="M50% 50%, 100% 0, 100% 100%"></path>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#sectorClipPath)">
                        <rect width="100%" height="100%" transform="rotate(25.666deg)" fill="rgba(233, 24, 152, 0.50)" style={{filter: 'blur(77px)'}} />
                        <rect width="100%" height="100%" transform="rotate(25.666deg)" fill="rgba(15, 0, 183, 0.50)" style={{filter: 'blur(77px)'}} />
                        <rect width="100%" height="100%" transform="rotate(28.158deg)" fill="rgba(233, 24, 152, 0.10)" style={{filter: 'blur(77px)'}} />
                        <rect width="100%" height="100%" transform="rotate(15deg)" fill="url(#gradient)" style={{filter: 'blur(47px)'}} />
                    </g>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="4.85%" style={{stopColor: "rgba(255, 122, 0, 0.50)"}} />
                            <stop offset="61.26%" style={{stopColor: "rgba(255, 194, 54, 0.50)"}} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 导航栏 */}
            <div>
                <Navbar onItemClick={handleItemClick}/>
            </div>
            <div className="container max-w-[1232px] min-w-[375px] mx-auto flex-grow px-[16px] mt-[90px]">
                <TitlePage value={titleValue}/>
                {renderContent()}
            </div>
            <PositionIcon/>
            <Footer/>
        </div>
    );
}
