// Function to create bascis structure in index.html
function createStructure(element) {
  let nowPlaying = document.createElement("section");
  let popular = document.createElement("section");
  const playingTitle = document.createElement("H2");
  const popularTitle = document.createElement("H2");
  nowPlaying.className = "nowplaying";
  popular.className = "popular";
  playingTitle.innerHTML = "Now Showing";
  popularTitle.innerHTML = "Popular";
  nowPlaying.appendChild(playingTitle);
  popular.appendChild(popularTitle);
  element.appendChild(nowPlaying);
  element.appendChild(popular);
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  createStructure(main);
  // Get movies now playing
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      let playingTag = document.querySelector(".nowplaying");
      data.results.forEach((movie) => {
        const movieTag = document.createElement("img");
        playingTag.appendChild(movieTag);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        movieTag.src = imageURL;
        movieTag.id = movie.id;
      });
      playingTag.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.id)
          window.location.href = "detail.html" + "?id=" + event.target.id;
      });
    });
  // Get popular movies
  fetch(
    "https://api.themoviedb.org/3/movie/popular/?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      let popularTag = document.querySelector(".popular");
      data.results.forEach((movie) => {
        const movieTag = document.createElement("img");
        popularTag.appendChild(movieTag);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        movieTag.src = imageURL;
        movieTag.id = movie.id;
        popularTag.addEventListener("click", (event) => {
          console.log(event.target);
          if (event.target.id)
            window.location.href = "detail.html" + "?id=" + event.target.id;
        });
      });
    });
});
