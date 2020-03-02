import React from "react";
import Rate from './Rate'

const MovieCard = props => {
  return (
    <div className="movie_card">
      <p className="movie_title">{props.movie.title}</p>
      <p className="movie_year">{props.movie.year}</p>
      <img className="movie_image" src={props.movie.image} alt="" />
      <Rate rating={props.movie.rating} />
    </div>
  );
};

export default MovieCard;
