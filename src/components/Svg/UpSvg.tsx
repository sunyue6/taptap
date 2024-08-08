import React from 'react';
import {SvgProps} from "@/utils/types";
const UpSvg: React.FC<SvgProps> = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="mdi:expand-more">
                <path id="Vector"
                      d="M5.41 16.4199L12 9.82992L18.59 16.4199L20 14.9999L12 6.99992L4 14.9999L5.41 16.4199Z"
                      fill="white"/>
            </g>
        </svg>
    )
}
export default UpSvg;
