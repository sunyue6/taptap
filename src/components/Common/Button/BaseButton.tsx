import React from 'react';

interface BaseButtonProps {
    text?: string;
    onClick?: () => void;
    width?: string;
    height?: string;
    fontSize?: string;
}
const BaseButton: React.FC<BaseButtonProps> = ({ text = "BaseButton", onClick,width, height, fontSize }) => {
    return (
        <button
            className="bg-primary text-textPrimary px-4 py-2 rounded-[40px] hover:bg-primaryHover whitespace-nowrap font-hanalei"
            style={{ width: width || 'auto', height: height || 'auto', fontSize: fontSize || '16px' }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default BaseButton;
