import React, { useState } from 'react';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('dryclean');

  const tabs = [
    { id: 'dryclean', label: 'Dry-clean Rates' }

   
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get The Best Rates with WearWisely
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At WearWisely, we believe in transparent pricing. You deserve to know exactly what you're paying for, whether it's regular laundry, organic dry cleaning, or on-demand ironing. Besides 
            competitive rates, transparent rates that cost of laundry and dry cleaning rates, we also offer real-time updates and an affordable by a laundry and dry cleaning near you. No surcharge, no add-on pricing!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg shadow-sm border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 font-medium rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;