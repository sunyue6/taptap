import Image from 'next/image';
const NoData = () => {
    return (
        <div className="z-50 max-w-[800px] min-w-[343px] w-full rounded-[32px] bg-[rgba(240,255,230,0.1)] backdrop-blur-[16px] mx-auto py-[40px]">
            <div className="flex justify-center mb-[20px]">
                <Image src="/images/no_data.gif" alt="GIF" width={114} height={160}/>
            </div>
            <div className="text-[rgba(255,255,255,0.7)] text-center text-[24px] font-montserrat">No data</div>
        </div>
    )
}
export default NoData
