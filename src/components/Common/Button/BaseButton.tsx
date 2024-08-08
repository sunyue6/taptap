import React from 'react';

interface BaseButtonProps {
    text?: string;
    onClick?: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({ text = "BaseButton", onClick }) => {
    return (
        // 移动
        <button
            className="bg-primary text-textPrimary px-4 py-2 rounded-[40px] hover:bg-primaryHover lg:ml-20 md:mr-0 mr-[12px] whitespace-nowrap text-[16px]"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default BaseButton;
