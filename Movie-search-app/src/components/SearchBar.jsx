// import React, { useState } from "react";

// function SearchBar({ onSearch, loading }) {
//   const [text, setText] = useState("");

//   const handleSearch = () => {
//     onSearch(text.trim());
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={handleSearch} disabled={loading}>
//         {loading ? "Searching..." : "Search"}
//       </button>
//     </div>
//   );
// }

// export default SearchBar;
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <div className="search-bar">
      <input
        placeholder="Enter Tamil movie name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSearch(text)}>Search</button>
    </div>
  );
}

export default SearchBar;
