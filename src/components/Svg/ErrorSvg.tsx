import React from 'react';
import {SvgProps} from "@/utils/types";
const ErrorSvg: React.FC<SvgProps>  = ({ className }) => (
    <div className={className}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame" clipPath="url(#clip0_129_4662)">
                <path id="Vector"
                      d="M9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39758 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39758 18.3332 9.99996 18.3332Z"
                      fill="#FF5255" stroke="#FF5255" strokeWidth="2" strokeLinejoin="round"/>
                <path id="Vector_2" d="M12.357 7.64307L7.64294 12.3571" stroke="#0C101B" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_3" d="M7.64307 7.64307L12.3571 12.3571" stroke="#0C101B" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_129_4662">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    </div>
);

export default ErrorSvg;
