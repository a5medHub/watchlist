import {v4 as uuidv4} from 'https://jspm.dev/uuid';
const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")
const listedMovie = document.getElementById("listed-movie")
let movieData = []


// submitSearch.addEventListener("click", ()=>{
//     let theMovie = inputMovie.value
//     callTheMovieForSearchMovie(theMovie)
// })
// function renderMovieTemplateFromApiCall() {

// }
// /* this function is for the submit button to take the parameter 
//    from the input field and pass the data to the url of fetch */
// function callTheMovieForSearchMovie(movieNameParam) {
//     console.log("movieNameParam: "+ movieNameParam)
//     const privateKey = "apikey=b95d0e24"
//     let movieName = "t="+movieNameParam // the T stand for the movie title
//     let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName

//     fetch(url)
//     .then(res => res.json()) // Convert the response to JSON
//     .then(data => {
//         movieData.push(data)
//         // console.log("the fetch data is: ",data)
//         // document.body.innerHTML = `<h1> movie title ${data.Title}</h1>`
//     })
//     // .catch(error => console.error('Error:', error));
//     // listingMovies()
//     console.log(movieData)
//     setTimeout(listingMovies, 100)
// }

// // http://www.omdbapi.com/?i=tt3896198&apikey=b95d0e24
// function listingMovies() {
//     movieData.forEach(e => {
//         console.log("movie ", e)
//         console.log(`
//             movie title  ${e.Title} 
//             rating: ${e.imdbRating}
//             duration: ${e.Runtime}
//             theme: ${e.Genre}
//             breaf: ${e.Plot}
//             image: ${e.Poster}`)
       
            
//             // listedMovie.innerHTML +=`
//             // <div>
//             //     <div>
//             //         <img style="height: 200px;" src="${e.Poster}" alt="image for the movie">
//             //     </div>
//             //     <div>
//             //         <div id="name-section">
//             //             <h5>${e.Title}</h5>
//             //             <p>${e.imdbRating}</p>
//             //         </div>
//             //         <div id="theme-section">
//             //             <p>${e.Runtime}</p>
//             //             <p>${e.Genre}</p>
//             //             <p>Add TO WATCHLIST</p>
//             //         </div>
//             //         <div id="details-section">
//             //             <p>${e.Plot}</p>
//             //         </div>
//             //     </div>
//             // </div>`
//         },0)

// }

submitSearch.addEventListener("click", ()=>{
    console.table("search button clicked", inputMovie.value)
    let theMovie = inputMovie.value
    callTheMovieForSearchMovie(theMovie)
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
    movieData.forEach(e => {
        console.log("output for listingMovies function: ", e)
    },0)
    console.table("data grouped of array movieData: ",movieData)
}

function renderMovieTemplateFromApiCall() {

}