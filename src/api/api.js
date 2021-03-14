export const movieAPI = {
	getMovie(movieName) {
		return fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=d8b15afd`)
      .then(response => response.json())
	}
}