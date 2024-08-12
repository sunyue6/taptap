import React, { ReactNode, useState } from 'react';

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    borderClass?: string; // Optional prop to customize the border class
}

const Tabs: React.FC<TabsProps> = ({ tabs,borderClass = 'border-b-2' }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full  mx-auto font-montserrat">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex-1 py-2 text-[16px] font-medium transition-colors gap-[16px] ${
                            index === activeTab
                                ? 'border-b-2 border-success text-success'
                                : `${borderClass}  text-textSecondary hover:text-success`
                        }`} // ${index < tabs.length - 1 ? '' : ''} Add margin-right to all but the last tab
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="rounded-b-lg mt-[24px]">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
