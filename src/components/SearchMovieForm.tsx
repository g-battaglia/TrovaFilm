import { Form, Button, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { TitleField, DecadeField, SortField } from "./";
import { useState, useEffect } from "react";
import API from "../API";

// Context:
import { useMovieArrayUpdate } from "../MoviesContext";

const StyledForm = styled(Form)`
  display: flex;
  gap: 2rem;
  align-items: center;

  input,
  select {
    width: 10rem;
  }

  // Create media queries for mobile
  @media (max-width: 992px) {
    align-items: stretch;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;

    input,
    select {
      width: 100%;
    }
    .spinner {
      align-self: center;
    }
  }
`;

const SearchMovieForm = () => {
  const [loading, setLoading] = useState(false);
  const [decade, setDecade] = useState("All");
  const [sort, setSort] = useState("Rating");
  const [title, setTitle] = useState("Title");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const setGlobalMovies = useMovieArrayUpdate();

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
    // console.log(filtered);
    return filtered;
  }

  useEffect(() => {
    setFilteredMovies(() => orderByType(filterByDecade(movies, decade), sort));
  }, [movies, sort, decade]);

  useEffect(() => {
    setGlobalMovies(filteredMovies);
  }, [filteredMovies, setGlobalMovies]);

  async function onSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const moviesArray = await API.getFromApi(title);
    setMovies(moviesArray);
    setLoading(false);
  }

  return (
    <StyledForm onSubmit={(e: any) => onSubmit(e)}>
      {loading && (
        <Spinner animation="border" role="status" className="spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
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
