import React from 'react';
import {SvgProps} from "@/utils/types";
const DownSvg: React.FC<SvgProps> = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="mdi:expand-more">
                <path id="Vector"
                      d="M5.41 6.58008L12 13.1701L18.59 6.58008L20 8.00008L12 16.0001L4 8.00008L5.41 6.58008Z"
                      fill="white"/>
            </g>
        </svg>

    )
}
export default DownSvg;
