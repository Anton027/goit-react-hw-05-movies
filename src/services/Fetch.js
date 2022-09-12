
const axios = require('axios').default;

const KEY = "ff98b74c6ada2972698b8eff6707845a";
axios.defaults.baseURL = "https://api.themoviedb.org/3/"

export async function trendingMoviesFetch(page) {
    try {
        const response = await axios.get(`trending/all/day?api_key=${KEY}&page=${page}`);
        const movies = await response.data.results;
        return movies;

    } catch (error) {
        console.log(error);
    }
}

export async function searchMovieFetch(movie, page) {
    try {
        const response = await axios.get(
            `/search/movie?api_key=${KEY}&language=en-US&query=${movie}&page=${page}&include_adult=false`
        );
        const movies = await response.data.results;
        return movies;
    } catch (error) {
        console.log(error);
    }
}