import React from 'react';
import {SvgProps} from "@/utils/types";
const DownArrowSvg: React.FC<SvgProps>   = ({ className }: { className?: string }) => (
<svg className={className}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 1312321582">
        <rect id="Rectangle 8" width="32" height="32" rx="16" fill="white"/>
        <path id="Vector 7" d="M16 11V20.5M16 20.5L11.5 16M16 20.5L20.5 16" stroke="#E91898" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
    </g>
</svg>

);

export default DownArrowSvg;
