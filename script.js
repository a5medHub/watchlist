import {v4 as uuidv4} from 'https://jspm.dev/uuid';
const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")
const listedMovie = document.getElementById("listed-movie")
let movieData = []

submitSearch.addEventListener("click", ()=>{
    console.table("search button clicked", inputMovie.value)
    let theMovie = inputMovie.value
    callTheMovieForSearchMovie(theMovie)
    inputMovie.value = ""
})

function callTheMovieForSearchMovie(movieNameParam) {
    console.log("movieNameParam: "+ movieNameParam)
    const privateKey = "apikey=b95d0e24"
    let movieName = "t="+movieNameParam
    let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName
    
    fetch(url)
        .then(res => res.json())
        .then(data => movieData.push(data))
        .then(listingMovies)
    
}

function listingMovies() {
    listedMovie.innerHTML =``
    movieData.forEach(e => {
        listedMovie.innerHTML +=`
        <div>
            <div>
                <img style="height: 200px;" src="${e.Poster}" alt="image for the movie">
            </div>
            <div>
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
                    <p>${e.Plot}</p>
                </div>
            </div>
        </div>`
    })
}
