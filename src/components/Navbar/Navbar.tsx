"use client"
import Image from 'next/image';
import Link from 'next/link';
import MenuSvg from "@/components/Svg/MenuSvg";
import MenuCloseSvg from "@/components/Svg/MenuCloseSvg";
import ChevronRightSvg from "@/components/Svg/ChevronRightSvg";
import BaseButton from "@/components/Common/Button/BaseButton";
import WalletAd from "@/components/Navbar/WalletAd";
import React, { useState, useEffect } from 'react';
import CloseSvg from "@/components/Svg/CloseSvg";
import CloseSelectedSvg from "@/components/Svg/CloseSelectedSvg";
import TelegramSvg from "@/components/Svg/TelegramSvg";
import TelegramSelectedSvg from "@/components/Svg/TelegramSelectedSvg";
import { usePathname, useRouter } from 'next/navigation';


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string>('');
    const [isWalletConnected, setIsWalletConnected] = useState(false); // 新状态
    const router = useRouter();
    const pathname = usePathname(); // 使用 usePathname 钩子

    const handleToggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        // 设置 activeItem 为当前路径
        if (pathname === '/') {
            setActiveItem(pathname);
        } else {
            setActiveItem(pathname.split('/')[1]);
        }
    }, [pathname]); // 监听 pathname 的变化
    const handleItemClick = (item: string) => {
        setActiveItem(item);
        setMenuOpen(false);
    };

    const handleWalletConnectClick = () => {
        setIsWalletConnected(prevState => !prevState); // 切换状态
    };

    const navItems = [
        { label: 'DASHBOARD', value: '/' },
        { label: 'MINT', value: 'mint' },
        { label: 'WORKER', value: 'worker' },
        { label: 'SWAP', value: 'swap' },
        { label: 'JACKPOT', value: 'jackpot' }
    ];


    return (
        <nav className="z-50 fixed top-[16px] left-0 w-full text-textPrimary font-hanalei px-[16px]">
            <div
                className={`max-w-[1200px] min-w-[343px] bg-backgroundPrimary backdrop-blur-[32px]  shadow-lg ${menuOpen ? 'rounded-[30px]' : 'rounded-[60px]' }   mx-auto px-[16px] mmd:px-[24px] relative`}>
                <div className="flex items-center justify-between w-full h-[60px] mmd:h-[74px]">
                    <div className="flex items-center cursor-pointer">
                        <Image src="/logo_img.png" alt="Logo" width={44} height={37.29} className="mr-[12px] mt-[15px]"/>
                        <div className="text-textPrimary hidden mmd:block text-[30px]">TAPTAP</div>
                    </div>
                    <div className="flex">
                        <div className="hidden mmd:flex space-x-4 mmd:mr-[80px]">
                            {navItems.map(item => (
                                <Link
                                    key={item.value}
                                    onClick={() => handleItemClick(item.value)}
                                    href={item.value}
                                    className={`cursor-pointer ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover py-[6px] px-[12px] text-[20px]`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div>
                            {isWalletConnected ? (
                                <WalletAd/> // 当连接时显示 WalletAd
                            ) : (
                                <BaseButton text="WALLET CONNECT" onClick={handleWalletConnectClick}/>
                            )}
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
                    <div>
                        {navItems.map((item, index) => (
                            <Link
                                key={item.value}
                                onClick={() => handleItemClick(item.value)}
                                href={item.value}
                                className={`flex items-center justify-between cursor-pointer py-1.5 px-5 ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover ${index === navItems.length - 1 ? 'mb-0' : 'mb-[20px]'}`}>
                                <div
                                    className="text-[24px]"
                                >{item.label}</div>
                                <ChevronRightSvg className={`text-current`}/>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="absolute top-[341px] right-0 hidden mmd:block">
                    <div className="flex flex-col">
                        <div className="group relative mr-0 mb-[20px]">
                            <CloseSvg className="block"/>
                            <CloseSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                        </div>
                        <div className="group relative">
                            <TelegramSvg className="block"/>
                            <TelegramSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
