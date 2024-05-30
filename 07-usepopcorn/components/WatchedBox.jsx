import React from "react";
import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

function WatchedBox({ tempWatchedData, tempMovieData }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
