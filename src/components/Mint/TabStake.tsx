const TabStake = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="relative flex-grow flex items-center mb-[16px] md:mb-0 md:mr-[32px]">
                    <input
                        className="flex-grow border border-textSecondary rounded-[8px] px-[12px] py-[12px] bg-transparent outline-none placeholder:text-textSecondary"
                        placeholder="Address"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-textSecondary">%</span>
                </div>
                <div className="relative w-full md:w-[148px]">
                    <input
                        defaultValue="50"
                        min="1"
                        max="100"
                        className="border border-textSecondary rounded-[8px] pl-[12px] pr-[24px] py-[12px] bg-transparent w-full outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-[12px] text-textSecondary">Term, days</span>
                </div>
            </div>
            <div className="flex justify-center mt-[32px]">
                <button
                    className="flex items-center font-hanalei text-textPrimary border border-textSecondary rounded-[40px] whitespace-nowrap text-[20px] md:text-[24px] px-[52px] h-[60px]"
                >
                    CLAIM ON
                </button>
            </div>
        </div>
    )
}

export default TabStake
