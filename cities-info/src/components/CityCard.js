import React from 'react';
import { motion } from 'framer-motion';

const CityCard = ({ city }) => {
    return (
        <motion.div 
            className="city-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <h3>{city.city}</h3>
            <img src={city.coatOfArms} alt={`Coat of arms of ${city.city}`} />
            <p>{city.description}</p>
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Population:</strong> {city.population}</p>
            <p><strong>Area:</strong> {city.area}</p>
        </motion.div>
    );
};

export default CityCard;
