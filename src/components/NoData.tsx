import Image from 'next/image';
const NoData = () => {
    return (
        <div className=" mx-auto font-montserrat w-full">
            <div
                className="max-w-[800px] min-w-[343px] w-full rounded-[32px] bg-backgroundGray backdrop-blur-[16px] mx-auto py-[40px]">
                <div className="flex justify-center mb-[20px]">
                    <Image src="/no_data.gif" alt="GIF" width={114} height={160}/>
                </div>
                <div className="text-[rgba(255,255,255,0.7)] text-center text-[24px] font-montserrat">No data</div>
            </div>
        </div>
    )
}
export default NoData
