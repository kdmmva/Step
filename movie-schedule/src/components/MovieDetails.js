import React from 'react';

const MovieDetails = ({ movie }) => {
    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.poster} alt={movie.title} />
            <h4>Showtimes:</h4>
            <ul>
                {movie.showtimes.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetails;
