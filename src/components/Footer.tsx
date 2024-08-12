import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="z-50 fixed bottom-0 w-full bg-backgroundSecondary py-[24px] rounded-t-[20px] px-[16px]
                                                               mmd:rounded-t-[40px]">
            <div className="mx-auto flex flex-col
                                    mmd:flex-row items-center justify-between max-w-[1200px] h-[60px]">
                <div className="flex items-center mb-[12px]
                                                  mmd:mb-0">
                    <Image src="/logo_img.png" alt="Logo" width={44} height={37.29}
                           className="object-contain w-[28px]     h-[23px]
                                                     mmd:w-[44px] mmd:h-[37.29px]"/>
                    <div className="text-textPrimary font-hanalei text-[20px]     ml-[4px]
                                                                  mmd:text-[30px] mmd:ml-[12px]">
                        TAPTAP
                    </div>
                </div>
                <div className="text-textPrimary text-[14px] font-montserrat font-[500] mmd:font-[400] leading-[18px]">
                    © 2024 TAPTAP.meme
                </div>
            </div>
        </footer>
    );
};

export default Footer;
