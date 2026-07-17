// 1. CLOSURE: Encapsulate the Favorites List to keep it secure from global manipulation
const createFavoritesManager = () => {
  const favorites = []; // Private array

  return {
    add: (movie) => {
      if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
        favorites.push(movie);
        return true;
      }
      return false;
    },
    remove: (id) => {
      const index = favorites.findIndex(fav => fav.imdbID === id);
      if (index !== -1) favorites.splice(index, 1);
    },
    getFavorites: () => [...favorites] // Return a shallow copy to prevent direct mutation
  };
};

const favManager = createFavoritesManager();

// 2. DOM ELEMENTS
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieGrid = document.getElementById('movie-grid');
const favoritesContainer = document.getElementById('favorites-container');

// 3. ASYNC/AWAIT & FETCH: Fetch movies safely from OMDb API
const fetchMovies = async (query) => {
  try {
    movieGrid.innerHTML = '<p>Searching the vault...</p>';
    
    // Using ES6+ template literals
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=c53b2cb2`); 
    const data = await response.json();

    if (data.Response === "True") {
      renderMovies(data.Search); // data.Search is an Array of Objects
    } else {
      movieGrid.innerHTML = `<p style="color: #ff7b72;">❌ Error: ${data.Error}</p>`;
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    movieGrid.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
};

// 4. DOM MANIPULATION & ARRAYS: Render dynamic movie cards
const renderMovies = (movies) => {
  // Clear container
  movieGrid.innerHTML = '';

  // ES6+ Destructuring and array iterations
  movies.forEach(({ Title, Year, Poster, imdbID }) => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Handle broken images
    const imgUrl = Poster !== "N/A" ? Poster : '[https://via.placeholder.com/200x250?text=No+Poster](https://via.placeholder.com/200x250?text=No+Poster)';

    card.innerHTML = `
      <img src="${imgUrl}" alt="${Title}">
      <h4>${Title}</h4>
      <p>${Year}</p>
      <button class="fav-btn" data-id="${imdbID}" data-title="${Title}">⭐ Favorite</button>
    `;

    movieGrid.appendChild(card);
  });
};

// 5. DOM & ARRAYS: Render the Favorites Sidebar list
const renderFavorites = () => {
  favoritesContainer.innerHTML = '';
  const list = favManager.getFavorites();

  list.forEach(({ Title, imdbID }) => {
    const li = document.createElement('li');
    li.style.margin = "10px 0";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    
    li.innerHTML = `
      <span>${Title}</span>
      <button class="remove-btn" data-id="${imdbID}" style="background: #ff7b72; padding: 2px 8px; font-size: 0.8rem;">X</button>
    `;
    favoritesContainer.appendChild(li);
  });
};

// 6. EVENTS: Handle Search Submission
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload
  const query = searchInput.value.trim();
  if (query) fetchMovies(query);
});

// 7. EVENT DELEGATION: Efficient event listeners on dynamic elements
movieGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('fav-btn')) {
    const movie = {
      imdbID: e.target.dataset.id,
      Title: e.target.dataset.title
    };
    const added = favManager.add(movie);
    if (added) {
      renderFavorites();
    } else {
      alert("This masterpiece is already in your favorites!");
    }
  }
});

favoritesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const id = e.target.dataset.id;
    favManager.remove(id);
    renderFavorites();
  }
});