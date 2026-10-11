const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) throw new Error("Could not load movies");

  const data = await res.json();
  return data.results;
}

export async function getMovie(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Could not load movie");

  return res.json();
}
export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Could not load popular movies");
  }

  const data = await res.json();
  return data.results;
}