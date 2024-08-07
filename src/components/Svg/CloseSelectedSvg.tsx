import React from 'react';
import {SvgProps} from "@/utils/types";
const CloseSelectedSvg: React.FC<SvgProps>  = ({ className }) => (
    <div className={className}>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon/X logo">
                <rect width="52" height="52" rx="26" fill="#E71998"/>
                <path id="Vector"
                      d="M32.3263 16H35.6998L28.3297 24.4718L37 36H30.2112L24.894 29.0082L18.8099 36H15.4344L23.3174 26.9385L15 16H21.9611L26.7674 22.3908L32.3263 16ZM31.1423 33.9692H33.0116L20.9454 17.9241H18.9395L31.1423 33.9692Z"
                      fill="white"/>
            </g>
        </svg>
    </div>
);

export default CloseSelectedSvg;
