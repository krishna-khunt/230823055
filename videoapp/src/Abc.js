import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, releaseYear, genre, image, description, rating, isAvailableOnPremium }) => (
  <div className="movie-card">
    <img className="movie-card__poster" src={image} alt={title} />
    <div className="movie-card__info">
      <h3 className="movie-card__title">{title} ({releaseYear})</h3>
      <p className="movie-card__genre">{genre}</p>
      <p className="movie-card__description">{description}</p>
      <p className="movie-card__rating">Rating: {rating}</p>
      {isAvailableOnPremium && <p className="movie-card__premium-badge">Available on Premium</p>}
    </div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isAvailableOnPremium: PropTypes.bool.isRequired,
};

export default MovieCard;