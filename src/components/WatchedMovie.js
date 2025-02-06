// src/components/WatchedMovie.js
export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} width="50" />
      <div>
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span role="img" aria-label="imdb">
              ⭐️
            </span>{" "}
            {movie.imdbRating}
          </p>
          <p>
            <span role="img" aria-label="user-rating">
              🌟
            </span>{" "}
            {movie.userRating}
          </p>
          <p>
            <span role="img" aria-label="runtime">
              ⏳
            </span>{" "}
            {movie.runtime} min
          </p>
        </div>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteWatched(movie.imdbID)}
      >
        X
      </button>
    </li>
  );
}
