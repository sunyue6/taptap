const CardTwo =()=> {
    return (
        <div className="z-10 max-w-[800px] min-w-[343px] w-full rounded-[16px] bg-backgroundGray backdrop-blur-[16px] p-5 text-[16px] leading-[18px] font-[600] text-textSecondary h-[96px]">
            <div className="flex justify-between  items-center pb-[16px]">
                <div>Total Supply</div>
                <div  className="text-textPrimary">134,580,552,934,330</div>
            </div>
            <div  className="z-10 flex justify-between  items-center">
                <div>Active Pot</div>
                <div className="text-textPrimary">114,580,552,934,330</div>
            </div>
        </div>
    )
}
export default CardTwo;
