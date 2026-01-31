// import React from "react";
// import MovieList from "./MovieDetails";

// const Favorites = ({ movies, onToggleFavorite, imageUrl }) => {
//   if (!movies.length) {
//     return (
//       <div className="empty-state">
//         <p>No favorites yet. Search and save some movies! ❤️</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <p className="favorites-subtitle">
//         Click the heart icon to remove from favorites
//       </p>
//       <MovieList
//         movies={movies}
//         onToggleFavorite={onToggleFavorite}
//         favorites={movies}
//         imageUrl={imageUrl}
//       />
//     </>
//   );
// };

// export default Favorites;
function Favorites({ movies }) {
  return (
    <div>
      <h2>❤️ Favorites</h2>
      {movies.map((m) => (
        <p key={m.imdbID}>{m.Title}</p>
      ))}
    </div>
  );
}

export default Favorites;
