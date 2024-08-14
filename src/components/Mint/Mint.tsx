import FairMintTapTap from "@/components/Mint/FairMintTapTap";
import MintDetail from "@/components/Mint/MintDetail";
import NoData from "@/components/NoData";
const Mint = () => {
    return (
        <div>
            {/*TODO  MintDetail 与 FairMintTapTap展示逻辑*/}
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
export default Mint
