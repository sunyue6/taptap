import React from 'react';

interface TableProps {
    headers?: string[];
    rows: { [key: string]: React.ReactNode }[];
}

const TapTable: React.FC<TableProps> = ({ headers = [], rows }) => {
    return (
        <div className="w-full mx-auto font-[500] text-[16px]">
            {/* Table Header */}
            {headers.length > 0 && (
                <div className="flex justify-between pb-[16px] mmd:pb-[20px] ">
                    {headers.map((header, index) => (
                        <div key={index} className={`flex-1 ${index === 0 ? 'text-left' : index === headers.length - 1 ? 'text-right' : 'text-center'}`}>
                            {header}
                        </div>
                    ))}
                </div>
            )}

            {/* Table Content */}
            <div>
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex justify-between items-center ${rowIndex === rows.length -1 ? 'pb-0' :  'pb-[16px] mmd:pb-[20px]'}  ${rowIndex % 2 === 0 ? '' : ''}`}
                    >
                        {headers.length > 0 ? (
                            headers.map((header, headerIndex) => (
                                <div
                                    key={headerIndex}
                                    className={`flex-1 ${headerIndex === 0 ? 'text-left' : headerIndex === headers.length - 1 ? 'text-right' : 'text-center'}`}
                                >
                                    {row[header]}
                                </div>
                            ))
                        ) : (
                            // 如果没有 headers，则直接渲染 row 的所有值
                            Object.values(row).map((value, index) => (
                                // flex-1
                                <div
                                    key={index}
                                    className={`${index === 0 ? 'text-left' : index === Object.values(row).length - 1 ? 'text-right' : 'text-center'}`}
                                >
                                    {value}
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TapTable;
