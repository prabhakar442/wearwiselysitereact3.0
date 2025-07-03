import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  services: string[];
  buttonText: string;
  buttonColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  price, 
  description, 
  services, 
  buttonText,
  buttonColor = 'green'
}) => {
  
  const buttonColorClass = buttonColor === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600';
  const navigate = useNavigate();

  const handleViewRates = () => {
    if (title.toLowerCase().includes('jacket')) {
      navigate('/jacket-cleaning');
    }
    // Future: other conditions for different services
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="text-right">
          <div className="text-sm text-gray-500 mb-1">Starting at</div>
          <div className="text-2xl font-bold text-gray-900">{price}</div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      
      <button className={`w-full ${buttonColorClass} text-white py-2 px-4 rounded-lg font-medium transition-colors mb-4`}>
        {buttonText}
      </button>
      
      <div className="space-y-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {service}
          </div>
        ))}
      </div>
      
      <button 
        className="w-full mt-4 text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors"
        onClick={handleViewRates}
      >
        View Rate List
      </button>
    </div>
  );
};

export default ServiceCard;
