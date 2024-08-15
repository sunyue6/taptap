import { FC } from 'react';
import ShareSvg from '@/components/Svg/ShareSvg';
import AddSvg from '@/components/Svg/AddSvg';
import { montserrat } from '@/utils/fonts';

interface DropdownMenuProps {
  onClose: () => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ onClose }) => {
  return (
    <div
      className={`absolute right-0 rounded-[12px] p-[12px] bg-backgroundSecondary text-textPrimary text-[16px] font-medium ${montserrat.className}  animate-fade-left`}
    >
      <button
        className="flex items-center w-full text-left p-[16px] rounded-[12px] hover:bg-backgroundGray whitespace-nowrap"
        onClick={onClose}
      >
        <ShareSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]" />
        Share on Twitter
      </button>
      <button
        className="flex items-center w-full text-left p-[16px] rounded-[12px] hover:bg-backgroundGray whitespace-nowrap"
        onClick={onClose}
      >
        <AddSvg className="mr-[8px] w-[16px] h-[16px] mmd:w-[24px] mmd:h-[24px]" />
        Add Token to Wallet
      </button>
    </div>
  );
};

export default DropdownMenu;
