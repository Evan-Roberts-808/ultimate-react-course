import React, { useEffect } from "react";
import StarRating from "../components/StarRating";
import {useState} from "react"
import Loader from "../components/Loader";

function SelectedMovie({ selectedId, handleCloseMovie }) {
  const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false)

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
        setIsLoading(true)
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_APP_KEY
        }&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false)
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
    {isLoading? <Loading/> : 
    <>
      <header>
        <button className="btn-black" onClick={handleCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>{imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={24} />
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
      </>}

    </div>

  );
}

export default SelectedMovie;
