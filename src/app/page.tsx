"use client"
import {useState} from "react";
import Navbar from "@/components/Navbar";
import TitlePage from "@/components/TitlePage";
import OverlayBackground from "@/components/OverlayBackground";
import PositionIcon from "@/components/PositionIcon";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard/Dashboard";
import Jackpot from "@/components/Jackpot/Jackpot";
import MintDetail from "@/components/Mint/MintDetail";
import Worker from "@/components/Worker/Worker";
import NoData from "@/components/NoData";
import FairMintTapTap from "@/components/Mint/FairMintTapTap";
export default function Home() {
  const [titleValue, setTitleValue] = useState('DASHBOARD');

  const handleItemClick = (value: string) => {
    setTitleValue(value);
  };
    const renderContent = () => {
        switch (titleValue) {
            case 'DASHBOARD':
                return <Dashboard />;
            case 'JACKPOT':
                return <Jackpot />;
            case 'MINT':
                return <MintDetail />;
                // return <FairMintTapTap/>
            case 'WORKER':
                return <Worker />;
            default:
                return <Dashboard />;
        }
    };
  return (
      <div className="relative min-h-screen overflow-hidden bg-cover bg-center flex flex-col"
           style={{
             background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('/images/bg_img.png')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
      >
        <Navbar onItemClick={handleItemClick}/>
        <TitlePage value={titleValue}/>
          {renderContent()}
          {/*TODO 展示 NoData组件逻辑*/}
          {/*<NoData/>*/}
        <OverlayBackground/>
        {/*  TODO ICON消失*/}
        <PositionIcon/>
        <Footer/>
      </div>
  );
}
