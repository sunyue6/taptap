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
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex-1 py-2 text-sm font-medium transition-colors ${
                            index === activeTab
                                ? 'border-b-2 border-success text-success'
                                : 'text-textSecondary'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 bg-gray-100 rounded-b-lg">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
