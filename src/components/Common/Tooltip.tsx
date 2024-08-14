// components/Tooltip.tsx
import React, { ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
    leftClass?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'bottom', leftClass = 'left-[-145px]'}) => {
    return (
        <div className="relative group inline-block font-[400]">
            <div className="absolute hidden group-hover:block group-focus:block z-[9]">
                <div
                    className={`absolute bg-[#0C101B] text-[#FFF] text-xs rounded-[12px] text-[12px] leading-[18px] w-[311px] py-[12px] px-[12px] whitespace-normal ${getTooltipPositionClasses(position, leftClass)} flex items-center justify-center`}
                >
                    {content}
                </div>
            </div>
            {children}
        </div>
    );
};

const getTooltipPositionClasses = (position: 'top' | 'right' | 'bottom' | 'left', leftClass: string ) => {
    switch (position) {
        case 'top':
            return 'top-[-40px] left-1/2 transform -translate-x-1/2';
        case 'right':
            return 'top-1/2 left-full transform -translate-y-1/2';
        case 'bottom':
            return `${leftClass} top-[18px] mmd:left-[4px] mmd:top-[18px] animate-fade-right`
        case 'left':
            return 'top-1/2 left-[-100%] transform -translate-y-1/2';
        default:
            return '';
    }
};

export default Tooltip;
