// src/components/Movie.js
export default function Movie({ movie, onSelectedMovie }) {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span role="img" aria-label="calendar">
            📆
          </span>
          {movie.Year}
        </p>
      </div>
    </li>
  );
}
