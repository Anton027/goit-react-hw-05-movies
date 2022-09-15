// import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"
import { searchMovieFetch } from "services/Fetch";

const Movies = () => {
    const [page,setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');
    const location = useLocation();

    // const updateQueryString = (name) => {
    //     const nextParams = name !== "" ? { name } : {};
    //     setSearchParams(nextParams);
    // };


    useEffect(() => {
        if (movieName === '') {
            return;
        }
        searchMovieFetch(movieName, page).then(res => setMovies(res))
    },[movieName, page])
    
    const onSubmit = movieName => {
        setMovieName(movieName);
        setMovies([]);
        setPage(1);
    }
    return (
        <main>
            <Searchbar onSubmit={onSubmit} />
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

export default Movies;