import  Axios from "axios";


const KEY = "ff98b74c6ada2972698b8eff6707845a";
Axios.defaults.baseURL = "https://api.themoviedb.org/3/"

export function trendingMoviesFetch(page) {
    return Axios.get(`trending/all/day?api_key=${KEY}&page=${page}`);
}

export function searchMovieFetch(movie, page) {
    return Axios.get(`/search/movie?api_key=${KEY}&language=en-US&query=${movie}&page=${page}&include_adult=false`);
}