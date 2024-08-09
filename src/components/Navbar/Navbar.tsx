"use client"
import Image from 'next/image';
import MenuSvg from "@/components/Svg/MenuSvg";
import MenuCloseSvg from "@/components/Svg/MenuCloseSvg";
import ChevronRightSvg from "@/components/Svg/ChevronRightSvg";
import BaseButton from "@/components/Common/Button/BaseButton";
import WalletAd from "@/components/Navbar/WalletAd";
import React, { useState } from 'react';
interface NavbarProps {
    onItemClick: (item: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({ onItemClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string>('DASHBOARD');

    const handleToggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };
    const handleNavigation = (url: string) => {
        window.location.href = url;
    };

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        onItemClick(item);
    };

    const navItems = [
        { label: 'DASHBOARD', value: 'DASHBOARD' },
        { label: 'MINT', value: 'MINT' },
        { label: 'WORKER', value: 'WORKER' },
        { label: 'SWAP', value: 'SWAP' },
        { label: 'JACKPOT', value: 'JACKPOT' }
    ];


    return (
        <nav className="z-50 fixed top-[16px] left-0 w-full text-textPrimary font-hanalei px-[16px]">
            <div
                className={`max-w-[1200px] min-w-[343px] bg-backgroundPrimary backdrop-blur-[32px]  shadow-lg ${menuOpen ? 'rounded-[30px]' : 'rounded-[60px]' }  min-h-[74px] mx-auto px-[16px] mmd:px-[24px]`}>
                <div className="flex items-center justify-between w-full h-[74px]">
                    <div className="flex items-center cursor-pointer">
                        <Image src="/logo_img.png" alt="Logo" width={44} height={37.29} className="mr-[12px]"/>
                        <div className="text-textPrimary hidden mmd:block text-[30px]">TAPTAP</div>
                    </div>
                    <div className="flex">
                        <ul className="hidden mmd:flex space-x-4 mmd:mr-[80px]">
                            {navItems.map(item => (
                                <li
                                    key={item.value}
                                    onClick={() => handleItemClick(item.value)}
                                    className={`cursor-pointer ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover py-[6px] px-[12px] text-[20px]`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                        <div>
                            {/* TODO 连接钱包地址 逻辑 */}
                            {/*<BaseButton text="WALLET CONNECT"/>*/}
                            <WalletAd/>
                        </div>
                        <div className="mmd:hidden flex items-center ml-[12px] mmd:ml-0">
                            {menuOpen ? (
                                <div onClick={handleToggleMenu}>
                                    <MenuCloseSvg/>
                                </div>
                            ) : (
                                <div onClick={handleToggleMenu}>
                                    <MenuSvg/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={`w-full mmd:hidden font-hanalei  ${menuOpen ? 'block' : 'hidden'} text-textPrimary mt-[32px] pb-[48px]`}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li
                                key={item.value}
                                onClick={() => handleItemClick(item.value)}
                                className={`flex items-center justify-between cursor-pointer py-1.5 px-5 ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover ${index === navItems.length - 1 ? 'mb-[48px]' : 'mb-[20px]'}`}>
                                <div
                                    className="text-[24px]"
                                >{item.label}</div>
                                <ChevronRightSvg className={`text-current`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
