import React from 'react';
import MovieCard from './MovieCard';
import { movies } from '../data/movies';
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

const MovieList = () => {
    return (
        <motion.div 
            className="movie-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </motion.div>
    );
};

export default MovieList;