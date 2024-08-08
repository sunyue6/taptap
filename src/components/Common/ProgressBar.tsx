import React from 'react';

interface ProgressBarProps {
    progress: number; // Progress value between 0 and 100
    height?: string; // Optional height of the progress bar
    color?: string;  // Optional color of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = '12px', color = 'bg-blue-500' }) => {
    return (
        <div className="w-full bg-backgroundLightPink rounded-[100px] overflow-hidden" style={{ height }}>
            <div
                className={`h-full ${color} transition-width duration-300 rounded-[100px]`}
                style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
        </div>
    );
};

export default ProgressBar;
