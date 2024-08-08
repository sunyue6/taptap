import TelegramSelectedSvg from "@/components/Svg/TelegramSelectedSvg";
import TelegramSvg from "@/components/Svg/TelegramSvg";
import CloseSvg from "@/components/Svg/CloseSvg";
import CloseSelectedSvg from "@/components/Svg/CloseSelectedSvg";
const PositionIcon = () => {
    return (
        <div className="max-w-[1200px] min-w-[343px] w-full mx-auto relative py-[24px]     mt-[24px] mb-[60px]
                                                                             mmd:py-[60px] mmd:my-0">
            <div className="flex justify-center flex-row
                                                mmd:flex-col mmd:absolute bottom-[420px] right-[16px]">
                <div className="group relative mr-[20px]
                                               mmd:mr-0 mmd:mb-[20px]">
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
