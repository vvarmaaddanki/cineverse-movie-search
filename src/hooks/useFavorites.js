import { useState } from "react";

const STORAGE_KEY = "cineverse-favorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  function toggleFavorite(movie) {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === movie.id);

      const updated = exists
        ? current.filter((item) => item.id !== movie.id)
        : [...current, movie];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }

  return { favorites, toggleFavorite };
}