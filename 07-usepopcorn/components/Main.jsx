import React from "react";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function Main({ tempWatchedData, tempMovieData }) {
  return (
    <main className="main">
      <ListBox
        tempWatchedData={tempWatchedData}
        tempMovieData={tempMovieData}
      />
      <WatchedBox
        tempWatchedData={tempWatchedData}
        tempMovieData={tempMovieData}
      />
    </main>
  );
}

export default Main;
