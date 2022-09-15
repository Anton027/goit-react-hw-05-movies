
const axios = require('axios').default;

const KEY = "ff98b74c6ada2972698b8eff6707845a";
axios.defaults.baseURL = "https://api.themoviedb.org/3/"

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w300'
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

export async function movieIdFetch(movieId) {
    try {
        const response = await axios.get(
            `/movie/${movieId}?api_key=${KEY}&language=en-US`
        );
        const movies = await response.data;
        return movies;
    } catch (error) {
        console.log(error);
    }
}

export async function castFetch(movieId) {
    try {
        const response = await axios.get(
            `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
        );
        const movies = await response.data;
        return movies;
    } catch (error) {
        console.log(error);
    }
}

export async function reviewFetch(movieId) {
    try {
        const response = await axios.get(
            `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
        );
        const movies = await response.data;
        return movies;
    } catch (error) {
        console.log(error);
    }
}