import React from 'react';

interface TableProps {
    headers: string[];
    rows: { [key: string]: string }[];
}

const TapTable: React.FC<TableProps> = ({ headers, rows }) => {
    return (
        <div className="w-full mx-auto font-[500] text-[16px]">
            {/* Table Header */}
            <div className="flex justify-between pb-[16px] mmd:pb-[32px] ">
                {headers.map((header, index) => (
                    <div key={index} className={`flex-1 ${index === 0 ? 'text-left' : index === headers.length - 1 ? 'text-right' : 'text-center'}`}>
                        {header}
                    </div>
                ))}
            </div>

            {/* Table Content */}
            <div>
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex justify-between items-center pb-[16px] mmd:pb-[32px] ${rowIndex % 2 === 0 ? '' : ''}`}
                    >
                        {headers.map((header, headerIndex) => (
                            <div
                                key={headerIndex}
                                className={`flex-1 ${headerIndex === 0 ? 'text-left' : headerIndex === headers.length - 1 ? 'text-right' : 'text-center'}`}
                            >
                                {row[header]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TapTable;
