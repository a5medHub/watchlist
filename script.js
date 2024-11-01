fetch("http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1&apikey=b95d0e24")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.innerHTML = `<h1> movie title ${data.Title}</h1>`
    })





// http://www.omdbapi.com/?i=tt3896198&apikey=b95d0e24
