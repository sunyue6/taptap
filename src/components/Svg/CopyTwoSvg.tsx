import React from 'react';
import {SvgProps} from "@/utils/types";
const CopeTwoSvg: React.FC<SvgProps>   = ({ className }: { className?: string }) => (
<svg className={className} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd"
          d="M6 2V2.98176C6 2.98785 5.99995 2.99393 5.99984 3H7.34375C8.37972 3 9 3.91311 9 4.75V11.25C9 12.0869 8.37972 13 7.34375 13H1.65625C0.620275 13 0 12.0869 0 11.25V4.75C0 3.91311 0.620275 3 1.65625 3H4.00016C4.00005 2.99393 4 2.98785 4 2.98176V1.75C4 0.913108 4.62028 0 5.65625 0H11.3438C12.3797 0 13 0.913108 13 1.75V8.25C13 9.08689 12.3797 10 11.3438 10H10.2538C9.70152 10 9.2538 9.55229 9.2538 9C9.2538 8.44772 9.70152 8 10.2538 8H11V2H6ZM2 5V11H7V5H2Z"
          fill="white" fillOpacity="0.7"/>
</svg>

);

export default CopeTwoSvg;
