import { Link } from "react-router-dom";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, isFavorite, onToggle }) {
  return (
    <div className="card movie-card">
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img src={IMG + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="no-poster">No poster</div>
        )}
        <h3>{movie.title}</h3>
      </Link>

      <p>{movie.release_date?.slice(0, 4)}</p>

      <button onClick={onToggle}>
        {isFavorite ? "Remove favorite" : "Add favorite"}
      </button>
    </div>
  );
}