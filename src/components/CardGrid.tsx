import React from "react";
import MovieCard from "./MovieCard";
import { useMovieArray } from "../MoviesContext";

import styled from "styled-components";

const StyledGrid = styled.div`
  margin-top: 4rem;
  gap: 2rem;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardList = () => {
  const movies = useMovieArray();
  return (
    <StyledGrid className="container">
      {movies.map((movie: any) => (
        <MovieCard
          title={movie.Title}
          description={movie.Plot}
          director={movie.Director}
          year={movie.Year}
          rating={movie.imdbRating}
          poster={movie.Poster}
          key={movie.imdbID}
        />
      ))}
    </StyledGrid>
  );
};

export default CardList;
