import React from 'react';
import {SvgProps} from "@/utils/types";
const MenuCloseSvg: React.FC<SvgProps>   = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g id="Frame">
            <path id="Vector" d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </g>
    </svg>
);

export default MenuCloseSvg;
