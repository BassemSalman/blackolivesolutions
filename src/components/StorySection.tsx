import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
  location: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const StorySection: React.FC<StorySectionProps> = ({ title, content, image, reverse = false, location }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            custom={0}
          >
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-blue-900 py-2 px-4 rounded shadow-md font-raleway font-bold">
                {location}
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span 
                className="text-gold-500 font-raleway uppercase tracking-wider font-medium"
                variants={fadeInVariants}
                custom={1}
              >
                Our Story
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2 mb-6"
                variants={fadeInVariants}
                custom={2}
              >
                {title}
              </motion.h2>
              
              <motion.div 
                className="prose prose-lg max-w-none font-raleway text-gray-600"
                variants={fadeInVariants}
                custom={3}
              >
                <p>{content}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;