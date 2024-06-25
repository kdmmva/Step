import React from 'react';
import CityCard from './CityCard';
import { cities } from '../data/cities';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    }
};

const CityList = () => {
    return (
        <motion.div 
            className="city-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {cities.map((city, index) => (
                <CityCard key={index} city={city} />
            ))}
        </motion.div>
    );
};

export default CityList;
