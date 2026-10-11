import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/tmdb";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await getMovie(id);
        setMovie(data);
      } catch {
        setError("Could not load movie details.");
      }
    }

    loadMovie();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading movie details...</p>;

  return (
    <main className="movie-details">
      <h1>{movie.title}</h1>

      {movie.poster_path && (
        <img src={IMG + movie.poster_path} alt={movie.title} />
      )}

      <p>Release date: {movie.release_date || "Unknown"}</p>
      <p>Rating: {movie.vote_average?.toFixed(1) ?? "N/A"}/10</p>
      <p>{movie.overview || "No overview available."}</p>
    </main>
  );
}