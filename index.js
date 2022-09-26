document.addEventListener("DOMContentLoaded", () => {
  /* fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=a1a8dc71b4398d4b969d426c918b84d8&query=tarzan&page=4"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    }); */
  fetch(
    "https://api.themoviedb.org/3/search/movie/?api_key=a1a8dc71b4398d4b969d426c918b84d8&query=bourne"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
