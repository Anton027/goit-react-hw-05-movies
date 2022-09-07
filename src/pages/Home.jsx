import { MoviesList } from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react"
import { trendingMoviesFetch } from "services/Fetch";

export const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setiIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        trendingMoviesFetch(page).then(response => {
            setData(prevData => [...prevData, ...response.data.results])
        }).catch(error => setError(error.message))
        .finally(setiIsLoading(false));;
    },[page]);

    return (
        
        <ul>
            {data.length > 0 ?
                <ul>
                    <MoviesList data={data} />
                </ul> : 
            <h2>Not found Movies</h2>}
        </ul>
    )
}