import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="z-50 w-full rounded-t-[40px] flex flex-col md:flex-row items-center justify-center absolute bottom-0 bg-backgroundSecondary py-6 fixed bottom-0">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src="/images/logo_img.png" alt="Logo" width={44} height={37.29}
                           className="mr-0 md:mr-[12px] md:w-[44px] md:h-[37.29px] w-[28px] h-[28px]"/>
                    <div className="text-textPrimary font-hanalei ml-2 md:ml-4 text-sm md:text-[30px]">
                        TAPTAP
                    </div>
                </div>
                <div className="text-textPrimary text-[14px]">
                    © 2024 TAPTAP.meme
                </div>
            </div>
        </footer>
    );
};

export default Footer;
