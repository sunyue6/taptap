import React from 'react';
import {SvgProps} from "@/utils/types";
const ChangeSvg: React.FC<SvgProps>   = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/Status">
            <path id="Union" fillRule="evenodd" clipRule="evenodd"
                  d="M10.7067 1.95955L9.99955 1.25244L8.58533 2.66665L9.29243 3.37376L10.9187 4.99999H3.99953H2.99953V6.99999H3.99953H13.3329H15.7471L14.04 5.29289L10.7067 1.95955ZM2.66616 8.99999H0.251953L1.95905 10.7071L5.29237 14.0404L5.99948 14.7475L7.41369 13.3333L6.70659 12.6262L5.08036 11H11.9995H12.9995V8.99999H11.9995H2.66616Z"
                  fill="white"/>
        </g>
    </svg>
);

export default ChangeSvg;
