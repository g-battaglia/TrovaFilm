import React, { createContext, useState, useContext } from "react";

const MovieArrayContext = createContext([]);
const MovieArrayUpdateContext = createContext((x: any) => {});

export function useMovieArray() {
  return useContext(MovieArrayContext);
}

export function useMovieArrayUpdate() {
  return useContext(MovieArrayUpdateContext);
}

export function ThemeProvider({ children }: { children: any }) {
  const [moviesArray, setMoviesArray] = useState([]);

  function updateMoviesArray(newMoviesArray: any) {
    setMoviesArray(newMoviesArray);
  }
  return (
    <MovieArrayContext.Provider value={moviesArray}>
      <MovieArrayUpdateContext.Provider value={updateMoviesArray}>
        {children}
      </MovieArrayUpdateContext.Provider>
    </MovieArrayContext.Provider>
  );
}
