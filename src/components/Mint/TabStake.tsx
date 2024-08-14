import TextButton from "@/components/Common/Button/TextButton";

const TabStake = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col mmd:flex-row mmd:justify-between">
                <div className="relative flex-grow flex items-center mb-[16px] mmd:mb-0 mmd:mr-[32px]">
                    <input
                        className="focus:border-success flex-grow border border-textSecondary rounded-[8px] px-[12px] py-[12px] bg-transparent outline-none placeholder:text-textSecondary"
                        placeholder="Address"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-textSecondary">%</span>
                </div>
                <div className="relative w-full  mmd:w-[148px] text-[16px] font-[600]">
                    <input
                        defaultValue="50"
                        min="1"
                        max="100"
                        className="border border-textSecondary rounded-[8px] pl-[12px] pr-[24px] py-[12px] bg-transparent w-full outline-none focus:border-success"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-textSecondary">Term,days</span>
                </div>
            </div>
            <div className="flex justify-center mt-[32px]">
                <TextButton text="CLAIM ON"/>
            </div>
        </div>
    )
}

export default TabStake
