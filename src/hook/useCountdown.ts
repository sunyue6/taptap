import { useState, useEffect } from 'react';

const useCountdown = (initialTime: number) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown); // 清除定时器
    }, []);

    // 格式化时间为 HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
    };

    return {
        timeLeft,
        formattedTime: formatTime(timeLeft),
    };
};

export default useCountdown;
