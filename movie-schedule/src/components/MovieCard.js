import React from 'react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
    return (
        <motion.div 
            className="movie-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <h4>Showtimes:</h4>
            <ul>
                {movie.showtimes.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default MovieCard;
