import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import useFavorites from "./hooks/useFavorites";

export default function App() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <nav>
        <Link to="/" className="brand">CineVerse</Link>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites ({favorites.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}