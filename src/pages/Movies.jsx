import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useState } from "react"
import { searchMovieFetch } from "services/Fetch";

export const Movies = () => {
    const [movie, setMovie] = useState('');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movie) {
            return;
        }

        searchMovieFetch(movie, page)
            .then(response => {
                // console.log(response.data.results)
                setData(prevData => [...prevData, ...response.data.results])
            })
            .catch(error => setError(error.message))
    },[movie, page])

    const handleSubmitForm = movie => {
        setMovie(movie);
        setPage(1);
        setData([]);
    }

    return (
        <div>
            <Searchbar onSubmit={handleSubmitForm} />
            <ul>
                <MoviesList data={data} />
            </ul>
            
        </div>
    )
}