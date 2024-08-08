import GlobalRankSvg from "@/components/Svg/GlobalRankSvg";
import QuestionSvg from "@/components/Svg/QuestionSvg";
import Tooltip from "@/components/Common/Tooltip";
const CardOne =()=> {
    return (
        <div className="mx-auto font-montserrat max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] p-[32px] text-[16px] leading-[18px] font-[600] text-textSecondary">
            <div  className="flex justify-between items-center text-[20px] font-[700] mb-[32px] text-textPrimary">
                <div className="flex justify-between items-center">
                    <div className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.20)] flex justify-center items-center mr-[8px]">
                        <GlobalRankSvg/>
                    </div>
                    Global Rank
                    <Tooltip content="Global Rank is a counter which is increased by 1 whenever new account registers to use TAPTAP and a Crypto Rank (cRank) claim is made. It is part of TAPTAP Mint Reward calculation, which is dependent on Log2 function of current Global Rank minus cRank claimed by a user" position="bottom">
                        <QuestionSvg className="ml-[4px]"/>
                    </Tooltip>
                </div>
                <div>11111</div>
            </div>
            <div className="flex justify-between items-center pt-[32px] pb-[16px]">
                <div>Active Minters</div>
                <div>11111</div>
            </div>
            <div  className="flex justify-between items-center">
                <div>Time Since Genesis</div>
                <div>11111</div>
            </div>
        </div>
    )
}
export default CardOne;