const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")
const listedMovie = document.getElementById("listed-movie")
let movieData = []

submitSearch.addEventListener("click", ()=>{
    console.table("search button clicked", inputMovie.value)
    let theMovie = inputMovie.value
    callTheMovieForSearchMovie(theMovie)
})
function renderMovieTemplateFromApiCall() {

}

function callTheMovieForSearchMovie(movieNameParam) {
    console.log("movieNameParam: "+ movieNameParam)
    const privateKey = "apikey=b95d0e24"
    // let movieName = "t=Game of Thrones&Season=1&Episode=1"
    let movieName = "t="+movieNameParam
    let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName

    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        movieData.push(data)
        // document.body.innerHTML = `<h1> movie title ${data.Title}</h1>`
    })
    listingMovies()
}
callTheMovieForSearchMovie("blade runner") 

// http://www.omdbapi.com/?i=tt3896198&apikey=b95d0e24
function listingMovies() {
    movieData.forEach(e => {
        console.log("movie", e)
    },0)
    // listedMovie.innerHTML =`
    //     <div>
    //         <img style="height: 200px;" src="https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg" alt="image for the movie">
    //     </div>
    //     <div>
    //         <div id="name-section">
    //             <h5>${movieData.Title}</h5>
    //             <p>MOVIE RATING</p>
    //         </div>
    //         <div id="theme-section">
    //             <p>MOVIE TIME</p>
    //             <p>MOVIE THEME</p>
    //             <p>ASS TO WATCHLIST</p>
    //         </div>
    //         <div id="details-section">
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //                 Voluptas mollitia tempora necessitatibus suscipit ullam qui aperiam at praesentium repellendus cum! Culpa quod, 
    //                 neque adipisci cumque ex cum quisquam ea nesciunt.
    //             </p>
    //         </div>
    //     </div>`

}
    // console.log(movieData)