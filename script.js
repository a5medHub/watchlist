import {v4 as uuidv4} from 'https://jspm.dev/uuid';
const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")
const listedMovie = document.getElementById("listed-movie")
let movieData = []

submitSearch.addEventListener("click", ()=>{
    console.log("search button clicked", inputMovie.value)
    let theMovie = inputMovie.value
    callTheMovieForSearchMovie(theMovie)
    inputMovie.value = ""
})

function callTheMovieForSearchMovie(movieNameParam) {
    console.log("movieNameParam: "+ movieNameParam)
    const privateKey = "apikey=b95d0e24"
    let movieName = "t="+movieNameParam
    let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName
    console.log("url: "+url)
    fetch(url)
        .then(res => res.json())
        .then(data => movieData.push(data))
        .then(listingMovies)
    
}

function listingMovies() {
    listedMovie.innerHTML =``
    movieData.forEach(e => {
        let plot = e.Plot.length > 100 ? e.Plot.substring(0, 100) + ' <span class="read-more" data-full-plot="' + e.Plot + '">...read</span>' : e.Plot;
        listedMovie.innerHTML +=`
        <div id="movie-card">
            <div>
                <img style="height: 200px;" src="${e.Poster}" alt="image for the movie">
            </div>
            <div id="movie-details">
                <div id="name-section">
                    <h5>${e.Title}</h5>
                    <p>${e.imdbRating}</p>
                </div>
                <div id="theme-section">
                    <p>${e.Runtime}</p>
                    <p>${e.Genre}</p>
                    <p>Add TO WATCHLIST</p>
                </div>
                <div id="details-section">
                    <!-- <p>${e.Plot}</p> -->
                    <p class="plot">${plot}</p>
                </div>
            </div>
        </div>`
    })
    document.querySelectorAll('.read-more').forEach(element => {
        element.addEventListener('click', function() {
            this.parentElement.innerHTML = this.getAttribute('data-full-plot');

        });
    });
}
