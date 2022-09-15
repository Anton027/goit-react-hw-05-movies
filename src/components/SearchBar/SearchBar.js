import { useState } from "react";

export function Searchbar({ onSubmit }) {
    const [movieName, setMovieName] = useState('');

    const handleOnChange = (e) => {
        setMovieName(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(movieName);
        setMovieName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                        name="moviename"
                        type="text"
                        value={movieName}
                        onChange={handleOnChange}
                        autoFocus
                        placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
} 