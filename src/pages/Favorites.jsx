import MovieCard from "../components/MovieCard";

export default function Favorites({ favorites, toggleFavorite }) {
  return (
    <main>
      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>You haven't added any favorite movies yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              onToggle={() => toggleFavorite(movie)}
            />
          ))}
        </div>
      )}
    </main>
  );
}