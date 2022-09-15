// import { MoviesList } from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import { trendingMoviesFetch } from "services/Fetch";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page] = useState(1);
    const location = useLocation();

    useEffect(() => {
        trendingMoviesFetch(page).then(res => setMovies(res))
    },[page]);

    return (
        
        <main>
            {movies.length > 0 ?
                <>
                    <h2>Tranding today</h2>
                    <ul>
                        {movies.map(({ id, title, original_name }) => 
                            <li key={id}>
                                <Link to={`/movies/${id}`} state={{ from: location }}>
                                    {original_name || title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </>
                : 
            <h2>Not found Movies</h2>}
        </main>
    )
}

export default Home;