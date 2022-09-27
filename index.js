document.addEventListener("DOMContentLoaded", () => {
  // Get movies now playing
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((movie) => {
        console.log(movie);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        console.log(imageURL);
        
      });
    });
  // Get popular movies
  fetch(
    "https://api.themoviedb.org/3/movie/popular/?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((movie) => {
        console.log(movie);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        console.log(imageURL);
      });
    });
});
