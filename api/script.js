class MovieService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = "http://www.omdbapi.com/";
    this.currentPage = 1;
  }
  async search(title, type = "", page = 1) {
    const response = await fetch(
      `${this.apiUrl}?s=${title}&type=${type}&page=${page}&apikey=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }
  async getMovie(movieId) {
    const response = await fetch(
      `${this.apiUrl}?i=${movieId}&apikey=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }
}

const movieService = new MovieService("7649c022");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const moviesContainer = document.getElementById("moviesContainer");
const loader = document.getElementById("loader");
const loadMoreBtn = document.getElementById("loadMoreBtn");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value;
  moviesContainer.innerHTML = "";
  movieService.currentPage = 1;
  loader.style.display = "block";
  const data = await movieService.search(query);
  loader.style.display = "none";
  if (data.Response === "True") {
    displayMovies(data.Search);
    loadMoreBtn.style.display = "block";
  } else {
    moviesContainer.innerHTML = `<p>${data.Error}</p>`;
    loadMoreBtn.style.display = "none";
  }
});

loadMoreBtn.addEventListener("click", async () => {
  const query = searchInput.value;
  movieService.currentPage++;
  loader.style.display = "block";
  const data = await movieService.search(query, "", movieService.currentPage);
  loader.style.display = "none";
  if (data.Response === "True") {
    displayMovies(data.Search);
  } else {
    loadMoreBtn.style.display = "none";
  }
});

function displayMovies(movies) {
  movies.forEach((movie) => {
    const movieElem = document.createElement("div");
    movieElem.className = "movie";
    movieElem.innerHTML = `
 <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="${
      movie.Title
    }">
 <h3>${movie.Title}</h3>
 <p>${movie.Year}</p>
 <button onclick="showDetails('${movie.imdbID}')">Details</button>
        `;
    moviesContainer.appendChild(movieElem);
  });
}

async function showDetails(movieId) {
  const movie = await movieService.getMovie(movieId);
  alert(`Title: ${movie.Title}\nYear: ${movie.Year}\nPlot: ${movie.Plot}`);
}
