import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies, } from "../api/tmdb";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

export default function Home({ favorites, toggleFavorite }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
  async function loadPopularMovies() {
    setLoading(true);
    setError("");

    try {
      const results = await getPopularMovies();
      setMovies(results);
    } catch (err) {
      setError(err.message || "Could not load movies");
    } finally {
      setLoading(false);
    }
  }

  loadPopularMovies();
}, []);

  async function handleSearch(query) {
    setLoading(true);
    setError("");

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(err.message || "Could not load movies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Discover Movies</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some((item) => item.id === movie.id)}
            onToggle={() => toggleFavorite(movie)}
          />
        ))}
      </div>
    </main>
  );
}