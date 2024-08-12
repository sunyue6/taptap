import QuestionSvg from "@/components/Svg/QuestionSvg";
import Tooltip from "@/components/Common/Tooltip";
const CardThree =()=> {
    return (
        <div className="z-10 max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-5 text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div className="flex justify-between  items-center">
                <div>Max Term,days</div>
                <div className="text-textPrimary">11111</div>
            </div>
            <div  className="flex justify-between items-center py-[16px]">
                <div  className="flex items-center">AMP
                    <Tooltip content="Reward Amplifier (AMP) is a time-dependent part of TAPTAP Mint Reward calculation. It starts at 3,000 at Genesis and decreases by 1 every day until it reaches 1"  position="bottom" leftClass="left-[-60px]">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div className="text-textPrimary">11111</div>
            </div>
            <div  className="flex justify-between  items-center">
                <div  className="flex items-center">EAA
                    <Tooltip content="Early Adopter Amplifier (EAA) is a part of TAPTAP Mint Reward calculation which depends on current Global Rank. EAA starts from 10% and decreases in a linear fashion by 0.1% per each 100,000 increase in Global Rank." position="bottom" leftClass="left-[-55px]">
                        <QuestionSvg className="ml-[4px]" />
                    </Tooltip>

                </div>
                <div className="text-textPrimary">11111</div>
            </div>
        </div>
    )
}
export default CardThree;
