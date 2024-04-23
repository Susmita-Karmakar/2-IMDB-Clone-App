// Initial list of movies
const moviesList = [];

// Function to display the list of movies in a table format
function displayMovies() {
      const moviesTableBody = document.getElementById('movies');
      moviesTableBody.innerHTML = '';

      // Iterate over the moviesList array and display each movie in a table rows
      moviesList.forEach((movie) => {
            const rowsOfMovies = document.createElement('tr');

            const movieTitle = document.createElement('td');
            movieTitle.textContent = movie.title;

            const releaseYear = document.createElement('td');
            releaseYear.textContent = movie.year;

            const movieGenre = document.createElement('td');
            movieGenre.textContent = movie.genre;

            const movieRating = document.createElement('td');
            movieRating.textContent = movie.rating;

            rowsOfMovies.appendChild(movieTitle);
            rowsOfMovies.appendChild(releaseYear);
            rowsOfMovies.appendChild(movieGenre);
            rowsOfMovies.appendChild(movieRating);

            moviesTableBody.appendChild(rowsOfMovies);
      });
}

// Function to handle adding a new movie
function addMovie(event) {
      event.preventDefault();

      // Get values from the form inputs
      const title = document.getElementById('movie-title').value;
      const year = document.getElementById('movie-year').value;
      const genre = document.getElementById('movie-genre').value;
      const rating = document.getElementById('movie-rating').value;

      // Create a new movie object
      const newMovie = {
            title,
            year,
            genre,
            rating: parseFloat(rating)
      };

      // Add the new movie to the moviesList array
      moviesList.push(newMovie);

      // Reset the form inputs
      document.getElementById('add-movie-form').reset();

      // Display the updated list of movies
      displayMovies();
}

// Add event listener for form submission
document.getElementById('add-movie-form').addEventListener('submit', addMovie);

// Display the initial list of movies when the page loads
// displayMovies();
