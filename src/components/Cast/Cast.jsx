import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { castFetch, IMAGE_URL } from "services/Fetch";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        castFetch(movieId).then(movie => {
            setCast(movie.cast)
        });
    }, [movieId])
    
    return (
        <main>
            <h3>Cast list</h3>
            <ul>
                {cast && cast.length > 0 &&
                    cast.map(actor => 
                        <li key={actor.id}>
                            {actor.profile_path ? <img src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} />
                                : <img src="https://via.placeholder.com/300x450" alt={actor.name} />
                            }
                            
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    )
                }
            </ul>
        </main>
    )
}
export default Cast;