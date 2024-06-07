import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import NumResults from "../components/numResults";
import Box from "../components/Box";
import WatchedBox from "../components/WatchedBox";
import WatchedSummary from "../components/WatchedSummary";
import WatchedList from "../components/WatchedList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const query = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_APP_KEY
        }&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
