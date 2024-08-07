import TelegramSelectedSvg from "@/components/Svg/TelegramSelectedSvg";
import TelegramSvg from "@/components/Svg/TelegramSvg";
import CloseSvg from "@/components/Svg/CloseSvg";
import CloseSelectedSvg from "@/components/Svg/CloseSelectedSvg";

const PositionIcon = () => {
    return (
        <div className="z-50 max-w-[1200px] mx-auto mt-[358px] relative w-full">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 absolute right-0 top-0 md:static md:justify-center">
                <div className="group relative">
                    <TelegramSvg className="block"/>
                    <TelegramSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                </div>
                <div className="group relative">
                    <CloseSvg className="block"/>
                    <CloseSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                </div>
            </div>
        </div>
    )
}

export default PositionIcon;
