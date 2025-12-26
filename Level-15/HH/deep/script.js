// ✅ OMDb API Configuration
const API_KEY = 'a735af67';
const API_URL = 'https://www.omdbapi.com/';
const DEFAULT_POSTER = 'https://via.placeholder.com/500x750/1f1f1f/808080?text=No+Poster';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsGrid = document.getElementById('resultsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const loader = document.getElementById('loader');

// Current search state
let currentSearchType = 'movie';
let currentPage = 1;
let currentQuery = '';

// Event Listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update search type
        currentSearchType = button.dataset.type;

        // If there's already a search query, perform search with new filter
        if (currentQuery) {
            performSearch();
        }
    });
});

// Perform search function
async function performSearch() {
    const query = searchInput.value.trim();
    if (!query) return;

    loader.classList.add('active');
    resultsGrid.innerHTML = '';
    noResults.style.display = 'none';

    try {
        const apiUrl = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=${currentSearchType}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        loader.classList.remove('active');

        if (data.Response === "False") {
            noResults.style.display = 'block';
            resultsCount.textContent = '(0 results)';
            return;
        }

        resultsCount.textContent = `(${data.Search.length} results)`;
        displayResults(data.Search);

    } catch (err) {
        console.error(err);
        loader.classList.remove('active');
        showError();
    }
}


// Display search results
function displayResults(results) {
    resultsGrid.innerHTML = '';

    results.forEach(movie => {
        resultsGrid.appendChild(createMovieCard(movie));
    });
}


// Create result card based on search type
function createResultCard(item) {
    // Determine card type based on search type or media_type
    const mediaType = currentSearchType === 'multi' ? item.media_type : currentSearchType;

    if (mediaType === 'movie') {
        return createMovieCard(item);
    } else if (mediaType === 'tv') {
        return createTVShowCard(item);
    } else if (mediaType === 'person') {
        return createPersonCard(item);
    }

    return null;
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const poster = movie.Poster !== "N/A" ? movie.Poster : DEFAULT_POSTER;
    const title = movie.Title;
    const year = movie.Year;
    const type = movie.Type.toUpperCase();

    card.innerHTML = `
        <img src="${poster}" class="movie-poster" alt="${title}">
        <div class="movie-info">
            <h3 class="movie-title">${title}</h3>
            <div class="movie-meta">
                <div class="movie-year">
                    <i class="far fa-calendar-alt"></i>
                    <span>${year}</span>
                </div>
            </div>
            <span class="movie-type">${type}</span>
        </div>
    `;

    return card;
}


// Create TV show card
function createTVShowCard(show) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const posterPath = show.poster_path ? `${IMAGE_BASE_URL}${show.poster_path}` : DEFAULT_POSTER;
    const title = show.name || 'Unknown Title';
    const year = show.first_air_date ? show.first_air_date.substring(0, 4) : 'N/A';
    const rating = show.vote_average ? show.vote_average.toFixed(1) : 'N/A';

    card.innerHTML = `
                <img src="${posterPath}" alt="${title}" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${title}</h3>
                    <div class="movie-meta">
                        <div class="movie-year">
                            <i class="far fa-calendar-alt"></i>
                            <span>${year}</span>
                        </div>
                        <div class="movie-rating">
                            <i class="fas fa-star"></i>
                            <span>${rating}</span>
                        </div>
                    </div>
                    <span class="movie-type">TV Show</span>
                </div>
            `;

    return card;
}

// Create person card
function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const profilePath = person.profile_path ? `${IMAGE_BASE_URL}${person.profile_path}` : 'https://via.placeholder.com/500x750/1f1f1f/808080?text=No+Image';
    const name = person.name || 'Unknown Name';
    const knownFor = person.known_for_department || 'Unknown';
    const knownForTitles = person.known_for ?
        person.known_for.map(item => item.title || item.name).slice(0, 2).join(', ') :
        'N/A';

    card.innerHTML = `
                <img src="${profilePath}" alt="${name}" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${name}</h3>
                    <div class="movie-meta">
                        <div class="movie-year">
                            <i class="far fa-user"></i>
                            <span>${knownFor}</span>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #aaa; margin-top: 8px;">${knownForTitles}</p>
                    <span class="movie-type">Person</span>
                </div>
            `;

    return card;
}

// Show popular content when no search is performed
async function showPopularContent() {
    loader.classList.add('active');

    try {
        // Fetch popular movies
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`);
        const data = await response.json();

        loader.classList.remove('active');

        // Update UI for popular content
        resultsCount.textContent = '(Popular Movies)';
        displayResults(data.results, data.results.length);

    } catch (error) {
        console.error('Error fetching popular content:', error);
        loader.classList.remove('active');
        showError();
    }
}

// Show error state
function showError() {
    resultsGrid.innerHTML = '';
    noResults.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Oops! Something went wrong</h3>
                <p>Please try again later</p>
            `;
    noResults.style.display = 'block';
}

// Initialize with popular movies
document.addEventListener('DOMContentLoaded', () => {
    showPopularContent();
});