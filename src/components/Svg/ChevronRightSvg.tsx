import React from 'react';
import {SvgProps} from "@/utils/types";
const ChevronRightSvg: React.FC<SvgProps> = ({ className }: { className?: string }) => (
    <div  className={className}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="chevron-right">
                <path id="Icon" d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </svg>
    </div>
);

export default ChevronRightSvg;
