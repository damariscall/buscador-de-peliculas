document.getElementById("searchButton").addEventListener("click", searchMovie)

let apiKey = "1c2f1a2f24a5f259b308afa926329b76"
let urlBase = "https://api.themoviedb.org/3/search/movie"
let urlImg = "https://image.tmdb.org/t/p/w200"


//url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=1c2f1a2f24a5f259b308afa926329b76'

//url 'https://api.themoviedb.org/3/tv/1399?language=en-US' 
function searchMovie(){
    let searchInput = document.getElementById("searchInput").value

    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}&language=es-ES`)
    .then(response => response.json())
    .then ( response => displayMovies(response.results))
}

function displayMovies( movies){
    let resultContainer = document.getElementById("results")
    resultContainer.innerHTML = ""

    if(movies.lenght===0){
        resultContainer.innerHTML="<p> No se encontraron resultados para tu busqueda </p>"
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        let tittle = document.createElement("h2")
        tittle.textContent = movie.tittle

        let releaseDate = document.createElement("p")
        releaseDate.textContent = "Fecha de lanzamiento: "+ movie.release_date

        let overview = document.createElement("p") 
        overview.textContent = movie.overview 

        let vote = document.createElement("p") 
        vote.textContent = "Calificacón " + movie.vote_average.toFixed(1)

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement("img")
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(tittle)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview) 
        movieDiv.appendChild(vote)

        resultContainer.appendChild(movieDiv)


    })
}
