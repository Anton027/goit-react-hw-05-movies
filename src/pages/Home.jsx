import { MoviesList } from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react"
import { trendingMoviesFetch } from "services/Fetch";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setiIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        trendingMoviesFetch(page).then(response => {
            setMovies(prevMovies => [...prevMovies, ...response])
        }).catch(error => setError(error.message))
        .finally(setiIsLoading(false));;
    },[page]);

    return (
        
        <ul>
            {movies.length > 0 ?
                <ul>
                    <MoviesList movies={movies} />
                </ul> : 
            <h2>Not found Movies</h2>}
        </ul>
    )
}