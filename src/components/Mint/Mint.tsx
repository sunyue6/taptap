import FairMintTapTap from "@/components/Mint/FairMintTapTap";
import MintDetail from "@/components/Mint/MintDetail";
const Mint = () => {
    return (
        <div>
            {/*TODO  MintDetail 与 FairMintTapTap展示逻辑*/}
            <div className="mb-[12px]">
                <MintDetail/>
            </div>
            <FairMintTapTap/>
        </div>
    )
}
export default Mint
