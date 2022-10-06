document.addEventListener("DOMContentLoaded", () => {
  // dark mode setting: Hvis den er sat tidligere i local storage, bevares den.
  // Hvis ikke, tages den fra hvad browseren er sat til, og gemmes i local storage.
  let darkMode = localStorage.getItem("mymoviedarkmode");
  if (darkMode === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").checked) {
      document.body.classList.add("dark");
      localStorage.setItem("mymoviedarkmode", "true");
      darkMode = "true";
    } else {
      document.body.classList.add("light");
      localStorage.setItem("mymoviedarkmode", "false");
      darkMode = "false";
    }
  } else {
    if (darkMode === "true") document.body.classList.add("dark");
    else document.body.classList.add("light");
  }

  const header = document.querySelector(".header");
  const title = document.createElement("H1");
  const darkToggle = document.createElement("input");
  darkToggle.type = "checkbox";
  title.innerHTML = "MyMovies";
  header.appendChild(title);
  header.appendChild(darkToggle);
  if (darkMode === "true") darkToggle.checked = true;
  else darkToggle.checked = false;
  darkToggle.addEventListener("click", (event) => {
    if (event.target.checked) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("mymoviedarkmode", "true");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("mymoviedarkmode", "false");
    }
  });
});
