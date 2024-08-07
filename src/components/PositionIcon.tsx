import TelegramSelectedSvg from "@/components/Svg/TelegramSelectedSvg";
import TelegramSvg from "@/components/Svg/TelegramSvg";
import CloseSvg from "@/components/Svg/CloseSvg";
import CloseSelectedSvg from "@/components/Svg/CloseSelectedSvg";
const PositionIcon = () => {
    return (
        <div className="z-50 max-w-[1200px] mx-auto mt-[358px] w-full relative">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 absolute left-1/2 top-0 transform -translate-x-1/2 md:left-auto md:right-0 md:top-auto md:translate-x-0">
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
