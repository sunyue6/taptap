import React from 'react';
import {SvgProps} from "@/utils/types";
const MenuSvg : React.FC<SvgProps>= ({ className }) => (
    <div className={className}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M3.97461 5.97485H19.9746" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path id="Vector_2" d="M3.97461 11.9749H19.9746" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path id="Vector_3" d="M3.97461 17.9749H19.9746" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </svg>
    </div>
);

export default MenuSvg;
