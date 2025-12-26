const API_KEY = "a735af67"; // OMDb API key
const input = document.getElementById("searchInput");
const container = document.getElementById("movieContainer");

input.addEventListener("keyup", function () {
  const query = input.value.trim();
  if (query.length < 3) {
    container.innerHTML = "";
    return;
  }

  fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "";

      if (data.Response === "False") {
        container.innerHTML = "<p>No results found</p>";
        return;
      }

      data.Search.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
          <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300'}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        `;

        container.appendChild(card);
      });
    });
});
