import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does WEarWisely determine laundry and dry-cleaning prices?",
      answer: "Our pricing is based on weight for most services, with transparent rates per kg. Special items like leather jackets, shoes, and bags have per-piece pricing."
    },
    {
      question: "Are there any discounts available on laundry and dry-cleaning services?",
      answer: "Yes, we offer various discounts including bulk order discounts, subscription plans, and seasonal offers. Check our prepaid plans for better rates."
    },
    {
      question: "Is pickup and delivery included in the service price?",
      answer: "Yes, pickup and delivery services are included in our service prices within our coverage areas. No additional charges for standard pickup and delivery."
    },
    {
      question: "Do different fabrics have different cleaning charges?",
      answer: "Yes, premium fabrics and delicate materials may have different pricing. Our organic dry cleaning service costs more but provides better care for sensitive fabrics."
    },
    {
      question: "Are dry cleaning prices different from regular laundry prices?",
      answer: "Yes, dry cleaning typically costs more than regular washing due to the specialized solvents and equipment required. Check our rate cards for specific pricing."
    },
    {
      question: "Do you offer separate pricing for bulk laundry services?",
      answer: "Yes, we offer competitive bulk pricing for hotels, restaurants, and other commercial clients. Contact us for customized bulk service rates."
    },
    {
      question: "How much does it cost to clean jackets and winter wear?",
      answer: "Winter wear and jackets are priced per piece, starting from ₹99 for leather jackets. Regular jackets and coats have different pricing based on material."
    },
    {
      question: "What are the charges for shoe cleaning services?",
      answer: "Shoe cleaning starts at ₹89 per pair, which includes cleaning, polishing, and deodorizing. Premium leather and suede shoes may have additional charges."
    },
    {
      question: "Do you charge extra for stain removal or special treatments?",
      answer: "Basic stain removal is included in our service. However, heavy staining or special treatments may incur additional charges, which we'll inform you about beforehand."
    },
    {
      question: "Are there separate prices for home cleaning services like sofa or carpet cleaning?",
      answer: "Yes, home cleaning services have separate pricing. Sofa cleaning starts at ₹800 per piece, and carpet cleaning is ₹18 per square foot."
    },
    {
      question: "Do you have any special pricing deals for corporate or business customers?",
      answer: "Yes, we offer special corporate rates and contracts for businesses. Contact our corporate sales team for customized pricing and service packages."
    },
    {
      question: "Can I combine offers and discounts with my prepaid plan balance?",
      answer: "Prepaid plans already offer discounted rates. Additional offers can usually be combined, but terms and conditions apply. Check with our customer service for specific combinations."
    },
    {
      question: "Where can I find information about upcoming pricing updates or offers?",
      answer: "Stay updated through our website, mobile app, and subscribe to our newsletter for the latest pricing updates, offers, and seasonal discounts."
    },
    {
      question: "Are there any additional charges apart from the listed service prices?",
      answer: "No, we believe in transparent pricing with no hidden costs. All charges are clearly mentioned upfront, and any additional services are optional and clearly communicated."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          FAQs | WearWisely - Affordable Laundry & Dry Clean Pricing
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;