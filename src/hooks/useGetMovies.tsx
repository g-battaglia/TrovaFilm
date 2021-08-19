import { useState, useEffect } from "react";
const useGetMovies = () => {
  const [decade, setDecade] = useState("All");
  const [sort, setSort] = useState("Rating");
  const [title, setTitle] = useState("Title");
  const [movies, setMovies] = useState([]);
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
    console.log(filtered);
    return filtered;
  }

  useEffect(() => {
    setMovies((prev) => orderByType(prev, sort));
  }, [sort]);

  let filteredMovies = filterByDecade(movies, decade);
  return { filteredMovies, setDecade, setSort, setTitle };
};

export default useGetMovies;
