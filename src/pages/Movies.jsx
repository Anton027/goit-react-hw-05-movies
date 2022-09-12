import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { searchMovieFetch } from "services/Fetch";

export const Movies = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("name") ?? "";

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        if (movieName === '') {
            return;
        }
        async function fetchMovies() {
            const movies = await searchMovieFetch(movieName, page);
            console.log(movies);
            setMovies(movies);
        }
        fetchMovies();
    },[movieName, page])
    
    
    return (
        <div>
            <Searchbar value={movieName} onChange={updateQueryString} />
            <ul>
                <MoviesList movies={movies} />
            </ul>
        </div>
    )
}