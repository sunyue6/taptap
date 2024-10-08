import React from 'react';
import {SvgProps} from "@/utils/types";
const ShareSvg: React.FC<SvgProps>   = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g id="Frame">
            <path id="Vector" d="M11.6667 2.5H17.5001V8.33333" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_2"
                  d="M17.5 12.2807V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05965 17.5 2.5 16.9404 2.5 16.25V3.75C2.5 3.05965 3.05965 2.5 3.75 2.5H7.5"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_3" d="M10.75 9.25L17.125 2.875" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </g>
    </svg>
);

export default ShareSvg;
