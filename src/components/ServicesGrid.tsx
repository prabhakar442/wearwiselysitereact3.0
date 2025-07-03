import React from 'react';
import ServiceCard from './ServiceCard';
import { Shirt, Sparkles, Package, ShoppingBag, Sofa, Car as Carpet } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: <Shirt className="w-12 h-12 text-blue-500" />,
      title: "DryClean",
      price: "₹30 per kg",
      description: "Premium quality dry cleaning that extends the lifespan of your clothes. Best for delicate and fine.",
      services: ["Non-Damaging Treatment", "Spotting", "Ironing and Pressing"],
      buttonText: "Read More"
    },
  
    {
      icon: <Package className="w-12 h-12 text-purple-500" />,
      title: "Leather Jacket",
      price: "₹99 per pc",
      description: "Dry cleaning for delicate leather preservation. Professional leather care specialists.",
      services: ["Eco Treatment", "Steam Cleaning", "Caidron Cleaning", "Drying & Finishing"],
      buttonText: "Read More"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-indigo-500" />,
      title: "Shoe",
      price: "₹89 per pair",
      description: "Our specialized shoe care services maintain your footwear investment.",
      services: ["Shoe Leather / Suede", "Eco Treatment", "Polishing and Finishing", "Deodorizing and Disinfecting"],
      buttonText: "Read More"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-pink-500" />,
      title: "Bag",
      price: "₹140 per pc",
      description: "Professional bag cleaning for all types including leather and fabric.",
      services: ["Surface and Interior Cleaning", "Stain Removal", "Handle and Hardware Care", "Packaging"],
      buttonText: "Read More"
    },
    
    {
      icon: <Carpet className="w-12 h-12 text-red-500" />,
      title: "Carpet",
      price: "₹18 per sqft",
      description: "Professional carpet cleaning using advanced washing and steam methods.",
      services: ["Vacuuming", "Steam Cleaning", "Low Moisture Cleaning", "Spot Treatment", "Drying"],
      buttonText: "Read More"
    }
  ];

  return (
    <section id="services-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
              services={service.services}
              buttonText={service.buttonText}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Download Full Price List
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


