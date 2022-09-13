// import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { searchMovieFetch } from "services/Fetch";

export const Movies = () => {
    const [page,setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let movieName = searchParams.get("name") ?? "";
    const location = useLocation();

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };
    const onSubmit = () => {
        setMovies([]);
        setPage(1);
        movieName = '';
    }
    useEffect(() => {
        if (movieName === '') {
            return;
        }
        // async function fetchMovies() {
        //     const movies = await searchMovieFetch(movieName, page);
        //     console.log(movies);
        //     setMovies(movies);
        // }
        // fetchMovies();
        searchMovieFetch(movieName, page).then(res => setMovies(res))
    },[movieName, page])
    
    
    return (
        <main>
            <Searchbar onSubmit={onSubmit} value={movieName} onChange={updateQueryString} />
            <ul>
                {/* <MoviesList movies={movies} /> */}
                {/* {movies.map(({
                        id, poster_path,
                        title, original_name,
                        release_date
                        ,
                        first_air_date, popularity
                    }) => 
                        <li key={id}>
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_name || title} />
                            <p>{original_name || title}</p>
                            <p>{
                                first_air_date || release_date
                            }</p>
                            <p>{popularity}</p>
                        </li>
                )} */}
                {movies.map(({ id, title, original_name }) => 
                    <li key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
                            {original_name || title}
                        </Link>
                    </li>
                )}
            </ul>
        </main>
    )
}