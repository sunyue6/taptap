import TelegramSelectedSvg from "@/components/Svg/TelegramSelectedSvg";
import TelegramSvg from "@/components/Svg/TelegramSvg";
import CloseSvg from "@/components/Svg/CloseSvg";
import CloseSelectedSvg from "@/components/Svg/CloseSelectedSvg";
const PositionIcon = () => {
    return (
       <div className="z-50 w-full static h-[268px]      pt-[36px]
                                   mmd:fixed top-[358px] mmd:pt-0">
           <div className="mx-auto max-w-[1200px] flex justify-center
                                                       mmd:justify-end">
               <div className="flex flex-row mmd:flex-col">
                   <div className="group relative mr-[20px]
                                               mmd:mr-0 mmd:mb-[20px]">
                       <CloseSvg className="block"/>
                       <CloseSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                   </div>
                   <div className="group relative">
                       <TelegramSvg className="block"/>
                       <TelegramSelectedSvg className="hidden group-hover:block absolute inset-0"/>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default PositionIcon;
