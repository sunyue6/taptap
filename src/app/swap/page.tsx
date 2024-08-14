"use client"
import TitlePage from "@/components/TitlePage";
import SwapChat from "@/components/SWAP/SwapChat";
import SwapInfo from "@/components/SWAP/SwapInfo";

const Swap = () => {
    return (
        <div>
            <TitlePage value={'SWAP'}/>
            <div
                className="flex flex-col mmd:flex-row mmd:justify-between w-full mmd:max-w-[1000px] min-w-[343px] mx-auto">
                <div className="mr-0 mmd:mr-[40px] mb-[12px] mmd:mb-0">
                    <SwapChat/>
                </div>
                <SwapInfo/>
            </div>
        </div>
    )
}
export default Swap;
