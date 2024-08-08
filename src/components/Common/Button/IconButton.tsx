import React from 'react';
import ChevronRightSvg from "@/components/Svg/ChevronRightSvg";

interface IconButtonProps {
    text?: string;
    onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ text = "IconButton", onClick}) => {
    return (
        // common rounded-[40px]
        // PC  px-[52px] h-[60px] text-[24px]  icon-[24px] icon-ml-[8px]
        // mo  px-[42px] h-[46px] text-[20px]  icon-[16px] icon-ml-[4px]
        <button
            className="flex items-center font-hanalei bg-primary hover:bg-primaryHover text-textPrimary rounded-[40px]  whitespace-nowrap
                px-[42px] mmd:px-[52px] h-[46px] mmd:h-[60px] text-[20px] mmd:text-[24px]
            "
            onClick={onClick}
        >
            {text} <ChevronRightSvg className="ml-[4px] mmd:ml-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]" />
        </button>
    );
}

export default IconButton;
