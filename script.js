import {v4 as uuidv4} from 'https://jspm.dev/uuid';
const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")
const listedMovie = document.getElementById("listed-movie")
let movieData = []

// Add event listener to submitSearch button
submitSearch.addEventListener("click", handleSearch)

// Add event listener to inputMovie for 'Enter' key press
inputMovie.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {handleSearch()}})

// Function to handle the search
function handleSearch() {
    console.log("search initiated", inputMovie.value)
    let theMovie = inputMovie.value
    callTheMovieForSearchMovie(theMovie)
    inputMovie.value = ""
}
/* privateKey to use if current token is expired (limit:1000/day) 
     => http://www.omdbapi.com/?i=tt3896198&apikey=4bfd9621 */
function callTheMovieForSearchMovie(movieNameParam) {
    console.log("movieNameParam: "+ movieNameParam)
    const privateKey = "apikey=b95d0e24"
    // const privateKey = "apikey=4bfd9621"
    let movieName = "t="+movieNameParam
    let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName
    console.log("url: "+url)
    fetch(url)
        .then(res => res.json())
        .then(data => movieData.unshift(data))
        .then(listingMovies)
    
}

function listingMovies() {
    listedMovie.innerHTML =``
    movieData.forEach(e => {
        let plot = e.Plot.length > 80 ? e.Plot.substring(0, 80) + ' <span class="read-more" data-full-plot="' + e.Plot + '">...read</span>' : e.Plot;
        listedMovie.innerHTML +=`
        <div id="movie-card">
            <div>
                <img style="height: 200px;" src="${e.Poster}" alt="image for the movie">
            </div>
            <div id="movie-details">
                <div id="name-section">
                    <h3>${e.Title}</h5>
                    <p><i class="fa-solid fa-star"></i>${e.imdbRating}</p>
                </div>
                <div id="theme-section">
                    <p>${e.Runtime}</p>
                    <p>${e.Genre}</p>
                    <p><i class="fa-sharp fa-solid fa-plus"></i>Watchlist</p>
                </div>
                <div id="details-section">
                    <!-- <p>${e.Plot}</p> -->
                    <p class="plot">${plot}</p>
                </div>
            </div>
        </div>
        <hr>`
    })
    document.querySelectorAll('.read-more').forEach(element => {
        element.addEventListener('click', function() {
            this.parentElement.innerHTML = this.getAttribute('data-full-plot');

        });
    });
}
