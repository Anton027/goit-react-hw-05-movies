
import { Searchbar } from "components/SearchBar/SearchBar";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"
import { searchMovieFetch } from "services/Fetch";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page,setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState(searchParams.get('query') || '');
    
    const location = useLocation();

    useEffect(() => {
        if (movieName.trim() === '') {
            return;
        }
        searchMovieFetch(movieName, page).then(res => setMovies(res))
    },[movieName, page])
    
    const onSubmit = (movieName) => {
        setMovieName(movieName);
        setMovies([]);
        setPage(1);
        setSearchParams({query: movieName});
    }
    return (
        <main>
            <Searchbar onSubmit={onSubmit} />
            <ul>
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