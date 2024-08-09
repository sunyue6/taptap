import SwapChat from "@/components/SWAP/SwapChat";
import SwapInfo from "@/components/SWAP/SwapInfo";

const Swap = () => {
    return (
        <div className="flex flex-col mmd:flex-row w-full  max-w-[1000px] min-w-[343px] mx-auto">
            <div className="mb-[12px] mmd:mb-0">
                <SwapChat/>
            </div>
            <SwapInfo/>
        </div>
    )
}
export default Swap
