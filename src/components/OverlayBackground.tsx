// components/OverlayBackground.tsx
const OverlayBackground = () => {
    return (
        <>
            <div className="absolute bottom-0 w-[976.239px] h-[691.258px] transform rotate-[25.666deg] flex-shrink-0 bg-[#0F00B7]/50 filter blur-[77px] z-10"
                style={{
                    opacity: 0.5,
                    filter: 'blur(77px)',
                    clipPath: 'polygon(50%, 50%, 100%, 0, 100%, 100%)',
                    borderRadius: '50%',
                }}
            ></div>
            <div className="absolute bottom-0 w-[1341.903px] h-[1088.344px] transform rotate-[28.158deg] flex-shrink-0 bg-[#E91898]/10 filter blur-[77px] z-10"
                 style={{
                     opacity: 0.5,
                     filter: 'blur(77px)',
                     clipPath: 'polygon(50%, 50%, 100%, 0, 100%, 100%)',
                     borderRadius: '50%',
                 }}
            ></div>
            <div className="absolute bottom-0 right-0 w-[1180.83px] h-[826.245px] transform rotate-[25.666deg] flex-shrink-0 bg-[#E91898]/50 filter blur-[77px] z-10"
                 style={{
                     opacity: 0.5,
                     filter: 'blur(77px)',
                     clipPath: 'polygon(50%, 50%, 100%, 0, 100%, 100%)',
                     borderRadius: '50%',
                 }}
            ></div>
            <div
                className="absolute w-[859.747px] h-[389.538px] transform rotate-[15deg] flex-shrink-0 bg-gradient-to-r from-[rgba(255,122,0,0.5)] to-[rgba(255,194,54,0.5)] via-transparent filter blur-[47px] z-10"
                style={{
                    background: 'linear-gradient(87deg, rgba(255,122,0,0.5) 4.85%, rgba(255,194,54,0.5) 61.26%)',
                    bottom: '176px',
                    right: '109px',
                    opacity: 0.5,
                    filter: 'blur(77px)',
                    clipPath: 'polygon(50%, 50%, 100%, 0, 100%, 100%)',
                    borderRadius: '50%',
                }}
            ></div>
        </>
    );
};

export default OverlayBackground;
