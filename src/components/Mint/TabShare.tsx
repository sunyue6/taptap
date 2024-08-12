import TextButton from "@/components/Common/Button/TextButton";

const TabShare = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between">
                <input
                    className="flex-grow mb-[16px] md:mb-0 md:mr-[32px] border border-textSecondary rounded-[8px] px-[12px] py-[12px] bg-transparent outline-none placeholder:text-textSecondary"
                    placeholder="Address"
                />
                <div className="relative w-full  mmd:w-[148px]">
                    <input
                        defaultValue="50"
                        min="1"
                        max="100"
                        className="border border-textSecondary rounded-[8px] p-[12px] bg-transparent w-full outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-textSecondary">%</span>
                </div>
            </div>
            <div className="flex justify-center mt-[32px]">
                <TextButton text="CLAIM IN 519 DAY" />
            </div>
        </div>
    )
}

export default TabShare;
