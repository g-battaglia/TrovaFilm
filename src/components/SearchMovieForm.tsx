import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { TitleField, DecadeField, SortField } from "./";
import { useState, useEffect } from "react";
import API from "../API";

// Context:
import { useMovieArrayUpdate } from "../MoviesContext";

const StyledForm = styled(Form)`
  display: flex;
  gap: 2rem;

  // Create media queries for mobile
  @media (max-width: 992px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const SearchMovieForm = () => {
  const [decade, setDecade] = useState("All");
  const [sort, setSort] = useState("Rating");
  const [title, setTitle] = useState("Title");
  const [movies, setMovies] = useState([]);
  const setFilteredMovies = useMovieArrayUpdate();

  function orderByType(data: any, sort: string) {
    switch (sort) {
      case "Title":
        data.sort((a: any, b: any) => (a.Title > b.Title ? 1 : -1));
        break;
      case "Rating":
        data.sort((a: any, b: any) => (a.imdbRating > b.imdbRating ? -1 : 1));
        break;
      case "Year":
        data.sort((a: any, b: any) => (a.Year > b.Year ? -1 : 1));
        break;
      // no default
    }
    return data;
  }

  function filterByDecade(movies: any, decade: any) {
    const filtered = movies.filter((movie: any) => {
      if (decade === "All") {
        return true;
      }
      return +decade < movie.Year && movie.Year < +decade + 9;
    });
    console.log("filter");
    console.log(filtered);
    return filtered;
  }

  useEffect(() => {
    setMovies((prev) => orderByType(prev, sort));
    setFilteredMovies(filterByDecade(movies, decade));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decade, movies, sort]);

  async function onSubmit(event: any) {
    event.preventDefault();
    console.log(sort, decade, title);
    const moviesArray = await API.getFromApi(title);
    setMovies(moviesArray);
  }

  return (
    <StyledForm onSubmit={(e: any) => onSubmit(e)}>
      <TitleField onChange={setTitle} />
      <DecadeField onChange={setDecade} />
      <SortField onChange={setSort} />
      <Button variant="primary" type="submit">
        Trova Simili
      </Button>
    </StyledForm>
  );
};

export default SearchMovieForm;
