// import { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import MovieList from "./components/MovieDetails";
// import Favorites from "./components/Favorites";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_URL = "https://api.themoviedb.org/3/discover/movie";
// const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setFavorites(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//  const searchMovies = async (query) => {
//   if (!query) return;

//   setLoading(true);
//   try {
//    const res = await axios.get(API_URL, {
//   params: {
//     api_key: API_KEY,
//     with_original_language: "ta",
//     primary_release_date: {
//       gte: "1980-01-01",
//       lte: "2026-12-31",
//     },
//     sort_by: "popularity.desc",
//   },
// });


//     setMovies(res.data.results || []);
//   } catch (err) {
//     console.error("Search error:", err);
//     setMovies([]);
//   } finally {
//     setLoading(false);
//   }
// };



//   const toggleFavorite = (movie) => {
//     const exists = favorites.find((m) => m.id === movie.id);
//     if (exists) {
//       setFavorites(favorites.filter((m) => m.id !== movie.id));
//     } else {
//       setFavorites([...favorites, movie]);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>🎬 Movie Search App</h1>

//       <SearchBar onSearch={searchMovies} loading={loading} />

//       <h2>Search Results</h2>
//       <MovieList
//         movies={movies}
//         onToggleFavorite={toggleFavorite}
//         favorites={favorites}
//         imageUrl={IMAGE_URL}
//       />

//       <h2>❤️ Favorites</h2>
//       <Favorites
//         movies={favorites}
//         onToggleFavorite={toggleFavorite}
//         imageUrl={IMAGE_URL}
//       />
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovie = async (title) => {
    if (!title) return;

    const res = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: API_KEY,
        t: title,
        plot: "full",
      },
    });

    if (res.data.Response === "True") {
      setMovie(res.data);
    } else {
      alert("Movie not found");
    }
  };

  const addFavorite = () => {
    if (!favorites.find((f) => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Tamil Movie Search App </h1>

      <SearchBar onSearch={searchMovie} />

      {movie && (
        <MovieDetails movie={movie} onFavorite={addFavorite} />
      )}

      <Favorites movies={favorites} />
    </div>
  );
}

export default App;
