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
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SelectedMovie from "../components/SelectedMovie";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (movieId) => {
    setSelectedId((selectedId) => (movieId === selectedId ? null : movieId))
  }

  const handleCloseMovie = () => {
    setSelectedId(null)
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_APP_KEY
          }&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong while fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie selectedId={selectedId} onCloseMovie={handleCloseMovie}/>
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
