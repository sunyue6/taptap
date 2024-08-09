import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface KLineChartProps {
    data: {
        dates: string[];
        values: number[][];
    };
}

const KLineChart: React.FC<KLineChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);

            const option = {
                backgroundColor: '#0C101B', // 设置背景颜色为黑色
                xAxis: {
                    type: 'category',
                    data: data.dates,
                    boundaryGap: false,
                    axisLine: { lineStyle: { color: '#777' } },
                    axisLabel: {
                        color: '#aaa',
                        formatter: function (value: string) {
                            return value.substring(5);
                        },
                    },
                },
                yAxis: {
                    scale: true,
                    position: 'right', // 将 Y 轴移动到右侧
                    axisLine: { lineStyle: { color: '#777' } },
                    splitLine: { show: true, lineStyle: { color: '#333' } },
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'K线',
                        data: data.values,
                        itemStyle: {
                            color: '#00FFB2', // 阳线颜色
                            color0: '#E91898', // 阴线颜色
                            borderColor: '#00FFB2',
                            borderColor0: '#E91898',
                        },
                    },
                ],
            };

            chartInstance.setOption(option);

            return () => {
                chartInstance.dispose();
            };
        }
    }, [data]);

    return <div ref={chartRef} style={{ width: '100%', height: '254px' }} />;
};

export default KLineChart;
