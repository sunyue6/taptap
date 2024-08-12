// components/Tooltip.tsx
import React, { ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'bottom' }) => {
    return (
        <div className="relative group inline-block font-[400]">
            <div className="absolute hidden group-hover:block group-focus:block  z-10">
                <div
                    className={`absolute bg-[#0C101B] text-[#FFF] text-xs rounded-[12px] py-[12px] px-[12px] whitespace-normal ${getTooltipPositionClasses(position)} flex items-center justify-center`}
                    style={{ width: '311px', lineHeight: '18px', fontSize: '12px' }}
                >
                    {content}
                </div>
            </div>
            {children}
        </div>
    );
};

const getTooltipPositionClasses = (position: 'top' | 'right' | 'bottom' | 'left') => {
    switch (position) {
        case 'top':
            return 'top-[-40px] left-1/2 transform -translate-x-1/2';
        case 'right':
            return 'top-1/2 left-full transform -translate-y-1/2';
        case 'bottom':
            return 'bottom-0';
            // return 'top-full left-[15px] -[15px]';
        case 'left':
            return 'top-1/2 left-[-100%] transform -translate-y-1/2';
        default:
            return '';
    }
};

export default Tooltip;
