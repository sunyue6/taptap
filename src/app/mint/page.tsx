"use client"
import TitlePage from "@/components/TitlePage";
import MintDetail from "@/components/Mint/MintDetail";
import FairMintTapTap from "@/components/Mint/FairMintTapTap";
import NoData from "@/components/NoData";
const Mint = () => {
    return (
        <div>
            <TitlePage value={'MINT'}/>
            <div className="mb-[12px]">
                <MintDetail/>
            </div>
            <div className="mb-[12px]">
                <FairMintTapTap/>
            </div>
            <NoData/>
        </div>
    )
}
export default Mint;
