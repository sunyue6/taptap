import { FC } from "react";
import ShareSvg from "@/components/Svg/ShareSvg";
import AddSvg from "@/components/Svg/AddSvg";

interface DropdownMenuProps {
    onClose: () => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ onClose }) => {
    return (
        <div className="z-60 absolute right-0 rounded-[12px] p-[12px] bg-backgroundSecondary text-textPrimary text-[16px] font-medium font-montserrat">
            <button
                className="flex items-center w-full text-left p-[16px] rounded-[12px] hover:bg-backgroundGray whitespace-nowrap"
                onClick={onClose}
            >
                <ShareSvg className="mr-[8px]" />
                Share on Twitter
            </button>
            <button
                className="flex items-center w-full text-left p-[16px] rounded-[12px] hover:bg-backgroundGray whitespace-nowrap"
                onClick={onClose}
            >
                <AddSvg className="mr-[8px]" />
                Add Token to Wallet
            </button>
        </div>
    );
};

export default DropdownMenu;
