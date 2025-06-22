import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="bg-blue-900 text-gold-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-bold text-blue-900 mb-4">
        {title}
      </h3>
      <p className="font-raleway text-gray-600 mb-4 flex-grow">{description}</p>
      {/* <a 
        href={`#service-${index}`} 
        className="text-gold-500 font-raleway font-medium hover:text-gold-600 inline-flex items-center mt-2"
      >
    Learn More    
        <svg 
          className="w-4 h-4 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a> */}
    </motion.div>
  );
};

export default ServiceCard;
