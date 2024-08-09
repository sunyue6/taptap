const CheckMarkSvg = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onClick}
    >
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

export default CheckMarkSvg;
