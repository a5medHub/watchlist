const inputMovie = document.getElementById("input-movie")
const submitSearch = document.getElementById("submit-search")

submitSearch.addEventListener("click", ()=>{
    console.table("search button clicked", inputMovie.value)
})
function renderMovieTemplateFromApiCall() {

}

function callTheMovieForSearchMovie(movieNameParam) {
    const privateKey = "apikey=b95d0e24"
    // let movieName = "t=Game of Thrones&Season=1&Episode=1"
    let movieName = "t="+movieNameParam
    let url = "http://www.omdbapi.com/?"+privateKey+"&"+movieName

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // document.body.innerHTML = `<h1> movie title ${data.Title}</h1>`
    })
}
callTheMovieForSearchMovie("blade runner") 

// http://www.omdbapi.com/?i=tt3896198&apikey=b95d0e24


