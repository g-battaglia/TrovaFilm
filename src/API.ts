const API = {
  getFromApi: async (title: string) => {
    console.log("fetch");
    let searchLenght = "?l=50";
    const omdbURL =
      "https://movie-api-bt.herokuapp.com/" + title + searchLenght;
    const res = await fetch(omdbURL);
    const json = await res.json();
    const data = await json;
    let filteredData = data.filter((movie: any) => !movie.Error);
    return filteredData;
  },
};
export default API;
