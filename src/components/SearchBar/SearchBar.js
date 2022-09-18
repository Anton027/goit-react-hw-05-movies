import { useSearchParams } from "react-router-dom";

export function Searchbar({ onSubmit }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const moviename = searchParams.get('moviename');

    const handleOnChange = (e) => {
        setSearchParams({ moviename: e.currentTarget.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ moviename: form.elements.moviename.value})
        onSubmit(moviename);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                        name="moviename"
                        type="text"
                        onChange={handleOnChange}
                        autoFocus
                        placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
} 