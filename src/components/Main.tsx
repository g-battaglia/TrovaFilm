import { CardGrid } from ".";
import Hero from "./Hero";
import { useMovieArray } from "../MoviesContext";

const Main = () => {
  const movies = useMovieArray();
  return <div>{movies[0] ? <CardGrid /> : <Hero />}</div>;
};

export default Main;
