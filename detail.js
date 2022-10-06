document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  var movieNr = params.get("id");
  console.log(movieNr);
  fetch(
    "https://api.themoviedb.org/3/movie/" +
      movieNr +
      "?api_key=a1a8dc71b4398d4b969d426c918b84d8"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const poster = "https://image.tmdb.org/t/p" + "/w500" + data.poster_path;
      const posterTag = document.createElement("img");
      const textTag = document.createElement("article");
      const movieTitle = document.createElement("H2");
      const movieVote = document.createElement("p");
      const movieLength = document.createElement("p");
      let movieGenres = document.createElement("p");
      const movieOverview = document.createElement("p");
      movieTitle.innerHTML = data.original_title;
      movieVote.innerHTML =
        "Imdb: " + data.vote_average.toPrecision(2) + " / 10";
      movieLength.innerHTML = "Runtime: " + data.runtime + " min";
      movieGenres.innerHTML = "Genres: ";
      data.genres.forEach((genre, index) => {
        if (index === 0) movieGenres.innerHTML += genre.name;
        else movieGenres.innerHTML += ", " + genre.name;
      });

      movieOverview.innerHTML = data.overview;
      main = document.querySelector(".main");
      posterTag.src = poster;
      textTag.appendChild(movieTitle);
      textTag.appendChild(movieVote);
      textTag.appendChild(movieLength);
      textTag.appendChild(movieGenres);
      textTag.appendChild(movieOverview);
      main.appendChild(posterTag);
      main.appendChild(textTag);
    });
});
