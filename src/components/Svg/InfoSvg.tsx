import React from 'react';
import {SvgProps} from "@/utils/types";
const InfoSvg: React.FC<SvgProps>  = ({ className }) => (
    <div className={className}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame" clipPath="url(#clip0_129_4673)">
                <path id="Vector"
                      d="M9.99996 18.3332C12.3011 18.3332 14.3845 17.4004 15.8925 15.8924C17.4005 14.3843 18.3333 12.301 18.3333 9.99984C18.3333 7.69867 17.4005 5.61534 15.8925 4.10728C14.3845 2.59925 12.3011 1.6665 9.99996 1.6665C7.69879 1.6665 5.61546 2.59925 4.1074 4.10728C2.59937 5.61534 1.66663 7.69867 1.66663 9.99984C1.66663 12.301 2.59937 14.3843 4.1074 15.8924C5.61546 17.4004 7.69879 18.3332 9.99996 18.3332Z"
                      fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path id="Vector_2" fillRule="evenodd" clipRule="evenodd"
                      d="M10 4.5835C10.5753 4.5835 11.0417 5.04987 11.0417 5.62516C11.0417 6.20045 10.5753 6.66683 10 6.66683C9.42475 6.66683 8.95837 6.20045 8.95837 5.62516C8.95837 5.04987 9.42475 4.5835 10 4.5835Z"
                      fill="#0C101B"/>
                <path id="Vector_3" d="M10.2083 14.1668V8.3335H9.79167H9.375" stroke="#0C101B" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_4" d="M8.75 14.1665H11.6667" stroke="#0C101B" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_129_4673">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    </div>
);

export default InfoSvg;
