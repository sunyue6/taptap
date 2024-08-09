import React from 'react';
import { SvgProps } from "@/utils/types";

interface EthLogoSvgProps extends SvgProps {
    color?: string;
}

const EthLogoSvg: React.FC<EthLogoSvgProps> = ({ className, color = "#00FFB2" }) => (
    <svg className={className} width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="White Ethereum Logo">
            <path id="Vector" d="M9.82195 0.5L9.60742 1.22918V22.3883L9.82195 22.6025L19.6438 16.7968L9.82195 0.5Z"
                  fill={color}/>
            <path id="Vector_2" d="M9.82183 0.5L0 16.7968L9.82183 22.6025V12.3325V0.5Z" fill={color}/>
            <path id="Vector_3"
                  d="M9.82011 24.4622L9.69922 24.6095V32.1469L9.82011 32.5L19.6478 18.6594L9.82011 24.4622Z"
                  fill={color}/>
            <path id="Vector_4" d="M9.82183 32.4998V24.4619L0 18.6592L9.82183 32.4998Z" fill={color}/>
            <path id="Vector_5" d="M9.82227 22.6024L19.6439 16.7968L9.82227 12.3325V22.6024Z" fill={color}/>
            <path id="Vector_6" d="M0 16.7968L9.82168 22.6024V12.3325L0 16.7968Z" fill={color}/>
        </g>
    </svg>
);

export default EthLogoSvg;
