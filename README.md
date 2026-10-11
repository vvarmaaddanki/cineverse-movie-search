# Movie Search App

A responsive movie search web app built with **React** and the **TMDB API**. Search for any movie, view its details, and save favorites that stay after you refresh the page.

**[Live Demo](https://cineverse-movie-search-git-main-varma-av.vercel.app/)** | **[GitHub Repo](https://github.com/vvarmaaddanki/cineverse-movie-search.git)**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build_tool-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-routing-CA4245?logo=reactrouter&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)

![Home page screenshot](screenshots/home.png)

---

## Overview

This is a single-page application (SPA) that fetches live movie data from a REST API. I built it to practice real-world frontend skills: API integration, state management with hooks, client-side routing, error handling, and responsive design.

## Features

- **Movie search**: type a title and get a grid of matching movies with posters
- **Movie details page**: rating, release year and overview for each movie
- **Favorites**: add or remove favorites, saved in `localStorage` so they stay after refresh
- **Loading, empty and error states**: clear messages while loading, when nothing is found, and when the network or API fails
- **Responsive layout**: works on phone, tablet and laptop (CSS Grid)
- **Client-side routing**: separate pages for Home, Movie Details and Favorites
- YOUR_OWN_FEATURE (example: sort by rating, debounced search, dark/light mode). Delete this line if you did not build one.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React, JavaScript (ES6+), HTML5, CSS3 |
| Routing | React Router |
| State | React Hooks (`useState`, `useEffect`) and a custom hook (`useFavorites`) |
| Data | TMDB REST API, `fetch` with `async/await` |
| Storage | Browser `localStorage` |
| Tooling | Vite, npm, Git, GitHub |
| Deployment | Netlify |

## Screenshots

| Home | Movie Details | Favorites |
| --- | --- | --- |
| ![Home](screenshots/home.png) | ![Details](screenshots/details.png) | ![Favorites](screenshots/favorites.png) |

## Project Structure

```
movie-search/
├── public/
│   └── _redirects          # Netlify rule so page refresh works on /movie/:id
├── src/
│   ├── api/
│   │   └── tmdb.js         # All API calls in one place
│   ├── components/
│   │   ├── SearchBar.jsx   # Search input and button
│   │   └── MovieCard.jsx   # Poster, title, year, favorite button
│   ├── hooks/
│   │   └── useFavorites.js # Favorites logic + localStorage saving
│   ├── pages/
│   │   ├── Home.jsx        # Search and results
│   │   ├── MovieDetails.jsx
│   │   └── Favorites.jsx
│   ├── App.jsx             # Routes
│   ├── main.jsx            # App entry point
│   └── index.css           # Styles
├── .env                    # API key (not uploaded to GitHub)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repo
git clone YOUR_GITHUB_REPO_LINK
cd movie-search

# 2. Install dependencies
npm install

# 3. Add your API key
echo "VITE_TMDB_KEY=your_key_here" > .env

# 4. Start the dev server
npm run dev
```

Open the local link shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Design Decisions

- **API calls live in `api/tmdb.js`**: if the API changes, only one file needs fixing.
- **Favorites logic lives in a custom hook**: keeps the UI components simple and lets Home and Favorites share the same logic.
- **`MovieCard` is reusable**: the same component is used on the Home and Favorites pages.
- **`try / catch / finally` around every fetch**: the loading message always turns off, and users see a clear error instead of a blank screen.

## Challenges and Solutions

> Replace these with 2 or 3 problems you really faced. Interviewers will ask about them.

- **Problem:** YOUR_REAL_PROBLEM (example: refreshing the details page gave a 404 on Netlify)
  **Solution:** YOUR_REAL_FIX (example: added a `_redirects` file so all routes load `index.html`)
- **Problem:** YOUR_REAL_PROBLEM
  **Solution:** YOUR_REAL_FIX

## Future Improvements

- Pagination or a "Load more" button
- Filter by year and genre
- Debounced search to reduce API requests
- Skeleton loaders instead of plain "Loading..." text

## Author

**ADDANKI VENKATESH VARMA**
[GitHub](https://github.com/vvarmaaddanki) | [LinkedIn](https://www.linkedin.com/in/vvarmaaddanki/) | [Email](varmakbm9@gmail.com)

## Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.
