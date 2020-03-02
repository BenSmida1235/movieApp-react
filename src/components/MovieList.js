import React from 'react'
import MovieCard from './MovieCard';
import WithLoader from './loader'

const MovieList = (props) => {
    return (
      <div className="movie_container">
        {props.Data.filter(el =>
          el.rating >= props.minRating &&
          el.title.toLowerCase().includes(props.nameFilter.toLowerCase().trim())
        ).map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
      </div>
    );
}

export default WithLoader(MovieList)
