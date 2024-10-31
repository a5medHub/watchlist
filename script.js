fetch("http://www.omdbapi.com/?t=GameofThrones&Season=1&Episode=1&apikey=b95d0e24")
    .then(res => res.json())
    .then(data => console.log(data))
    // http://www.omdbapi.com/?i=tt3896198&apikey=b95d0e24
