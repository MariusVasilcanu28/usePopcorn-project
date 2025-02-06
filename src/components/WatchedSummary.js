// src/components/WatchedSummary.js
function average(arr) {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
}

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span role="img" aria-label="number">
            #️⃣
          </span>{" "}
          {watched.length} movies
        </p>
        <p>
          <span role="img" aria-label="imdb">
            ⭐️
          </span>{" "}
          {avgImdbRating.toFixed(1)}
        </p>
        <p>
          <span role="img" aria-label="user-rating">
            🌟
          </span>{" "}
          {avgUserRating.toFixed(1)}
        </p>
        <p>
          <span role="img" aria-label="runtime">
            ⏳
          </span>{" "}
          {avgRuntime} min
        </p>
      </div>
    </div>
  );
}
