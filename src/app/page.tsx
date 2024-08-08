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
      // 屏幕的宽度，布局，
      <div className="min-h-screen flex flex-col relative"
           style={{
             background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('/bg_img.png')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
      >
          <OverlayBackground/>
          <div>
              <Navbar onItemClick={handleItemClick}/>
          </div>
          <div className="z-50 container max-w-[1232px] min-w-[375px] mx-auto flex-grow px-[16px] mt-[90px]">
              <TitlePage value={titleValue}/>
              {renderContent()}
              {/*TODO 展示 NoData组件逻辑*/}
              {/*<NoData/>*/}
          </div>
          <PositionIcon/>
          <Footer/>
      </div>
  );
}
