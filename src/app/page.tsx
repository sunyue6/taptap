"use client"
import { useState, useEffect } from "react";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [titleValue]);
    const renderContent = () => {
        switch (titleValue) {
            case 'DASHBOARD':
                return <Dashboard/>;
            case 'MINT':
                return  <Mint/>;
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
      <div className="min-h-screen flex flex-col bg-backgroundSecondary relative overflow-hidden">
          <img src="/bg_img.png" alt="" className="w-full h-auto absolute left-0 top-0"/>
          <div className="absolute left-0 top-0 w-full h-full"
               style={{
                   background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)'
               }}>
          </div>
          <div className="pointer-events-none">
              <OverlayBackground/>
          </div>
          <div>
              <Navbar onItemClick={handleItemClick}/>
          </div>
          <div
              className="z-10 container max-w-[1232px] min-w-[375px] mx-auto flex-grow px-[16px] mt-[76px]  mmd:mt-[90px]">
              <TitlePage value={titleValue}/>
              {renderContent()}
              {/*TODO 展示 NoData组件逻辑*/}
              {/*<NoData/>*/}
          </div>
          <div className="h-auto mmd:h-[108px] mt-0 mmd:mt-[120px]"></div>
          <PositionIcon/>
          <Footer/>
      </div>
  );
}
