import React from 'react';
import ChevronRightSvg from '@/components/Svg/ChevronRightSvg';
import { hanalei } from '@/utils/fonts';

interface IconButtonProps {
  text?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  text = 'IconButton',
  onClick
}) => {
  return (
    <button
      className={`${hanalei.className}  flex items-center bg-primary hover:bg-primaryHover text-textPrimary rounded-[40px]  whitespace-nowrap
                px-[42px] mmd:px-[52px] h-[46px] mmd:h-[60px] text-[20px] mmd:text-[24px]
            `}
      onClick={onClick}
    >
      {text}{' '}
      <ChevronRightSvg className="ml-[4px] mmd:ml-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]" />
    </button>
  );
};

export default IconButton;
