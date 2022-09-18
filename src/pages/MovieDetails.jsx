
import { BackLink } from "components/BackLink/BackLink";
import {  useLocation,useParams } from "react-router-dom";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { IMAGE_URL, movieIdFetch } from "services/Fetch";
import { useState } from "react";

const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const { movieId } = useParams();

    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        movieIdFetch(movieId).then(movie => {
            setMovie(movie);
        })
    }, [movieId])

    const genres = movie.genres;

    return (
        
        <main>
            <div>
                <BackLink to={backLinkHref}>
                    back 
                </BackLink>
                <div>
                    <div>
                        <h3>{movie.title}</h3>
                        {movie.poster_path ? <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                        : <img src="https://via.placeholder.com/300x450" alt={movie.title} />
                        }
                    </div>
                    <div>
                        <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                        <h4>Genres:</h4>
                        {genres ? <p>{genres.map(genre => genre.name).join(', ')}</p> : <p>No found</p>}
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    <Link to="cast" state={location.state}>Cast</Link>
                </li>
                <li>
                    <Link to="review" state={location.state}>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </main>
    )
}
export default MovieDetails;