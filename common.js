document.addEventListener("DOMContentLoaded", () => {
  console.log(window.matchMedia("(prefers-color-scheme: dark)"));

  if (window.matchMedia("(prefers-color-scheme: dark)").checked)
    document.body.classList.add("dark");
  else document.body.classList.add("light");

  const darkToggle = document.createElement("input");
  darkToggle.type = "checkbox";
  document.body.appendChild(darkToggle);
  console.log(darkToggle);
  darkToggle.addEventListener("click", (event) => {
    console.log(document.body);
    if (event.target.checked) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  });
});
