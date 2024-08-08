import React, { ReactNode, useState } from 'react';

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full  mx-auto font-montserrat">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex-1 py-2 text-[16px] font-medium transition-colors ${
                            index === activeTab
                                ? 'border-b-2 border-success text-success'
                                : 'border-b-2  text-textSecondary hover:text-success'
                        } ${index < tabs.length - 1 ? '' : ''}`} // Add margin-right to all but the last tab
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
