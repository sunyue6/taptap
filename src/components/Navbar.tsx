"use client"
import Image from 'next/image';
import MenuSvg from "@/components/Svg/MenuSvg";
import MenuCloseSvg from "@/components/Svg/MenuCloseSvg";
import ChevronRightSvg from "@/components/Svg/ChevronRightSvg";
import { useState } from 'react';

const Navbar = ({ onItemClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string>('');

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
        { label: 'JACKPOT', value: 'JACKPOT' }
    ];

    return (
        <nav className="z-50 flex flex-col items-center rounded-[60px] bg-white/20  backdrop-blur-[32px] shadow-lg max-w-[1200px] min-h-[74px] p-[0px_24px] md:p-[0px_24px] sm:p-[0px_16px] bg-opacity-50 backdrop-filter fixed top-0 left-1/2 transform -translate-x-1/2 w-full mt-[16px]">
            <div className="flex items-center justify-between w-full h-[74px]">
                <div className="flex cursor-pointer">
                    <Image src="/images/logo_img.png" alt="Logo" width={44} height={37.29}  className="mr-[12px]"/>
                    <div className="text-textPrimary font-hanalei hidden md:block text-[30px]">TAPTAP</div>
                </div>
                <div className="flex font-hanalei">
                    <ul className="hidden md:flex space-x-4">
                        {navItems.map(item => (
                            <li
                                key={item.value}
                                onClick={() => handleItemClick(item.value)}
                                className={`cursor-pointer ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover py-1.5 px-3 text-[20px]`}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="bg-primary text-textPrimary px-4 py-2 rounded-[40px] hover:bg-primaryHover ml-20 md:mr-0 mr-[12px] whitespace-nowrap text-[16px]"
                    >
                        WALLET CONNECT
                    </button>
                    <div className="md:hidden flex items-center">
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
            <div className={`w-full md:hidden font-hanalei  ${menuOpen ? 'block' : 'hidden'} text-textPrimary mt-[32px]`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li
                            key={item.value}
                            onClick={() => handleItemClick(item.value)}
                            className={`flex items-center justify-between cursor-pointer py-1.5 px-5 ${activeItem === item.value ? 'text-primary' : 'text-white'} hover:text-primaryHover ${index === navItems.length - 1 ? 'mb-[48px]' : 'mb-[20px]'}`}>
                            <div
                                className="text-[24px]"
                            >{item.label}</div>
                            <ChevronRightSvg className={`text-current`} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
