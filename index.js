// Function to create bascis structure in index.html
function createStructure(element) {
  let nowPlaying = document.createElement("section");
  let popular = document.createElement("section");
  let nowContainer = document.createElement("div");
  let popContainer = document.createElement("div");
  const playingTitle = document.createElement("H2");
  const popularTitle = document.createElement("H2");
  nowContainer.className = "nowplaying";
  popContainer.className = "popular";
  playingTitle.innerHTML = "Now Showing";
  popularTitle.innerHTML = "Popular";
  nowPlaying.appendChild(playingTitle);
  popular.appendChild(popularTitle);
  nowPlaying.appendChild(nowContainer);
  popular.appendChild(popContainer);
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
      let nowContainer = document.querySelector(".nowplaying");
      data.results.forEach((movie) => {
        const movieTag = document.createElement("article");
        const posterTag = document.createElement("img");
        const nameTag = document.createElement("H2");
        movieTag.appendChild(posterTag);
        movieTag.appendChild(nameTag);
        nowContainer.appendChild(movieTag);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        posterTag.src = imageURL;
        nameTag.innerHTML = movie.title;
        movieTag.id = movie.id;
        posterTag.id = movie.id;
        nameTag.id = movie.id;
        nowContainer.addEventListener("click", (event) => {
          console.log(event.target);
          if (event.target.id)
            window.location.href = "detail.html" + "?id=" + event.target.id;
        });
      });
    });
  // Get popular movies
  fetch(
    "https://api.themoviedb.org/3/movie/popular/?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      let popContainer = document.querySelector(".popular");
      data.results.forEach((movie) => {
        const movieTag = document.createElement("article");
        const posterTag = document.createElement("img");
        const nameTag = document.createElement("H2");
        movieTag.appendChild(posterTag);
        movieTag.appendChild(nameTag);
        popContainer.appendChild(movieTag);
        const imageURL =
          "https://image.tmdb.org/t/p" + "/w185" + movie.poster_path;
        posterTag.src = imageURL;
        nameTag.innerHTML = movie.title;
        movieTag.id = movie.id;
        posterTag.id = movie.id;
        nameTag.id = movie.id;
        popContainer.addEventListener("click", (event) => {
          console.log(event.target);
          if (event.target.id)
            window.location.href = "detail.html" + "?id=" + event.target.id;
        });
      });
    });
});
