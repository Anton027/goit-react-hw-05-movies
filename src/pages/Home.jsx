// import { MoviesList } from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import { trendingMoviesFetch } from "services/Fetch";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page] = useState(1);
    const location = useLocation();

    useEffect(() => {
        trendingMoviesFetch(page).then(res => setMovies(res))
    },[page]);

    return (
        
        <main>
            {movies.length > 0 ?
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
                </ul> : 
            <h2>Not found Movies</h2>}
        </main>
    )
}