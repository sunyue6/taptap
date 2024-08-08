import React from 'react';

interface TextButtonProps {
    text: string;
    onClick?: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="flex items-center font-hanalei text-textPrimary border border-textSecondary rounded-[40px] whitespace-nowrap text-[20px] md:text-[24px] px-[52px] h-[60px]"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default TextButton;
