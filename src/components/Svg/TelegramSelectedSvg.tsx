import React from 'react';
import {SvgProps} from "@/utils/types";
const TelegramSelectedSvg: React.FC<SvgProps>  = ({ className }) => (
    <svg className={className} width="52" height="52" viewBox="0 0 52 52" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/telegram logo">
            <rect width="52" height="52" rx="26" fill="#E71998"/>
            <path id="XMLID 497"
                  d="M14.4239 25.5489L19.954 27.722L22.0945 34.9694C22.2314 35.4336 22.7706 35.6052 23.1284 35.2971L26.211 32.6514C26.5341 32.3742 26.9943 32.3604 27.332 32.6185L32.8919 36.8683C33.2747 37.1612 33.817 36.9404 33.913 36.4534L37.9859 15.8271C38.0907 15.2951 37.5942 14.8513 37.1131 15.0472L14.4174 24.2651C13.8574 24.4925 13.8622 25.3273 14.4239 25.5489ZM21.7495 26.5652L32.5574 19.557C32.7516 19.4314 32.9515 19.7079 32.7847 19.8708L23.865 28.6C23.5515 28.9073 23.3493 29.3185 23.292 29.7648L22.9882 32.1354C22.9479 32.452 22.5256 32.4834 22.4426 32.1771L21.2741 27.8541C21.1402 27.3611 21.3353 26.8344 21.7495 26.5652Z"
                  fill="white"/>
        </g>
    </svg>
);

export default TelegramSelectedSvg;
